import React from 'react';
import "../App.css";

class App extends React.Component {
    render() {
        return (
            <div className = "container">

                <div className = "col-md-4" >
                    <h2>User Section</h2>
                </div>

                <div className = "col-md-8">
                    <div id = "messageDisplay" className = "message-display"></div>
                    <input type = "text" placeholder = "Enter messagae" />
                    <h2>Message Body</h2>

                </div>
            </div>

        );
    }
}

export default App;