import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../form';
import Header from '../header';
import Footer from '../footer'

describe('<App/>', () => {
  it('is alive at application start', () => {
    let app = shallow(<Header />);
    expect(app.find('h1').exists()).toBeTruthy();
  });

  it('is alive at application start', () => {
    let app = shallow(<Footer />);
    expect(app.find('footer').exists()).toBeTruthy();
  });

  it('is alive at application start', () => {
    let app = shallow(<Form />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});