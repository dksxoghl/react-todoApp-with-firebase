import * as React from "react";
import firebase from './firebase'
class Login extends React.Component{
    state={
        username:'',
        password:''
    }
    onChangeH=(e)=>{
        const {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }
    onClickH=(e)=>{
        e.preventDefault();
        firebase.DoSignInWithEmailAndPassword(this.state.username,this.state.password)
            .then(r=>{console.log(r)
            this.props.login();})
    }
    render() {
        const {username,password}=this.state;
        return (
            <div>
                <p>로그인 인증절차테스트</p>
                <p>아이디 1@1.com</p>
                <p>비번 111111</p>
                <form>
                <input name="username"  type="text" value={username} onChange={this.onChangeH}/>
                <input name="password" type="password" value={password} onChange={this.onChangeH}/>
                <button className="button is-primary" onClick={this.onClickH}>로그인</button>
                </form>
            </div>
        )
    }
}
export default Login;
