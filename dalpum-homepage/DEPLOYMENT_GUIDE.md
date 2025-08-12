# Dalpum Homepage 배포 가이드

## 서버 정보
- **서버 IP**: 43.202.254.92
- **도메인**: dalpum.hyoda.kr
- **포트**: 12300 (내부), 80/443 (외부)
- **사용자**: ubuntu

## 배포 구조
```
GitHub Actions → AWS Lightsail (Ubuntu) → PM2 → Next.js (포트 12300) → Nginx Reverse Proxy → HTTPS
```

## 초기 서버 설정

### 1. 프로젝트 클론 및 설정
```bash
cd /home/ubuntu
git clone https://github.com/hyoda/dalpum-homepage.git
cd dalpum-homepage
source ~/.nvm/nvm.sh && nvm use node
npm ci
npm run build
```

### 2. PM2 설정
```bash
# PM2 시작
pm2 start ecosystem.config.js

# PM2 자동 시작 설정
pm2 save
pm2 startup
```

- **설정 파일**: `ecosystem.config.js`
- **포트**: 12300
- **로그**: `logs/` 디렉토리

### 3. Nginx 리버스 프록시 설정
서버에서 Nginx 설정 파일을 생성합니다:

```bash
sudo nano /etc/nginx/sites-available/dalpum-homepage
```

다음 내용을 입력:

```nginx
server {
    listen 80;
    server_name dalpum.hyoda.kr www.dalpum.hyoda.kr;

    # Let's Encrypt verification
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://127.0.0.1:12300;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }
}
```

사이트 활성화:
```bash
sudo ln -s /etc/nginx/sites-available/dalpum-homepage /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 자동 배포 (GitHub Actions)

### 필수 Secrets 설정

GitHub Repository → Settings → Secrets and variables → Actions에서 다음 설정:

1. **HOST**: `43.202.254.92`
2. **USERNAME**: `ubuntu`
3. **PRIVATE_KEY**: SSH 개인키 내용

#### SSH 키 확인 방법:
```bash
# 서버에서 SSH 키 확인
cat ~/.ssh/id_rsa

# 또는 새로 생성
ssh-keygen -t rsa -b 4096 -C "dalpum-homepage-deploy"
```

#### GitHub Secrets 설정 단계:
1. GitHub에서 dalpum-homepage 리포지토리로 이동
2. **Settings** → **Secrets and variables** → **Actions** 클릭
3. **New repository secret** 버튼 클릭
4. 다음 3개 시크릿 추가:
   - `HOST`: 서버 IP 주소 입력
   - `USERNAME`: `ubuntu` 입력
   - `PRIVATE_KEY`: SSH 개인키 전체 내용 복사/붙여넣기

### 배포 트리거
- `main` 브랜치에 push 시 자동 배포
- 수동 실행: Actions → Deploy to Production → Run workflow

## SSL 인증서 설정

DNS가 전파된 후 서버에서 실행:

```bash
sudo certbot --nginx -d dalpum.hyoda.kr
```

## 도메인 설정

DNS 레코드 추가:
```
Type: A
Name: dalpum
Value: 43.202.254.92
TTL: 300
```

## 수동 작업 명령어

### 애플리케이션 상태 확인
```bash
# PM2 상태 확인
pm2 list

# 로그 확인
pm2 logs dalpum-homepage

# 애플리케이션 테스트
curl -I http://localhost:12300
```

### 수동 배포
```bash
cd /home/ubuntu/dalpum-homepage
git pull origin main
source ~/.nvm/nvm.sh && nvm use node
npm ci
npm run build
pm2 restart dalpum-homepage
```

### Nginx 관리
```bash
# 설정 테스트
sudo nginx -t

# 재시작
sudo systemctl reload nginx

# 로그 확인
sudo tail -f /var/log/nginx/access.log
```

### 문제 해결
```bash
# 포트 사용 확인
ss -tln | grep :12300

# PM2 프로세스 재시작
pm2 restart dalpum-homepage

# PM2 프로세스 삭제 후 재시작
pm2 delete dalpum-homepage
pm2 start ecosystem.config.js

