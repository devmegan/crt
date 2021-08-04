import React from 'react';
import { shallow, mount} from 'enzyme';

import "./setupTests"

import FormHeader from '../components/Header';

it("renders without crashing", () => {
  shallow(<FormHeader />);
});

const title = "Contact Us"

it("displays h1 title", () => {
  const wrapper = mount(<FormHeader title={title} />);
  const maintitle = wrapper.find('h1');
  expect(maintitle.length).toBe(1);
});

it("displays correct title", () => {
  const wrapper = mount(<FormHeader title={title} />);
  const headerTitle = wrapper.find("h1").text();
  expect(wrapper.props().title).toEqual(title);
  expect(headerTitle).toEqual("Contact Us");
});

it("displays crt logo", () => {
  const wrapper = shallow(<FormHeader />);
  const logoSrc = wrapper.find("img").prop("src");
  expect(logoSrc).toEqual("crtlogo.png");
});

it("logo has alt description", () => {
  const wrapper = shallow(<FormHeader />);
  const logoAlt = wrapper.find("img").prop("alt");
  expect(logoAlt).toBeTruthy();
  expect(logoAlt.length).toBeGreaterThan(0);
});