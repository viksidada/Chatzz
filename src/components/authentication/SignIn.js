import React from 'react';
import { browserHistory} from 'react-router';
import "./styles.min.css";

class SignIn extends React.Component {


    checkCredentials() {
        let user = document.getElementsById("user").value;
        console.log("user", user);
        let pass = document.getElementsById("pwd").value;
        console.log("password", pass);

        if ((user === "vikas@gmail.com") && (pass === "viksi")) {
            console.log("ACCESS GRANTED");
            browserHistory.push("/app");
        } else {
            console.log("ACCESS DENIED. TRY AGAIN");
            browserHistory.replace("/signup");
        }
        user = "";
        pass = "";

    }

    render() {
        return (

            <div className="login-dark">
                <form>
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="form-group">
                        <input className="form-control" id = "user" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" id = "pwd" type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit" onClick = {() => this.checkCredentials()}> Log In</button>
                    </div>
                    <a href="/signup" className="forgot">Forgot your email or password?</a>
                </form>
            </div>
        );
    }
}

export default SignIn;