import React, {Component} from 'react';

class Control extends Component {
  render() {
    console.log('subject render'); //render 호출되는지 로그 찍어보기
    return  (
      <ul>
        <li> <a href="/create"
        onClick={function(e) {
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
        <li> <a href="/update"
        onClick={function(e) {
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
        {/*delete는 링크를 사용하지 않고(페이지 개념이 아닌) 버튼(오퍼레이션 개념)을 사용
          이유: 빠른 동작을 위해 해당 페이지를 미리 방문을 해두는 소프트웨어가 구현되어 있다고 치면,
          delete도 링크로 구현되어 있으면 delete도 미리 방문해서 삭제해버릴수도 있기 때문*/}
        <li> <input
        onClick={function(e) {
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)} type="button" value="delete"></input></li>
      </ul>
    );
  }
}

export default Control;
