// ./src/App.test.js
import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from './App';
import Title from './components/Title'


describe('<App />', () => {
  const app   = shallow(<App />)
  const title = <Title content="All Recipes" />

  it('wraps everything in a div tag', () => {
      expect(app).toHaveTagName('div')
  })

  it('contains a Title', () => {
    expect(app).toContainReact(title)
  })
})
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
