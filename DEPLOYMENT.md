# GitHub Pages 배포 가이드

SeedWave 웹사이트를 GitHub Pages에 배포하는 방법을 안내합니다.

## 🚀 배포 전 준비사항

### 1. GitHub 저장소 설정 확인

저장소 이름이 `SeedWaveProject.github.io` 형식인지 확인하세요.

### 2. vite.config.js 설정 확인

`vite.config.js` 파일에서 `base` 경로가 올바르게 설정되어 있는지 확인하세요:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/SeedWaveProject.github.io/',
})
```

만약 저장소 이름이 `username.github.io` 형식이라면:

```javascript
base: '/',
```

### 3. package.json 스크립트 확인

`package.json`에 배포 스크립트가 있는지 확인하세요:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 📦 배포 방법

### 방법 1: 자동 배포 (권장)

가장 간단한 방법입니다.

```bash
npm run deploy
```

이 명령어는:
1. 자동으로 프로젝트를 빌드 (`npm run build`)
2. `dist` 폴더의 내용을 `gh-pages` 브랜치에 푸시

### 방법 2: 수동 배포

```bash
# 1. 프로젝트 빌드
npm run build

# 2. 빌드 결과물 확인
# dist 폴더가 생성되었는지 확인

# 3. gh-pages 브랜치에 배포
npx gh-pages -d dist
```

### 방법 3: GitHub Actions를 이용한 자동 배포

`.github/workflows/deploy.yml` 파일을 생성하여 자동 배포를 설정할 수 있습니다:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## ⚙️ GitHub Pages 설정

배포 후 GitHub 저장소에서 설정이 필요합니다:

### 1. Settings 페이지 이동

저장소의 **Settings** 탭으로 이동합니다.

### 2. Pages 설정

좌측 메뉴에서 **Pages**를 선택합니다.

### 3. Source 설정

- **Source**: `Deploy from a branch` 선택
- **Branch**: `gh-pages` 선택
- **Folder**: `/ (root)` 선택
- **Save** 버튼 클릭

### 4. 배포 확인

몇 분 후 페이지 상단에 배포 URL이 표시됩니다:

```
Your site is live at https://[username].github.io/SeedWaveProject.github.io/
```

## 🔍 배포 후 확인사항

### 1. 페이지 접속 확인

배포된 URL로 접속하여 페이지가 정상적으로 로드되는지 확인합니다.

### 2. 라우팅 확인

모든 페이지 링크가 정상적으로 작동하는지 확인합니다:
- 프로젝트 개요 (`/`)
- 기술혁신 (`/technology`)
- 히스토리 (`/history`)
- 조직 (`/organization`)

### 3. 반응형 디자인 확인

다양한 디바이스에서 레이아웃이 정상적으로 보이는지 확인합니다:
- 데스크톱 (1920px+)
- 태블릿 (768px ~ 1024px)
- 모바일 (~ 768px)

## 🐛 문제 해결

### 페이지가 404 오류를 표시하는 경우

1. `vite.config.js`의 `base` 경로 확인
2. GitHub Pages 설정에서 브랜치가 `gh-pages`로 설정되어 있는지 확인
3. 배포 후 5-10분 정도 대기 (GitHub Pages 빌드 시간)

### 스타일이 적용되지 않는 경우

1. 개발자 도구(F12)로 Console 확인
2. CSS 파일 경로 문제인지 확인
3. `base` 경로가 올바른지 재확인

### 라우팅이 작동하지 않는 경우

1. React Router의 `basename` 설정 확인:
   ```javascript
   <Router basename="/SeedWaveProject.github.io">
   ```
2. 브라우저 캐시 삭제 후 재시도

### 이미지나 리소스가 로드되지 않는 경우

1. `public` 폴더에 파일이 있는지 확인
2. 이미지 경로가 절대 경로(`/assets/...`)로 시작하는지 확인

## 🔄 재배포

코드를 수정한 후 재배포하려면:

```bash
# 변경사항 커밋
git add .
git commit -m "Update: [설명]"
git push origin main

# 재배포
npm run deploy
```

## 📊 배포 상태 확인

GitHub 저장소의 **Actions** 탭에서 배포 상태를 확인할 수 있습니다.

## 🔒 보안 고려사항

- API 키나 민감한 정보는 환경 변수로 관리
- `.env` 파일을 `.gitignore`에 추가
- GitHub Secrets를 활용하여 민감 정보 관리

## 💡 팁

### 배포 전 로컬 빌드 테스트

```bash
# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

`http://localhost:4173`에서 프로덕션 빌드를 미리 확인할 수 있습니다.

### 커스텀 도메인 설정

1. `public` 폴더에 `CNAME` 파일 생성
2. 파일 내용: `www.yourdomain.com`
3. DNS 설정에서 CNAME 레코드 추가

---

문제가 해결되지 않는 경우 GitHub Issues에 문의해 주세요.

