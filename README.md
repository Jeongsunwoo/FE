# 🍷 We Luv Wine

> 항해99 14기 9조 주특기 mini 프로젝트 <br>
> 와인을 좋아하는 사람들 모두 모여라~ 내게 좋은 추억을 전해준 와인을 너에게도 알려줄게!<br>
> 와인에 대한 이야기를 나눌 수 있는 공간입니다.

# ⚙️ BE Tech Stack

<br>
<div align=center> 
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> 
<img src="https://img.shields.io/badge/PYTHON-3776AB?style=for-the-badge&logo=PYTHON&logoColor=white">
<img src="https://img.shields.io/badge/SPRING BOOT-6DB33F?style=for-the-badge&logo=SPRING BOOT&logoColor=white">
<img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white">
<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/junit5-25A162?style=for-the-badge&logo=junit5&logoColor=white">
</div>

<br>

# ⚙️ FE Tech Stack

<br>
<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=#CC6699">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">

<br>

## 💻 9조의 S.A가 궁금하다면?

https://kaput-birth-81b.notion.site/S-A-b5c42c60c43c4298bd123ecd03e12de1

<br>

## 🖥️ 페이지 설계

#### 메인 페이지

<img src="/public/img/main.jpg" />

#### 와인 리스트 페이지

<img src="/public/img/wineList.jpg" />

## 📖 ERD

