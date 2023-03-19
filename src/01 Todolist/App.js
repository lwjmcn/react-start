/*
npx create-react-app 프로젝트명
npm start 실행 (package.json "scripts" 확인)

npm i prop-types

CSS 분할 적용
  Button.module.css 파일 생성 
  -> Button.js에서 styles로 import 
  -> <button className={styles.btn}>

setState에서 배열 수정
setState((current)=>[추가할요소, ...current]);
*/
import Button from "./Button"
import { useState } from "react";

function App() {
  const [toDo,setToDo] = useState("");
  const [toDos,setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === "")
      return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  return (
    <div>
      <h1>My To-Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo}
          onChange={onChange}
          type="text" 
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
