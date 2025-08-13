# n8n 문제 해결 가이드

## 🚨 일반적인 문제들

### 1. 워크플로우가 실행되지 않음

**증상**: Cron 스케줄이 작동하지 않음

**해결방법**:
```bash
# n8n 로그 확인
docker-compose logs n8n

# 컨테이너 재시작
docker-compose restart

# 시간대 확인
docker exec -it devminelab_n8n_1 date
```

### 2. Slack 알림이 오지 않음

**증상**: Webhook 호출은 성공하지만 Slack에 메시지 없음

**해결방법**:
```bash
# Webhook URL 테스트
curl -X POST $SLACK_WEBHOOK_URL -d '{"text":"테스트"}'

# 환경변수 확인
docker exec -it devminelab_n8n_1 env | grep SLACK
```

### 3. GitHub Webhook 연결 실패

**증상**: 배포 알림이 오지 않음

**확인사항**:
- GitHub webhook URL 정확성
- 포트 5678 외부 접근 가능성
- n8n webhook 엔드포인트 활성화 상태

### 4. 크롤캣 연동 실패

**증상**: 대량등록 완료 후 알림 없음

**디버깅**:
```bash
# n8n webhook 로그 확인
docker-compose logs n8n | grep crawlcat

# 수동 테스트
curl -X POST http://localhost:5678/webhook/crawlcat-bulk-upload \
  -H "Content-Type: application/json" \
  -d '{"taskId":"test","status":"completed","totalProducts":10,"successCount":10,"failedCount":0}'
```

## 🔧 유지보수 명령어

### 정기 점검
```bash
# 컨테이너 상태 확인
docker-compose ps

# 디스크 사용량 확인
du -sh ~/.n8n

# 로그 정리 (7일 이전)
docker-compose logs --since=7d n8n
```

### 백업
```bash
# n8n 데이터 백업
tar -czf n8n-backup-$(date +%Y%m%d).tar.gz ~/.n8n

# 워크플로우만 백업
cp -r ~/devminelab/n8n-workflows ~/backup/
```

### 복구
```bash
# 컨테이너 재생성
docker-compose down
docker-compose up -d

# 데이터 복구
tar -xzf n8n-backup-20250812.tar.gz -C ~/
```

## 📞 지원 요청 시 제공할 정보

1. **에러 로그**:
```bash
docker-compose logs n8n --tail=50
```

2. **환경 정보**:
```bash
docker --version
docker-compose --version
cat .env | grep -v WEBHOOK
```

3. **워크플로우 상태**:
- 활성화 여부
- 마지막 실행 시간
- 에러 메시지

4. **네트워크 테스트**:
```bash
curl -I http://localhost:5678
```