![image](https://user-images.githubusercontent.com/102853354/236878245-8fe36ff4-9e56-470a-a5f5-be1004e04489.png)

  <br>

## 🧑‍🤝‍🧑 회원 관리 관련 기능

1. 회원 가입 API<br>

   - memberId, password, nickname을 Client에서 전달받습니다.<br>
   - memberId는 `5~20자의 영문 소문자, 숫자와 특수기호(_),(-)`만 사용 가능합니다.<br>
   - password는 `8~16자 영문 대 소문자, 숫자, 특수문자`만 가능합니다.<br>
   - nickname은 `2~8자 이내`로 사용가능합니다.<br>
   - 중복된 Id, nickname은 사용할 수 없습니다.<br>

  <br>
    
  2. 로그인 / 로그아웃 API<br>
    - 로그인 성공 시, Access Token과 Refresh Token을 발급하고 헤더에 토큰을 추가합니다.<br>
    - Redis를 적용하여 로그아웃을 진행합니다.<br>
  <br>
  
  3. 마이페이지 API<br>
    - 마이페이지에서 내가 쓴 글의 목록을 조회할 수 있습니다.
  <br>
   
  
## 🏆 와인 리뷰 기능
  1. 와인 검색 API<br>
    - 와인 이름을 키워드로 조회할 수 있습니다.<br>
    - Full name을 검색하지 않아도 됩니다. 일부 키워드로 검색이 가능합니다.
  <br>
  
  2. 리뷰 작성 API<br>
    - 내가 좋아하는 와인에 리뷰를 업로드할 수 있습니다. 
  <br>
    
  3. 리뷰 수정 API<br>
    - 내가 작성한 리뷰에 한하여 수정할 수 있습니다.
  <br>
    
  4. 리뷰 삭제 API<br>
    - 내가 작성한 리뷰에 한하여 삭제할 수 있습니다.
  <br>
    
  5. 와인 좋아요 API<br>
    - 내가 좋아하는 와인에 좋아요 버튼을 눌러 추천할 수 있습니다.<br>
    - 이미 누른 좋아요 버튼을 다시 누른다면 추천은 취소됩니다.
  <br>
  
  6. 추천 와인 조회 API<br>
    - 추천된 와인 중 추천수가 가장 많은 와인은 `와인의 전당`에 올라갑니다.<br>
    - `와인의 전당`에 오른 와인의 추천수가 같다면 고유 식별 코드를 기준으로 정렬되어 올라갑니다.
  <br>
  
 ## 예외처리
 ```
 - 토큰이 필요한 API 요청에서 토큰을 전달하지 않았거나 정상 토큰이 아닐 때는 "토큰이 유효하지 않습니다." 라는 에러메시지와 statusCode: 400을 반환합니다.
- 토큰이 있고, 유효한 토큰이지만 해당 사용자가 작성한 게시글/댓글이 아닌 경우에는 “작성자만 삭제/수정할 수 있습니다.”라는 에러메시지와 statusCode: 400을 반환합니다.
- DB에 이미 존재하는 memberId로 회원가입을 요청한 경우 "중복된 memberId 입니다." 라는 에러메시지와 statusCode: 400을 반환합니다.
- 로그인 시, 전달된 memberId로 password 중 맞지 않는 정보가 있다면 "회원을 찾을 수 없습니다."라는 에러메시지와 statusCode: 400을 반환합니다.
- 회원가입 시 memberId와 password의 구성이 알맞지 않으면 에러메시지와 statusCode: 400을 반환합니다.
 ```

## 페이지 예외처리

```
- 로그인 하지 않은 상태에서 페이지 접근 시, 또는 URL경로로 직접 접근 시 메인페이지 외 다른 페이지에서는 "로그인이 필요한 서비스 입니다"라는 경고 문구를 반환하고 로그인 페이지로 이동 시킵니다.
- 각 페이지의 데이터 로딩 중, 서버 에러 시 화면에서 로딩 중 및 에러 화면을 띄워 사용자의 혼란을 줄이도록 합니다.
- 회원 가입, 로그인, 검색 입력란 유효성 검사에서 공백일 경우 경고 문구를 띄우고 데이터가 넘어가지 않도록 합니다.
```

## FE 트러블 슈팅 및 피드백 정리

```
1. 기능 정리

- 회원가입, JWT토큰 로그인, 리뷰 작성, 리뷰 수정, 리뷰 삭제, 와인 리스트 조회, 와인 랭킹 조회, 와인 검색 기능, 와인 추천 기능, 와인 정보 상세페이지 동적 라우팅


2. 시도한 부분

- 로그인 처리는 프론트 협업 세션에서 받은 자료를 참고해서, 백엔드로부터 토큰을 받으면
헤더에 토큰이 존재할 경우 인터셉터로 응답을 가로채서 자동으로 세션 스토리지에 저장되게 처리
- 사용자 정보가 필요한 요청에서도 인터셉터를 사용해서 헤더에 토큰이 존재할 경우 자동으로 서버에 전달되게 하여
토큰을 전달하는 작업을 컴포넌트에서 반복 진행하지 않고 API에 오기 전에 수행

- 검색 기능 : 리액트 쿼리, 지역상태로 관리
1. 같은 페이지 내에서 데이터가 업데이트 되어야 해서 리덕스로 관리하고자 했으나,
다른 페이지에서 재사용되지 않는 데이터기 때문에 굳이 리덕스를 사용할 필요성을 못느껴 지역상태로 관리

추후에 recoil 또는 justand, useContext 등을 사용해 볼 예정


3. 트러블 슈팅

- 기본적인 CRUD는 문제 없었지만, 로그인 처리와, 검색 기능, 추천 기능을 구현하는 데에 문제 발생

1) 리덕스 상태관리 시 URL 직접경로 접근 문제

데이터 통신을 줄이기 위해 리덕스로 와인 데이터를 관리
=> 하지만 상세 페이지로 이동하는 경우, URL 경로로 직접 진입 시에는 페이지가 새로고침에 의해 리렌더링 되어 전역 상태 데이터가 소실되어 가져오지 못하는 문제 발생

=> 이 때문에 상세 페이지는 따로 분리되게끔 상세 페이지에서 데이터 통신을 하여 와인 정보를 받아 오게 하였는데,
 리덕스 persist를 사용할 수 있다는 것을 알게 되어 다음 프로젝트에서 적용해볼 예정


2) 검색 기능, UI 업데이트 문제
검색 기능까지 구현하였으나, 처음 검색을 하면 데이터를 가져오고 있지만, UI는 업데이트 되지 않는 문제 발생
이 때문에 검색을 두번 실행해야 새로고침에 의해 렌더링 되어 데이터가 나타나는 현상

=> 버튼 이벤트 발생 시 useQuery로 데이터를 받아올 때, useEffect에서 data가 있을 경우 data를 감시하여
따로 setState에 data가 업데이트 될 때 마다 => 데이터를 바로 업데이트 하도록 설정하여 해결

3. 로그인 Origin문제 ) 포트 번호를 맞춰야 한다는 것을 깨달아서, 3000번에서 요청하여 해결

```

#### 매니저님 피드백

```
- 프리티어, ESlint를 사용하여 협업에 필요한 셋팅을 해놓았으면 좋았을 것

- axios에서 instance를 너무 많이 사용하면 좋지 않다. 지금 코드에서는 intercepter를 하나로 줄일 수 있을 것.
 (어차피 토큰이 있는지 여부를 조건문으로 걸러주고 있기 때문에)

```
