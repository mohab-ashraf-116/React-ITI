import { Component } from "react";

class SignUp extends Component{
    render(){
        return <div>
        
        <form>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="email"/>
            <input type="submit" value="Sign In"/>
        </form>
        </div>
    }
}
export default SignUp