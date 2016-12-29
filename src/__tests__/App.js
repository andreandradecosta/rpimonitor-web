import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';

describe('<App />', () => {
    it('renders without crash', () =>{
        const div = document.createElement('div');
        ReactDom.render(<App/>, div);
    });
});
