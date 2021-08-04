import React, { Component } from 'react';

class FormHeader extends React.Component {
    render() {
        return(
            <div>
                <img className="logo-main" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Canal_%26_River_Trust_Logo_v2.png" alt="Canal and River Trust Logo" />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default FormHeader;