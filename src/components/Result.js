import React, { Component } from 'react';

class FormResult extends React.Component {
    render() {
        const result = this.props.result;
        return(
            <div className="result-wrapper">
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            </div>
        )
    }
}

export default FormResult;