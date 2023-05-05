##

### 1. 프로젝트 Description

-

#### 로그인 페이지

<!-- ## <img src="./public/img/main.gif" /> -->

#### 메인 페이지

### 2. 프로젝트 기간

<!-- 2023.04.30 ~ 2023.05.04 -->

<br />

## 🕹️ Stack

### 패키지 설치

1. 상태 관리 : redux-toolkit
2. Routing : react-router-dom
3. 데이터 통신 : axios
4. mock-server : JSON-server
5. CSS : SASS(SCSS)

```
yarn add global sass
yarn add redux react-redux
yarn add react-router-dom
yarn add @reduxjs/toolkit
yarn add axios
yarn add json-server
yarn json-server --watch db.json --port 4000
```

<br />

## ✨ Page 및 컴포넌트 설계

### Page 설계

- HomePage
- SearchPage
- DetailPage
- PostingPage
- AccountPage

### common 컴포넌트 설계

- Header
- Footer

### 컴포넌트 설계

- RankingList
- RankingPost
- SearchList
- SearchBar
- Post
- Comments
- Comment
- PostingForm
- UpdateForm
- Login
- Signup

<br />

## ✅ Commit Convention

```
Feat:	새로운 기능 추가
Fix:	버그 수정 또는 typo
Refactor:	리팩토링
Design:	CSS 등 사용자 UI 디자인 변경
Comment:	필요한 주석 추가 및 변경
Style:	코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
Test:	테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우)
Chore:	위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 등)
Init:	프로젝트 초기 생성
Rename:	파일 혹은 폴더명 수정하거나 옮기는 경우
Remove:	파일을 삭제하는 작업만 수행하는 경우
Docs : README.md 텍스트 파일 수정하는 경우
```
