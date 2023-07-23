import './App.css'
import {useState} from 'react';

function Counter({title, initValue}){ // 컴포넌트를 정의하는 함수
//return 은 하나의 태그만 해야함. 그래서 div로 감싸줌.
  const [count, setCount] = useState(initValue);
  function up(){
    setCount(count+1);
  }
return <div>
  <h1>{title}</h1>
  <button onClick={up}>+</button> {count}
</div>
}

function App() {
  return (
    <div>
      {/* 아래와 같이 컴포넌트 사용 */}
      <Counter title="불면증 카운터" initValue={10}></Counter>  

    </div>
  );
}

export default App;
