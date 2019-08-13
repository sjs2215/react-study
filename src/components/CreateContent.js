import React, {Component} from 'react';

class CreateContent extends Component {
  render() {
    console.log('Content render'); //render 호출되는지 로그 찍어보기
    return(
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="post"
        onSubmit={function(e){
          e.preventDefault();
          //debugger;
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value);
        }.bind(this)}>
        {/*placeholder는 form에 아무것도 입력하지 않았을 때 디폴트로 보여지는 텍스트를 설정하는 것*/}
         <p><input type="text" name="title" placeholder="Title:"></input></p>
         <p>
          <textarea name="desc" placeholder="Description:"></textarea>
        </p>
        <p><input type="submit"></input></p>
        </form>
        </article>
    );
  }
}

export default CreateContent;
