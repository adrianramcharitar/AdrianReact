import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './components/SearchBar';

Enzyme.configure({adapter: new Adapter()});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe("App component", () =>{
  test("renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })
});

test('user text is echoed', () =>{
  const wrapper = shallow(<SearchBar value={()=>{}} />);

  wrapper.find("input").simulate("change", {
    target: {value: "hello"}
  });
  expect(wrapper.find("input").props().value).toEqual("hello");
});





