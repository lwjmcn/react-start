/*
동기 비동기
.then() 대신 
async 함수에 await 키워드를 붙여씀

Movie 컴포넌트 분리
<Movie key={//id//} ... />
key 속성 : map 안에서 컴포넌트들을 렌더하기 위해 필요!

React Router(스크린페이지)
npm install react-router-dom
App.js : router를 render하는 역할
BrowserRouter / HashRouter
Link : 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜줌
path에 :으로 변수값 읽기 가능 -> useParams()

npm i gh-pages (npm install --save gh-pages)
github 페이지에 올리는 법
npm build 
package.json - "homepage": "https://깃헙사용자이름.github.io/레포지토리이름"
package.json - "scripts": {"deploy": "gh-pages -d build", "predeploy": "npm run build"}
npm run deploy

*/
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return <Router basename = {process.env.PUBLIC_URL}>
    <Routes> {/* 한 번에 하나의 route만 렌더링 */}
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>;
}

export default App;
