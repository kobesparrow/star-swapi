import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import { isExpressionWrapper, exportAllDeclaration } from '@babel/types';

describe('App', () => {
  let mockPeople;
  let wrapper;
  let mockFetchPeople; 
  let mockFillOutHomeworld;
  let mockFetchVehicles

  describe('addHomeworld', () => {
    
    beforeEach(() => {
      wrapper = shallow(<App />)
    })

    it('calls ', () => {
      
    })
  });


  describe('fetchPeople', () => {

    beforeEach(() => {
      mockPeople = [{ name: "Luke" }, { name: "Han" }]
      fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockPeople),
      }));
      mockFetchPeople = jest.fn();
      mockFillOutHomeworld = jest.fn();
      mockFetchVehicles = jest.fn();
      wrapper = shallow(<App />)
    });

    it('calls fetch with the correct URL and options', () => {
      //setup
      const mockUrl = 'https://swapi.co/api/people/';
      //execution
      wrapper.instance().fetchPeople();
      //expectation
      expect(fetch).toHaveBeenCalledWith(mockUrl)
    });

    it('sets state on successful request', () => {
      //execution
      wrapper.instance().fetchPeople().then(() => {
      });
      //expectation
      expect(wrapper.state('people')).toEqual([])
    });

    it('calls fillOutHomeworld with the correct parameters', () => {
      //execution
      wrapper.instance().fetchPeople().then(() => {
        //expectation
        expect(mockFillOutHomeworld).toHaveBeenCalledWith(mockPeople);
      });
    });

    it('calls fetchVehicles', () => {
      //execution
      wrapper.instance().fetchPeople().then(() => {
        //expectation
        expect(mockFetchVehicles).toHaveBeenCalled();
      })
    });

    it('sets an error when the fetch fails', () => {
      //setup
      fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
        new Error('the fetch failed')
      ));
      //execution
      wrapper.instance().fetchPeople().then(() => {
        //expectation
        expect(wrapper.state('errorStatus')).toBe('the fetch failed')
      })

    });
  });

  describe('fillOutHomeworld', () => {
    let mockPeople
    let mockHomeworld;
    beforeEach(() => {
      mockPeople = [{name: "Luke", homeworld: ''}, {name: "Han", homeworld: ''}]
      mockHomeworld = []
    });
    it('calls fetch with the correct URL and options', () => {

    });
    it('calls this.addHomeworld with the correct arguments', () => {

    });
    it('pushes the returned object into the updatedPeople array', () => {

    });
    it('catches any errors', () => {

    });
    it('calls fillOutSpecies with the correct argument', () => {

    });
    it('setsState with the updatedPeople array', () => {

    });
  })

})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
