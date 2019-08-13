import React, {Component} from 'react';

class ReadContent extends Component {
  render() {
    console.log('Content render'); //render 호출되는지 로그 찍어보기
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        </article>
    );
  }
}

export default ReadContent;
