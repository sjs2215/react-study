import React, { Component} from 'react';
import TOC from "./components/TOC"; //TOC를 App.js에서 쓰기위한 import문
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";
import './App.css';

class App extends Component {
  constructor(props){ {/*constructor:컴포넌트 초기화*/}
    super(props);
    this.max_content_id=3;
    this.state = {
      mode:'create',//welcome 페이지, read 페이지 구분 //밑에 if문에서 mode검사할 때 welcome 철자/대소문자 오타 조심
      selected_content_id:2, // 선택된 content를 출력하기 위한 변
      subject:{title:'web', sub:'world wide web'},
      welcome:{title:'Welcome', desc:'Hello, React'}, //welcome mode일 때 content에 표시될 텍스트 지정
      contents:[
        {id:1, title:'html', desc:'html is for information'},
        {id:2, title:'css', desc:'css is for design'},
        {id:3, title:'javascript', desc:'javascript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render'); //render 호출되는지 로그 찍어보기
    var _title, _desc,_article = null;
    if(this.state.mode === 'welcome') { //=== 3개인 거 오타 조심
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i<this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i=i+1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id=this.max_content_id+1;

        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )

        var newContents = Array.from(this.state.contents);
        newContents.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          contents:newContents
        });
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
      <Subject
      title={this.state.subject.title}
      sub={this.state.subject.sub}
      onChangePage={function(){
        {/*alert('hihihi');*/}
        this.setState({
          mode:'welcome'
        })
      }.bind(this)}
      >
      </Subject>
      <TOC
      data={this.state.contents}
      onChangeDesc={function(id) {
        this.setState({
          mode:'read',
          selected_content_id:Number(id)
        })
      }.bind(this)}
      >
      </TOC>

      <Control
      onChangeMode={function(_mode){
        this.setState({
          mode:_mode,
        })
      }.bind(this)}
      ></Control>

      {_article}

      </div>
    );
  }
}

export default App;
