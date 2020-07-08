import React from 'react';
import Search from '../../client/src/components/Main_Nav-Subcomponents/Search.jsx';
import { shallow, mount } from 'enzyme';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('displays search input when logo is initially clicked', () => {
    wrapper.find("search-logo").simulate("click");
    let inputField = wrapper.exists("search-input-field");
    expect(inputField).to.equal(true);

    wrapper.find("search-logo").simulate("click");
    inputField = wrapper.exists("search-input-field");
    expect(inputField).to.equal(false);
  })

  // it('displays correct message when next or back arrow is clicked', () => {
  //   wrapper.find("button[name='next']").simulate("click");
  //   let messages = wrapper.state('messages');
  //   let index = wrapper.state('messageIndex');
  //   let bannerMessage = 'Spend $250 and get the Iconic Shopper Tote ($48 value)';
  //   expect(messages[index]).toBe(bannerMessage);

  //   wrapper.find("button[name='back']").simulate("click");
  //   let newIndex = wrapper.state('messageIndex');
  //   let newBannerMessage = 'NEW! FRESH BLUE 💙';
  //   expect(messages[newIndex]).toBe(newBannerMessage);
  // })
});
