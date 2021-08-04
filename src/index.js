import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import FormResult from './components/Result'

import './index.css';

function Form() {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        submitted: false,
    });

    const [result, setResult] = useState(null);

    const sendEmail = (event) => {
        event.preventDefault();

        fetch('/send', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...state }),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                setResult(response);
                setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    submitted: true,
                });
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong. Try again later',
                });
            });
    };

    const onInputChange = (event) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value,
        });
    };

    return (
        <div>
            <div className="form-wrapper">
                {!result && 
                    <form onSubmit={sendEmail}>
                        <p>
                            <label for="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={state.name}
                                onChange={onInputChange}
                                required
                                maxlength="100"
                            />
                        </p>
                        <p>
                            <label for="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={onInputChange}
                                required
                                maxlength="254"
                            />
                        </p>
                        <p>
                            <label for="subject">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={state.subject}
                                onChange={onInputChange}
                                required
                                maxlength="100"
                            />
                        </p>
                        <p>
                            <label for="message">Message</label>
                            <textarea
                                name="message"
                                value={state.message}
                                onChange={onInputChange}
                                required
                                maxlength="4000"
                            />
                        </p>
                        <p>
                            <input type="submit" value="Send Message" className="btn-submit" />
                        </p>
                    </form>
                }   
                {result && 
                    <FormResult result={result}/>
                }   
            </div>
        </div>
    );
}

ReactDOM.render(<Form />, document.getElementById('root'));