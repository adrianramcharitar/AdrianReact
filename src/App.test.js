import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});



this.fetchPhotos.bind(this);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Fake Test', () =>{
  expect(true).toBeTruthy();
});

test('Valid Search Text', () =>{
  expect(this.fetchPhotos('apple').toBeTruthy);

});
