import React, { Component } from 'react';

import crtLogo from '../assets/img/crtlogo.png';

class FormHeader extends React.Component {
    render() {
        return(
            <div>
                <img className="logo-main" src={crtLogo} alt="Canal and River Trust Logo" />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default FormHeader;