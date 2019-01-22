import React, { Component } from 'react';
import {Button,message, Divider} from 'antd'

// import Button from 'antd/lib/button'
// import message from 'antd/lib/message'
// import 'antd/dist/antd.css'

// class CommentList extends React.Component{
//   state = {
//     comments:[]
//   }
//   // constructor(props){
//   //   super(props)
//   //   this.state = {
//   //     comments: []
//   //   }
//   // }

//   render(){
//     return <div><CommentDetail1 comments={this.state.comments}></CommentDetail1>
//     <CommentDetail comments={this.state.comments}></CommentDetail>
//     </div> 
//   }
  

//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({
//         comments:['哈哈','嘿嘿']
//       });
//     }, 1000)
//   }
// }

// function CommentDetail1({comments}){
  
//     return <ul>
//       {comments.map(v=>{
//         return <li>
//           {v}
//         </li>
//       })}
//     </ul>
// }

// class CommentDetail extends React.Component{
//   render(){
//     return <ul>
//       {this.props.comments.map(v=>{
//         return <li>
//           {v}
//         </li>
//       })}
//     </ul>
//   }
// }

// class App extends Component {
//   info(){
//     message.info('This is a normal message!')
//   }
//   error(){
//     message.error('this is an error')
//   }
//   render() {
//     return (
//       <div className="App">
//         <Button type="primary" onClick={(e)=>this.info()}>开课吧</Button>
//         <Button type="danger" onClick={(e)=>this.error()}>Error</Button>

//         <CommentList> </CommentList>
//       </div>
//     );
//   }
// }
class CounterDisplay extends React.PureComponent{
  render(){
    console.log('counter重新渲染了')
    return <h2>
      {this.props.num}
    </h2>
  }
}

const TitleDisplay = React.memo(props=>{
  console.log('title重新渲染了')
    return <h2>
      {props.title}
    </h2>
})

// class TitleDisplay extends React.PureComponent{
//   render(){
//     console.log('title重新渲染了')
//     return <h2>
//       {this.props.title}
//     </h2>
//   }
// }

class App extends React.Component{
  state = {
    count: 0,
    title: '开课吧'
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        count: this.state.count+1
      })
    },1000)
  }
  render(){
    return <div>
      <TitleDisplay title={this.state.title}></TitleDisplay>
      <CounterDisplay num={this.state.count}></CounterDisplay>
    </div>
  }
}

export default App;