# Node.js 버전 확인
node --version
npm --version
```

## 현재 상태 체크리스트

### 완료 항목
- ✅ GitHub 리포지토리 생성: https://github.com/hyoda/dalpum-homepage
- ✅ GitHub Actions 워크플로우 설정
- ✅ PM2 ecosystem 설정 파일
- ✅ 포트 12300 설정

### 진행 필요 항목
- ⏳ 서버에 프로젝트 클론 및 설정
- ⏳ GitHub Secrets 설정 (HOST, USERNAME, PRIVATE_KEY)
- ⏳ Nginx 리버스 프록시 설정
- ⏳ DNS 레코드 추가 (dalpum.hyoda.kr)
- ⏳ SSL 인증서 설정

## API 기능 주의사항

이 프로젝트는 남해타임즈 검색 API(`/api/search-articles`)를 포함합니다:
- POST 요청으로 외부 사이트 크롤링
- CORS 정책에 주의
- 서버 환경에서 정상 작동 확인 필요

## 추가 모니터링

### 서버 리소스
```bash
# 디스크 사용량 확인
df -h

# 메모리 사용량 확인
free -h

# PM2 모니터링
pm2 monit
```

### 로그 관리
```bash
# PM2 로그 로테이션
pm2 install pm2-logrotate

# Nginx 로그 정리
sudo logrotate /etc/logrotate.d/nginx
```

## 테스트 URL
- **개발**: http://localhost:3000 (로컬)
- **운영**: https://dalpum.hyoda.kr (배포 후)

---
**마지막 업데이트**: 2025-08-11  
**작성자**: Claude Code Assistant  
**리포지토리**: https://github.com/hyoda/dalpum-homepage


---

이 에러는 서버의 `origin`이 HTTPS로 되어 있고, 프라이빗 저장소라 인증이 필요한데 비밀번호 방식이 막혀서 발생합니다. 서버에서 GitHub을 SSH로 읽을 수 있게 “배포용 Deploy Key”를 설정하고 `origin`을 SSH로 바꾸면 해결됩니다.

다음 명령을 EC2 서버에서 실행하세요.

1) 배포 키 생성 및 에이전트 등록
```bash
ssh-keygen -t ed25519 -C "dalpum-homepage deploy" -f ~/.ssh/dalpum_homepage_deploy -N ""
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/dalpum_homepage_deploy

# SSH 설정과 GitHub 호스트키 등록
printf "Host github.com\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/dalpum_homepage_deploy\n  IdentitiesOnly yes\n" >> ~/.ssh/config
chmod 600 ~/.ssh/config
ssh-keyscan -H github.com >> ~/.ssh/known_hosts
```

2) 공개키를 GitHub에 등록
```bash
cat ~/.ssh/dalpum_homepage_deploy.pub
```
- 출력된 키를 GitHub 저장소 `hyoda/dalpum-homepage` → Settings → Deploy keys → Add deploy key에 등록 (Read-only로 충분)

3) 저장소 `origin`을 SSH로 변경 후 동기화
```bash
cd ~/dalpum-homepage
git remote set-url origin git@github.com:hyoda/dalpum-homepage.git
git fetch --all --prune
git reset --hard origin/main
```

이후 `git pull` 시 더 이상 사용자/비밀번호를 묻지 않고 정상 동작합니다. 우리 GitHub Actions 워크플로우는 원격 서버에서 `git fetch/reset`을 실행하므로, 위 구성(서버의 SSH Deploy Key + SSH origin)이 반드시 필요합니다.

차선책(권장하지 않음): PAT를 서버에 저장해 HTTPS로 풀
- 보안상 좋지 않으니 권장하지 않습니다. 꼭 필요하면 말씀 주세요, 안전한 설정 절차를 안내드리겠습니다.

- 핵심 변경: EC2 `~/.ssh/`에 배포키 생성/등록, GitHub 저장소에 Deploy Key 등록, 서버 저장소 `origin`을 `git@github.com:hyoda/dalpum-homepage.git`로 변경
