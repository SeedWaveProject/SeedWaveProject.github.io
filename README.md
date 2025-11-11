# SeedWave Project

> 사막화 방지를 위한 드론 파종 서비스

SeedWave는 드론 기술과 생분해성 파종 캡슐을 활용하여 사막화 지역의 녹지화를 실현하는 혁신적인 프로젝트입니다.

## 🌱 프로젝트 개요

사막화 확산을 효과적으로 방지하고, 지속 가능한 생태계 복원을 목표로 합니다.

### 핵심 기술
- 고흡수성 수지(SAP) 기반 수분 공급 시스템
- 커피박 활용 친환경 비료
- 사막 최적화 종자 선정
- 생분해성 플라스틱 파종 장치
- 수용성 HPMC 케이스
- 드론-GIS 정밀 파종 시스템

## 🚀 시작하기

### 필요 조건
- Node.js (v16 이상)
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/SeedWaveProject/SeedWaveProject.github.io.git

# 디렉토리 이동
cd SeedWaveProject.github.io

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속하여 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 📦 GitHub Pages 배포

### 배포 방법

1. **자동 배포 (권장)**

```bash
npm run deploy
```

이 명령어는 자동으로 빌드하고 `gh-pages` 브랜치에 배포합니다.

2. **수동 배포**

```bash
# 빌드
npm run build

# gh-pages 브랜치에 배포
npx gh-pages -d dist
```

### GitHub Pages 설정

1. GitHub 저장소의 **Settings** > **Pages** 로 이동
2. **Source**를 `gh-pages` 브랜치로 설정
3. 배포 완료 후 `https://[username].github.io/SeedWaveProject.github.io/` 에서 확인

## 🗂️ 프로젝트 구조

```
SeedWaveProject.github.io/
├── public/              # 정적 파일
│   └── assets/          # 이미지, 아이콘
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── Home.js     # 메인 페이지
│   │   ├── Technology.js  # 기술혁신
│   │   ├── History.js     # 히스토리
│   │   └── Organization.js # 조직
│   ├── App.js          # 메인 App 컴포넌트
│   ├── App.css         # 통합 스타일 파일
│   └── index.js        # 진입점
├── index.html          # HTML 템플릿
├── vite.config.js      # Vite 설정
└── package.json        # 프로젝트 설정
```

## 🛠️ 기술 스택

- **React 18** - UI 라이브러리
- **React Router v6** - 라우팅
- **Vite** - 빌드 도구
- **CSS** - 스타일링 (단일 App.css)
- **gh-pages** - GitHub Pages 배포

## 📄 페이지 구성

- **프로젝트 개요** (`/`) - 프로젝트 비전 및 핵심 가치
- **기술혁신** (`/technology`) - 6가지 핵심 기술 및 드론 파종 시스템
- **히스토리** (`/history`) - 프로젝트 타임라인 및 주요 성과
- **조직** (`/organization`) - 팀 구성 및 조직 가치

## 🎨 디자인 특징

- 다크 테마 기반 모던한 UI
- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 그라데이션 및 글래스모피즘 효과
- 부드러운 호버 애니메이션
- 접근성을 고려한 색상 대비

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 👥 기여

프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해 주세요.

---

**SeedWave** - 사막화 확산의 효과적 방지를 위한 혁신적인 솔루션
