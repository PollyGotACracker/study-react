# React and firebase 연동

- `npm install firebase` 설치

## 환경설정을 이용하여 firebase 연동 정보 보안 설정

- 프로젝트 터미널(bash shell) 에서 `touch .env` 환경설정 파일 만들기
- .gitignore 에 있는지 확인
- 프로젝트를 `git push` 하여 .env 파일이 없는지 확인
- /.env 파일에 API 등의 정보를 저장
- 주의: 따옴표, 쉼표, http:// 없애기. JSON 형식이 아님에 주의
- 모든 키 값은 `REACT_APP_` 로 시작된다. 키 = 값 형식으로 구성

```
REACT_APP_APIKEY            =
REACT_APP_AUTHDOMAIN        =
REACT_APP_DATABASEURL       =
REACT_APP_PROJECTID         =
REACT_APP_STORAGEBUCKET     =
REACT_APP_MESSAGINGSENDERID =
REACT_APP_APPID             =
REACT_APP_MEASUREMENTID     =
```

- /firebase/FirebaseConfig.js 에서 연결하기

```js
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};
```
