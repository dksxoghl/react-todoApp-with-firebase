import React, {Component} from 'react';
import TaskAdd from "./TaskAdd"
import TaskDisplay from "./TaskDisplay";
import firebase from "./firebase";
import Login from "./Login";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            tasks:[],
            task:'',
            login:true,
            no:false
        };
        if(firebase.auth.currentUser===null){
         this.state.login=false;      //생성자라 setstate no
        }

    }


  componentDidMount() {
      const tasks=[...this.state.tasks]
      firebase.firestore.collection('tasks').get().then(
          docs=>{
              docs.forEach(doc=>{
                  console.log(doc.data().todo+doc.id);
                  tasks.push({todo: doc.data().todo,id:doc.id})
              })
              this.setState({tasks:tasks})
          }
      ).catch()
  }

    onClickH = (e) =>{
      e.preventDefault();
      if(this.state.task!==''){
        firebase.firestore.collection('tasks').add({todo: this.state.task})
          .then(r=>{
              const tasks=[...this.state.tasks, {todo:this.state.task,id:r.id} ];
              this.setState({
                  tasks,
                      task:'',
                  no:false
              });
          })
        }
      else{
          this.setState({ no:true})
      }
  };
  onChangeH=(e)=>{
      this.setState({
          task:e.target.value
      })
  };
  deleteH=(idx)=>{
      console.log(idx)
      firebase.firestore.collection('tasks').doc(idx).delete()
          .then(()=>{
              const tasks=this.state.tasks.filter((task)=> task.id !==idx)
              this.setState({tasks})
          })
    // const tasks=this.state.tasks.filter((task,i)=>i!==idx)
    //   this.setState({tasks})
  }
  checkLogin=()=>{
      if(firebase.auth.currentUser!=null){
          this.setState({
              login:true
          })
      }
  }
  render() {
      // const taskDisplay=this.state.tasks.map((task,i) => {
      //     return (
      //         <div key={i}>
      //           <p>{task.todo}</p>
      //             <button onClick={()=>this.deleteH(i)}>삭제</button>
      //         </div>
      //     )
      // })
      // console.log(taskDisplay)
    return (
        <div className="container">
            {/*  할일입력부분*/}
            {this.state.login ?
                <div>
                    <span className="tag is-info is-large title is-1">태히의 오늘 할 일</span>
                    <TaskAdd
                        value={this.state.task}
                        changeH={this.onChangeH}
                        clickH={this.onClickH}
                    />
                    {this.state.no?
                    <article className="message is-danger">
                        <div className="message-header">
                            <p>경고</p>
                            <button className="delete" aria-label="delete"></button>
                        </div>
                        <div className="message-body">
                            할 일을 입력해주세요!
                        </div>
                    </article>
                :null}
                    {/*할일출력부분*/}
                    <TaskDisplay tasks={this.state.tasks}
                                 deleteH={this.deleteH}/>
                </div>
                : <Login login={this.checkLogin}/>
            }
        </div>
    )
  }
}

export default App;
