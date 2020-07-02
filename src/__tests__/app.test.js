import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../components/form';
import Header from '../components/header';
import Footer from '../components/footer';

describe('<routes/>', () => {
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
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});