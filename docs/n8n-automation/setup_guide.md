# n8n 설치 및 설정 가이드

## 🚀 1단계: Docker Compose 설치

### 필수 파일 생성

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

### 실행
```bash
cd ~/devminelab
docker-compose up -d
```

## 📱 2단계: Slack 연동

1. **Slack 워크스페이스에서 Webhook 생성**
   - Apps → "Incoming Webhooks" 검색
   - Add to Slack → 채널 선택
   - 생성된 URL을 `.env`에 입력

2. **컨테이너 재시작**
```bash
docker-compose restart
```

## 📥 3단계: 워크플로우 Import

1. http://localhost:5678 접속
2. 계정 생성
3. 각 JSON 파일 Import:
   - Import from file 클릭
   - 워크플로우 활성화 (토글 스위치)

## 🔗 4단계: GitHub Webhook 설정

**각 리포지토리에서:**
1. Settings → Webhooks → Add webhook
2. Payload URL: `http://your-server:5678/webhook/devminelab-deploy`
3. Content type: `application/json`
4. Events: "Workflow runs" 선택

## ✅ 설정 완료 확인

### 테스트 명령어
```bash
# n8n 상태 확인
docker-compose ps

# 로그 확인
docker-compose logs n8n

# Webhook 테스트
curl -X POST http://localhost:5678/webhook/test
```

### 기대 결과
- n8n 웹페이지 정상 접속
- Slack 테스트 메시지 수신
- 워크플로우 정상 실행