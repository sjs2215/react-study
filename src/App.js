import './App.css'
import {useEffect, useState} from 'react';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

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
  const style = {border:'10px solid black', padding:10, backgroundColor:'tomato'};

return <div style={style}>
  <h1>{title}</h1>
  <button onClick={up}>+</button> 
  <input type="number" value={step} onChange={stepHandler}/>
  {count}
  <ol>   {/* react에선 for문 보다 'map함수'를 더 많이 쓴다. 응집력이 더 높음 */}
    {history.map((e, index)=><li key={index}>{e}</li>)}
  </ol>   
</div> 
}


function CounterUseEffect(){
  const [count, setCount] = useState(0);
  console.log('counteruseeffect',count);
  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(oldCount=>oldCount+1);
    },1000)
    return ()=>{
      console.log('clean');
      clearInterval(id);
    }
  },[]);
 
  const style = { border: '10px solid black', padding:10 };
  return <div style={style}>
    <h1>useEffect Counter</h1> {count}
  </div>
}

function App() {
  return (
    <Container>
      <Grid container maxWidth="xl">
      <Grid item xs={12} sm={6} md={4}>
      <Counter title="불면증 카운터" initValue={10}></Counter> 
      </Grid> 
      <Grid item xs={12} sm={6} md={4}>
      <CounterUseEffect></CounterUseEffect>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <CounterUseEffect></CounterUseEffect>
      </Grid>
      </Grid>
    </Container>
  );
}

export default App;
