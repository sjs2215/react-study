import './App.css'
function Counter(){ // 컴포넌트를 정의하는 함수
//return 은 하나의 태그만 해야함. 그래서 div로 감싸줌.

return <div>
<h1>Counter</h1>
<button>+</button> 
</div>
}

function App() {
  return (
    <div>
      {/* 아래와 같이 컴포넌트 사용 */}
      <Counter></Counter>  
    </div>
  );
}

export default App;
