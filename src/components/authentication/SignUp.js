import React from 'react';
import "./styles.min.css";

class SignUp extends React.Component {
    render() {
        return (
            <div className="register-photo">
                <div className="form-container">
                    <div className="image-holder"></div>
                    <form method="post">
                        <h2 className="text-center"><strong>Create an account.</strong></h2>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)"/>
                        </div>
                        <div className="form-group">
                            <div className="checkbox">
                                <label className="control-label">
                                    <input type="checkbox" />I agree to the license terms.</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                        </div><a href="/signin" className="already">You already have an account? Login here.</a></form>
                </div>
            </div>
        );
    }
}

export default SignUp;