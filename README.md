## Isaac 한터 글로벌 과제전형 미니 프로젝트

### 0. 버전 정보

- NextJs : 15.1.7
- React : 19.0.0
- Node : 20.14.0

### 1. 라이브러리

- @tanstack/react-query
  - 데이터 캐싱 및 페칭을 위해 사용
- axios
  - 데이터 페칭을 위해 사용
- classnames
  - SSR 환경에서 Tailiwind CSS가 적용되도록 하기 위해 사용
- keen-slider
  - 캐로셀 및 스와이핑 헤더를 제작하기 위해 사용
- react-infinite-scroller
  - 컨텐츠 영역 무한 스크롤 구현하기 위해 사용
- react-swipeable
  - 메인 영역 스와이핑 시 메뉴 이동을 위해 스와이핑 감지를 위해 사용
- msw
  - 추후 BE 연결 이전 API 환경을 구성하기 위해 사용

### 2. 폴더 구조

```
app : 페이지 라우팅 폴더
 ┣ charge
 ┃ ┗ page.tsx
 ┣ chart
 ┃ ┣ 1
 ┃ ┃ ┗ page.tsx
 ┃ ┗ page.tsx
 ┣ event
 ┃ ┗ page.tsx
 ┣ news
 ┃ ┗ page.tsx
 ┣ store
 ┃ ┗ page.tsx
 ┣ whook
 ┃ ┗ page.tsx
 ┣ globals.css
 ┣ layout.tsx
 ┗ page.tsx
 components : 페이지 화면 구성을 위한 컴포넌트 모음
 ┣ chart : /chart 페이지를 위한 컴포넌트
 ┃ ┣ Content.tsx : 하단 리스트 뷰 개별 컨텐트 컴포넌트
 ┃ ┗ Contents.tsx : 하단 리스트 뷰 개별 컨텐츠 묶음 컨테이너 컴포넌트
 ┣ common : 공통 컴포넌트
 ┃ ┣ carousel : 캐로셀 관련 컴포넌트 모음
 ┃ ┃ ┣ Carousel.tsx : 캐로셀 컴포넌트
 ┃ ┃ ┗ CarouselItem.tsx : 개별 캐로셀 아이템 컴포넌트
 ┃ ┗ Button.tsx : 버튼 컴포넌트
 ┣ footer : 최하단 푸터
 ┃ ┗ Footer.tsx
 ┣ header : 최상단 헤더
 ┃ ┗ Header.tsx
 ┗ swipeRouter : 메인 화면 스와이핑을 감지하기 위한 컴포넌트
 ┃ ┗ SwipeRouter.tsx
 interface : 타입스크립트 인터페이스 모음
 ┣ chart
 ┃ ┗ interface.ts
 ┣ common
 ┃ ┣ button.ts
 ┃ ┗ carousel.ts
 ┗ header
 ┃ ┗ interface.ts
 mocks : msw 관련 모음
 ┣ utils : nextjs에 최적화된 msw 환경 세팅을 위한 파일 모음
 ┃ ┣ browser.ts
 ┃ ┣ handler.ts
 ┃ ┣ index.ts
 ┃ ┣ MswProvider.tsx
 ┃ ┗ server.ts
 ┗ __mocks__ : 페이지별 호출하는 모킹 API 작성
 ┃ ┗ chart.ts
 public
 ┣ aurora1.webp
 ┣ aurora2.webp
 ┣ aurora3.webp
 ┗ mockServiceWorker.js
 queries : react-query 모음
 ┣ chartQueries.ts
 ┗ QueryProvider.tsx : nextjs 대응 안정화 컴포넌트
 services : API 서비스 모음
 ┣ chartService.ts
 ┗ http.ts : axios instance 및 interceptor 작성
 utils
 ┗ constants : 변경될 일이 적거나, 여러 곳에서 활용될 여지가 있는 상수 모음
 ┃ ┗ Nav.ts : 헤더 메뉴 모음
```
