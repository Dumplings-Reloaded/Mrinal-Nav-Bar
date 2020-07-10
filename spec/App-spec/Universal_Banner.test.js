import React from 'react';
import Universal_Banner from '../../client/src/components/Universal_Banner.jsx';
import { mount } from 'enzyme'

describe('Universal Banner', () => {
  let wrapper, nextButton, backButton;
  let messages, index;

  beforeEach(() => {
    wrapper = mount(<Universal_Banner />);
    nextButton = wrapper.find("button[name='next']");
    backButton = wrapper.find("button[name='back']");
    messages = wrapper.state('messages');
  });


  it('displays first message when app is loaded', () => {
    index = wrapper.state('messageIndex');
    expect(messages[index]).toBe(messages[0]);
  })


  it('displays correct message when next or back arrow is clicked', () => {
    nextButton.simulate("click");
    index = wrapper.state('messageIndex');
    expect(messages[index]).toBe(messages[1]);

    backButton.simulate("click");
    index = wrapper.state('messageIndex');
    expect(messages[index]).toBe(messages[0]);
  })


  it('displays last msg if (back is clicked && at first msg), and first msg if (next is clicked && at last msg)', () => {
    backButton.simulate("click");
    index = wrapper.state('messageIndex');
    expect(messages[index]).toBe(messages[messages.length - 1]);

    nextButton.simulate("click");
    index = wrapper.state('messageIndex');
    expect(messages[index]).toBe(messages[0]);
  })
});
