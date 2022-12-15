# 처음 시작하는 React Project

## React Project 를 위한 Dependencies

- cf) -D : developer 버전 옵션
- babel : 오래된 브라우저에서 새로운 JS 코드(ECMAscript ES6+)를 실행할 수 있도록 변환하는 도구

```
npm install -D @babel/core @babel/preset-env @babel/preset-react
```

- webpack : bundler. 많은 HTML, CSS, JS 등의 파일을 압축하여 배포하는 도구

```
npm install -D webpack webpack-cli webpack-dev-server
```

- babel-loader : ES6 를 ES5로 바꿔주는 도구, webpack 에서 사용
- html-loader : webpack 에서 HTML 코드를 인식할 수 있도록 하는 도구
- html-webpack-plugin : webpack 에서 사용하는 보조도구

```
npm install -D babel-loader html-loader html-webpack-plugin
```

### 설정파일 만들기

```
touch .babelrc
```

- babel 설정파일 작성하기

```
.babelrc 파일에 다음 내용 추가
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
