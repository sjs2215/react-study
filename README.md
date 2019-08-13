리액트 공식 문서 https://reactjs.org

---


#### 개발환경 구축

https://velopert.com/3621

나는 vs code말고 atom 쓰기로 함

> *버전 확인
>
> node -v
>
> 9.11.2
>
> npm -v
>
> 6.4.1 
>
> 사용자 이름 한글이지만 이미 구축해 논 거 다시하기 귀찮기 때문에 패스. 미래의 내가 해결하겠지1

#### React 와 Atom 명령어

*새로운 리액트 앱 만들 때 cmd 명령어

```
cd C:\Users\내한글이름\Desktop\react-app
create-react-app hello-react
```

*리액트 앱 시작할 때 cmd 명령어

```
C:\Users\내한글이름\Desktop\react-app
cd hello-react(이름)
yarn start
또는
C:\Users\내한글이름\Desktop\react-app
npm run start/ npm start
```

*리액트 끌 때

```
ctrl + c
```

*확인 브라우저 uri

```
localhost:3000
```

*아톰 에디터 단축키

```
프로젝트 창 열기
Ctrl + \
사라진 메뉴바 다시 살리기
alt+v 누르고 view에서 toggle menu bar 클릭
```

*create-react-app 에러 날 때 환경변수 설정해주기

```
C:\Useres\사용자이름\AppData\Roaming\npm to windows PATH variable
```


*내 리액트 앱들 위치

```
생코 강의들으며 실습한 앱들은 여기에
C:\Users\내한글이름\Desktop\react-app
예전 스터디할 때 실습한 앱들은
c:\Users\내한글이름/
(codesplitting, hello-react, new-react-counter, redux-starter-kit, react-router-tutorial)
```

*react-app폴더로 디렉토리 정하기

```
cmd에서 
cd C:\Users\내한글이름\Desktop\react-app
create-react-app .
```



------

- npm

=node.js를 이용해서 만들어진 여러 앱들을 명령어 환경에서 손쉽게 설치할 수 있는 도구. (=node.js계의 앱스토어 느낌?)

- npx

> react 앱 만들 때 ([리액트 깃헙][]) 이렇게 하는 방식도 있음

```
npx create-react-app my-app
cd my-app
npm start
```

create-react-app을 일회용으로 설치하고 지워버림. 

장점) 항상 최신 버전. 실무에선 이거 쓰기~


---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
