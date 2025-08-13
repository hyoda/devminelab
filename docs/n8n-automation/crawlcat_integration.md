# 크롤캣 대량상품등록 완료 알림 연동

## 🎯 개요
크롤캣 앱의 대량상품등록이 완료되면 n8n을 통해 실시간으로 Slack 알림을 받는 시스템입니다.

## 📡 Webhook 정보
- **URL**: `http://localhost:5678/webhook/crawlcat-bulk-upload`
- **Method**: POST
- **Content-Type**: application/json

## 🔧 크롤캣 앱 수정 방법

### JavaScript/Node.js
```javascript
async function notifyBulkUploadComplete(uploadResult) {
  const webhookUrl = 'http://localhost:5678/webhook/crawlcat-bulk-upload';
  
  const payload = {
    taskId: uploadResult.taskId || `crawlcat-${Date.now()}`,
    status: uploadResult.status || 'completed',
    totalProducts: uploadResult.totalProducts || 0,
    successCount: uploadResult.successCount || 0,
    failedCount: uploadResult.failedCount || 0,
    startTime: uploadResult.startTime,
    endTime: new Date().toISOString(),
    errors: uploadResult.errors || []
  };

  try {
    await axios.post(webhookUrl, payload);
    console.log('알림 전송 성공');
  } catch (error) {
    console.error('알림 전송 실패:', error);
  }
}
```

### Python
```python
import requests
from datetime import datetime

def notify_bulk_upload_complete(upload_result):
    webhook_url = 'http://localhost:5678/webhook/crawlcat-bulk-upload'
    
    payload = {
        'taskId': upload_result.get('taskId', f'crawlcat-{int(datetime.now().timestamp())}'),
        'status': upload_result.get('status', 'completed'),
        'totalProducts': upload_result.get('totalProducts', 0),
        'successCount': upload_result.get('successCount', 0),
        'failedCount': upload_result.get('failedCount', 0),
        'startTime': upload_result.get('startTime'),
        'endTime': datetime.now().isoformat(),
        'errors': upload_result.get('errors', [])
    }

    try:
        requests.post(webhook_url, json=payload, timeout=5)
        print('알림 전송 성공')
    except Exception as error:
        print(f'알림 전송 실패: {error}')
```

## 📊 데이터 형식
```json
{
  "taskId": "crawlcat-20250812-001",
  "status": "completed",
  "totalProducts": 150,
  "successCount": 142,
  "failedCount": 8,
  "startTime": "2025-08-12T09:00:00.000Z",
  "endTime": "2025-08-12T09:25:30.000Z",
  "errors": [
    "상품 ID 12345: 이미지 업로드 실패"
  ]
}
```

## 🔔 알림 유형

### 🚀 고성공률 (90% 이상)
- 축하 메시지
- 성공 통계 강조
- 긍정적인 톤

### ⚠️ 중간성공률 (50-90%)
- 주의 메시지
- 오류 개수 표시
- 확인 필요 안내

### 🚨 저성공률 (50% 미만)
- 긴급 알림
- 즉시 확인 요청
- 위험 상태 강조

## 🧪 테스트 방법
```bash
curl -X POST http://localhost:5678/webhook/crawlcat-bulk-upload \
  -H "Content-Type: application/json" \
  -d '{
    "taskId": "test-001",
    "status": "completed",
    "totalProducts": 100,
    "successCount": 95,
    "failedCount": 5
  }'
```