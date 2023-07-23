import './App.css'
import {useState} from 'react';

function Counter({title, initValue}){ // 컴포넌트를 정의하는 함수
//return 은 하나의 태그만 해야함. 그래서 div로 감싸줌.
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([5,5]);

  function up(){
    const newCount = count+step;
    const newHistory = [...history];
    setCount(newCount);
    newHistory.push(newCount);
    setHistory(newHistory);
  }
  const stepHandler = (evt) => {
    setStep(Number(evt.target.value));
  };
return <div>
  <h1>{title}</h1>
  <button onClick={up}>+</button> 
  {/* react에선 for문 보다 'map함수'를 더 많이 쓴다. 응집력이 더 높음 */}
  <input type="number" value={step} onChange={stepHandler}/>
  {count}
  <ol> 
    {history.map((e, index)=><li key={index}>{e}</li>)}
  </ol>   
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
