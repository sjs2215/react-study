import React, { Component} from 'react';
//리액트라는 라이브러리에서 컴포넌트라는 클래스를 로딩한 것.


class TOC extends Component {

  shouldComponentUpdate(newProps, newState){
    console.log('TOC render shouldComponentUpdate'
    ,newProps.data
    ,this.props.data
  );
    return false;
  }

  render(){
  console.log('TOC render'); //render 호출되는지 로그 찍어보기
  var lists=[];
  var data=this.props.data;
  var i=0;
  while(i<data.length){
      lists.push(
        <li key={data[i].id}>
        <a
        href={"/content/"+data[i].id}
        data-id={data[i].id} //클릭한 id를 얻기 위해 새로운 속성 추가
        onClick={function(e){
        {/*  debugger;*/}
          e.preventDefault();
          this.props.onChangeDesc(e.target.dataset.id);
        }.bind(this)}>
        {data[i].title}</a>
        </li>);
      i=i+1;
  }
    return(
      <nav>
        <ul>
          {lists}
          </ul>
        </nav>
    );
  }
}
export default TOC;
//이 export문을 써줌으로써 TOC라는 클래스를 다른 파일이 가져다 쓸 수 있음.
