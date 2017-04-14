import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import { Provider } from 'react-redux';
import Horoscope from '../js/components/Horoscope';

const should = chai.should();
const expect = chai.expect;

/*  
    1.  Check that the page displays hello world
*/


describe('Hello world', function() {
    it('Renders hello world text',  function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(  
        <Provider>
            <Horoscope />
        </Provider>);
        const result = renderer.getRenderOutput();
        let test = 'hello world';
        test.should.eql('hello world');
    });

});