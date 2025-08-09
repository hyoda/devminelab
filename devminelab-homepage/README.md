# 데브마인랩 홈페이지

데브마인랩의 공식 홈페이지입니다. AI 기반 비즈니스 자동화 솔루션을 제공하는 회사의 서비스와 프로젝트를 소개합니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Headless UI
- **Deployment**: GitHub Pages

## 📁 프로젝트 구조

```
devminelab-homepage/
├── src/
│   ├── app/
│   │   ├── about/           # 회사 소개 페이지
│   │   ├── contact/         # 문의하기 페이지
│   │   ├── layout.tsx       # 전역 레이아웃
│   │   └── page.tsx         # 메인 홈페이지
│   └── components/
│       ├── Footer.tsx       # 푸터 컴포넌트
│       └── Navbar.tsx       # 네비게이션 바
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages 배포 워크플로우
└── ...
```

## 🛠️ 개발 환경 설정

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 시작됩니다.

### 3. 빌드
```bash
npm run build
```

### 4. 린팅
```bash
npm run lint
```

## 🎨 주요 기능

### 🏠 메인 페이지
- 히어로 섹션: 회사 소개 및 주요 메시지
- 서비스 섹션: 4가지 핵심 서비스 소개
- 비전 섹션: 회사의 비전과 미션
- 프로젝트 섹션: 진행 중인 프로젝트 소개
- CTA 섹션: 프로젝트 상담 유도

### 🏢 회사 소개 페이지 (`/about`)
- 비전 및 미션
- 핵심 가치
- 회사가 하는 일
- 성장 과정 타임라인

### 📞 문의하기 페이지 (`/contact`)
- 연락처 정보
- 프로젝트 상담 신청 폼
- 자주 묻는 질문

## 🎯 서비스 소개

1. **AI 비즈니스 워크북**: 실전 AI 도구 활용법 학습
2. **업무 자동화 솔루션**: 반복 업무 자동화로 생산성 향상
3. **AI 기반 비즈니스 컨설팅**: AI 기술을 활용한 비즈니스 전략 수립
4. **디지털 전환(DX) 지원**: 체계적인 디지털 전환 지원

## 🚢 배포

GitHub Actions를 통해 자동 배포됩니다:
- `main` 브랜치에 푸시 시 자동으로 GitHub Pages에 배포
- 정적 사이트로 export되어 배포

## 📝 추가 개발 예정 사항

- [ ] 서비스 상세 페이지
- [ ] 블로그 섹션
- [ ] 프로젝트 상세 페이지
- [ ] PG 결제 시스템 연동
- [ ] 다국어 지원
- [ ] SEO 최적화

## 📄 라이선스

Copyright © 2024 데브마인랩. All rights reserved.

## 📧 문의

- 이메일: hdseo@devmine.co.kr
- 웹사이트: https://devmine.co.kr
- 운영시간: 평일 09:00 - 18:00
