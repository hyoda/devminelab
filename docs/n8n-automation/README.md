# DevMineLab n8n 워크플로우 가이드

DevMineLab 프로젝트를 위한 n8n 자동화 워크플로우 모음입니다.

## 📋 워크플로우 목록

### 1. 사이트 상태 모니터링 (`1_site_health_monitor.json`)
- **목적**: 5개 사이트의 상태를 5분마다 체크
- **알림**: 장애 발생 시 즉시 Slack 알림
- **모니터링 사이트**:
  - dalpum.hyoda.kr (남해 워케이션)
  - crawlcat.hyoda.kr (쿠팡 크롤링 도구)
  - n-auto.hyoda.kr (네이버 자동화)
  - ytdn.hyoda.kr (유튜브 다운로더)
  - miracle.hyoda.kr (미라클)

### 2. GitHub 배포 알림 (`2_deploy_notifications.json`)
- **목적**: GitHub Actions 배포 성공/실패 알림
- **webhook**: `/devminelab-deploy` 엔드포인트 사용
- **기능**: 성공 시 사이트 링크, 실패 시 로그 링크 제공

### 3. 개발자 일일 체크리스트 (`3_daily_dev_checklist.json`)
- **목적**: 평일 오전 9시마다 체크리스트 알림
- **내용**: 모니터링, 개발 작업, 배포 및 운영 체크
- **링크**: 모든 사이트 바로가기 버튼 포함

### 4. 사이트 성능 모니터링 (`4_performance_monitor.json`)
- **목적**: 6시간마다 성능 체크, 오후 6시 일일 리포트
- **알림**: 응답시간 3초 초과 시 경고
- **리포트**: 일일 성능 요약

## 🚀 설치 및 설정 가이드

### 1단계: n8n 설치 (Docker Compose 방식)

프로젝트 루트에 다음 파일들을 생성합니다:

**`.env` 파일:**
```bash
# 서버 설정
N8N_HOST=localhost
WEBHOOK_URL=http://localhost:5678
TZ=Asia/Seoul
N8N_RUNNERS_ENABLED=true
N8N_ENCRYPTION_KEY=devminelab_super_secret_key_32chars_minimum

# Slack Webhook URL (설정 필요)
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

**`docker-compose.yml` 파일:**
```yaml
version: "3.8"
services:
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    env_file:
      - ./.env
    volumes:
      - ~/.n8n:/home/node/.n8n
    restart: unless-stopped
```

**실행:**
```bash
cd /path/to/devminelab
docker-compose up -d
```

### 2단계: Slack 연동 설정

1. **Slack 앱에서 Webhook 생성:**
   - Slack 워크스페이스 → Apps → "Incoming Webhooks" 검색
   - Add to Slack → 알림 받을 채널 선택
   - 생성된 webhook URL을 `.env` 파일에 입력

2. **환경변수 적용:**
   ```bash
   docker-compose restart
   ```

### 3단계: 워크플로우 Import

1. **n8n 웹 인터페이스 접속**: http://localhost:5678
2. **계정 생성** (첫 설치 시)
3. **워크플로우 Import**:
   - 화면 우상단 "Import from file" 클릭
   - 각 JSON 파일을 순서대로 import
   - 워크플로우 활성화 (우상단 토글 스위치)

### 4단계: GitHub Webhook 설정 (배포 알림용)

각 GitHub 리포지토리에서:
1. **Settings** → **Webhooks** → **Add webhook**
2. **Payload URL**: `http://your-server:5678/webhook/devminelab-deploy`
3. **Content type**: `application/json`
4. **Which events**: "Workflow runs" 선택
5. **Active** 체크 후 저장

## 🔧 커스터마이징 가이드

### 알림 시간 변경
```javascript
// Cron 표현식 예시
"0 9 * * 1-5"    // 평일 오전 9시
"0 */6 * * *"    // 매 6시간마다
"0 18 * * *"     // 매일 오후 6시
```

### 사이트 추가/제거
각 워크플로우에서 HTTP Request 노드를 복사/수정하여 새 사이트를 추가하거나 기존 사이트를 제거할 수 있습니다.

### 알림 내용 수정
각 워크플로우의 HTTP Request 노드에서 `jsonBody` 부분을 수정하여 알림 메시지를 커스터마이징할 수 있습니다.

## 📊 기대 효과

### 개발 생산성 향상
- **자동 모니터링**: 수동 확인 시간 0초로 단축
- **즉시 알림**: 장애 발생 5분 내 알림 수신
- **일일 루틴**: 체계적인 개발 프로세스 확립

### 운영 안정성 확보
- **24/7 모니터링**: 무중단 상태 체크
- **성능 추적**: 응답 시간 및 가용성 모니터링
- **배포 추적**: 성공/실패 상태 실시간 파악

## 🔍 문제 해결

### 워크플로우가 실행되지 않는 경우
1. n8n 컨테이너 상태 확인: `docker-compose logs n8n`
2. 워크플로우 활성화 상태 확인
3. Cron 표현식 문법 검증

### Slack 알림이 오지 않는 경우
1. `.env` 파일의 `SLACK_WEBHOOK_URL` 확인
2. Slack webhook URL 유효성 테스트
3. n8n 컨테이너 재시작

### GitHub webhook이 작동하지 않는 경우
1. GitHub webhook URL 정확성 확인
2. n8n webhook 엔드포인트 접근 가능성 확인
3. 포트 5678이 외부에서 접근 가능한지 확인

## 📈 다음 단계 추천

1. **SSL 인증서 추가**: HTTPS로 webhook 보안 강화
2. **데이터베이스 연동**: 모니터링 데이터 저장 및 분석
3. **추가 알림 채널**: 이메일, Discord 등 다양한 알림 채널 추가
4. **API 모니터링**: 각 사이트의 API 엔드포인트 상태 체크

---

**문의사항이나 개선 제안이 있으시면 언제든지 말씀해주세요!** 🚀