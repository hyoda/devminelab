# 크롤캣 앱에 n8n Webhook 연동 가이드

## 🎯 목표
크롤캣의 대량상품등록이 완료되면 n8n을 통해 자동으로 Slack 알림을 받기

## 📋 n8n 워크플로우 설정 완료
✅ **파일**: `5_crawlcat_bulk_upload_notification.json`  
✅ **Webhook URL**: `http://localhost:5678/webhook/crawlcat-bulk-upload`  
✅ **기능**: 성공률에 따른 차별화된 알림

## 🔧 크롤캣 앱에 추가할 코드

### 방법 1: HTTP 요청 라이브러리 사용 (권장)

크롤캣 앱의 대량상품등록 완료 부분에 다음 코드를 추가:

#### JavaScript/Node.js 예시:
```javascript
const axios = require('axios');

async function notifyBulkUploadComplete(uploadResult) {
  const webhookUrl = 'http://localhost:5678/webhook/crawlcat-bulk-upload';
  
  const payload = {
    taskId: uploadResult.taskId || `crawlcat-${Date.now()}`,
    status: uploadResult.status || 'completed', // 'completed', 'completed_with_errors', 'failed'
    totalProducts: uploadResult.totalProducts || 0,
    successCount: uploadResult.successCount || 0,
    failedCount: uploadResult.failedCount || 0,
    startTime: uploadResult.startTime,
    endTime: new Date().toISOString(),
    errors: uploadResult.errors || []
  };

  try {
    const response = await axios.post(webhookUrl, payload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 5000
    });
    console.log('n8n 알림 전송 성공:', response.status);
  } catch (error) {
    console.error('n8n 알림 전송 실패:', error.message);
  }
}

// 대량상품등록 완료 후 호출
// notifyBulkUploadComplete(uploadResult);
```

#### Python 예시:
```python
import requests
import json
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
        response = requests.post(
            webhook_url,
            json=payload,
            headers={'Content-Type': 'application/json'},
            timeout=5
        )
        response.raise_for_status()
        print(f'n8n 알림 전송 성공: {response.status_code}')
    except requests.RequestException as error:
        print(f'n8n 알림 전송 실패: {error}')

# 대량상품등록 완료 후 호출
# notify_bulk_upload_complete(upload_result)
```

#### C# 예시 (WinForms/WPF):
```csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public async Task NotifyBulkUploadComplete(UploadResult uploadResult)
{
    var webhookUrl = "http://localhost:5678/webhook/crawlcat-bulk-upload";
    
    var payload = new
    {
        taskId = uploadResult.TaskId ?? $"crawlcat-{DateTimeOffset.Now.ToUnixTimeSeconds()}",
        status = uploadResult.Status ?? "completed",
        totalProducts = uploadResult.TotalProducts,
        successCount = uploadResult.SuccessCount,
        failedCount = uploadResult.FailedCount,
        startTime = uploadResult.StartTime?.ToString("yyyy-MM-ddTHH:mm:ss.fffZ"),
        endTime = DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.fffZ"),
        errors = uploadResult.Errors ?? new string[] { }
    };

    try
    {
        using var client = new HttpClient();
        client.Timeout = TimeSpan.FromSeconds(5);
        
        var json = JsonConvert.SerializeObject(payload);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await client.PostAsync(webhookUrl, content);
        response.EnsureSuccessStatusCode();
        
        Console.WriteLine($"n8n 알림 전송 성공: {response.StatusCode}");
    }
    catch (Exception error)
    {
        Console.WriteLine($"n8n 알림 전송 실패: {error.Message}");
    }
}
```

### 방법 2: 파일 기반 모니터링 (대안)

만약 HTTP 요청이 어렵다면, 파일로 상태를 저장하고 n8n이 주기적으로 확인하는 방식:

#### 크롤캣 앱에서 완료 상태 파일 생성:
```javascript
const fs = require('fs');
const path = require('path');

function writeCompletionStatus(uploadResult) {
  const statusFile = path.join(process.cwd(), 'crawlcat_status.json');
  const statusData = {
    timestamp: new Date().toISOString(),
    taskId: uploadResult.taskId,
    status: uploadResult.status,
    totalProducts: uploadResult.totalProducts,
    successCount: uploadResult.successCount,
    failedCount: uploadResult.failedCount,
    processed: false // n8n이 처리했는지 여부
  };
  
  fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
}
```

## 🎯 알림 유형별 반응

### ✅ 고성공률 (90% 이상)
- 🚀 축하 메시지
- 성공 통계 표시
- 초록색 버튼으로 결과 확인

### ⚠️ 중간성공률 (50-90%)
- 주의 메시지
- 오류 개수 강조
- 노란색 경고로 오류 확인 유도

### 🚨 저성공률 (50% 미만)
- 긴급 알림
- 즉시 확인 필요 메시지
- 빨간색 위험 버튼

## 🔧 설정 방법

### 1단계: n8n에 워크플로우 Import
1. n8n 웹페이지 접속: http://localhost:5678
2. "Import from file" → `5_crawlcat_bulk_upload_notification.json`
3. 워크플로우 활성화

### 2단계: 크롤캣 앱 수정
위의 코드 예시를 참고하여 대량상품등록 완료 시점에 webhook 호출 추가

### 3단계: 테스트
```bash
# 테스트 요청 (터미널에서 실행)
curl -X POST http://localhost:5678/webhook/crawlcat-bulk-upload \
  -H "Content-Type: application/json" \
  -d '{
    "taskId": "test-001",
    "status": "completed",
    "totalProducts": 100,
    "successCount": 95,
    "failedCount": 5,
    "startTime": "2025-08-12T09:00:00Z",
    "endTime": "2025-08-12T09:15:00Z"
  }'
```

## 📊 예상 데이터 구조

크롤캣 앱에서 다음 형태로 데이터를 전송하면 됩니다:

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
    "상품 ID 12345: 이미지 업로드 실패",
    "상품 ID 12350: 가격 형식 오류"
  ]
}
```

## 🎉 기대 효과

- **즉시 알림**: 작업 완료 즉시 Slack으로 결과 확인
- **상세 통계**: 성공/실패 개수, 성공률, 소요시간
- **차별화된 대응**: 성공률에 따른 적절한 알림 레벨
- **빠른 대응**: 실패 시 즉시 확인 가능한 버튼 제공

---

**어떤 방식으로 연동하시겠나요? HTTP Webhook 방식이 가장 실시간성이 좋습니다!** 🚀