import React from 'react';
import { shallow, mount } from 'enzyme';

import "./setupTests"

import FormResult from '../components/Result';


it("renders without crashing", () => {
    const result = {
        success: true, 
        message: "Form sent successfully!"
    }
    shallow(<FormResult result={result}/>);
});

it("accepts result props", () => {
    const result = {
        success: true, 
        message: "Form sent successfully!"
    }
    const wrapper = mount(<FormResult result={result} />);
    expect(wrapper.props().result).toEqual(result);
});

it("adds correct class on form success", () =>{
    const result = {
        success: true, 
        message: "Form sent successfully!"
    }
    const wrapper = shallow(<FormResult result={result} />);
    const resultFeedback = wrapper.find("p");
    expect(resultFeedback.hasClass("success")).toEqual(true);
    expect(resultFeedback.hasClass("error")).toEqual(false);
});

it("displays result feedback message", () => {
    const result = {
        success: true, 
        message: "Form sent successfully!"
    }
    const wrapper = mount(<FormResult result={result} />);
    const feedback = wrapper.find("p").text();
    expect(feedback).toEqual("Form sent successfully!");
});

it("adds correct class on form error", () =>{
    const result = {
        success: false, 
        message: "Something has gone wrong."
    }
    const wrapper = shallow(<FormResult result={result} />);
    const resultFeedback = wrapper.find("p");
    expect(resultFeedback.hasClass("error")).toEqual(true);
    expect(resultFeedback.hasClass("success")).toEqual(false);
});