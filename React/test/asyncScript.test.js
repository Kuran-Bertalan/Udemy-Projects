import fetch from 'node-fetch';
import { getPeople, getPeoplePromise } from './asyncScript.js';
import { jest } from '@jest/globals';

it('calls swapi to get people with one way check', (done) => {
  expect.assertions(1);
  getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    done();
  });
});

it('calls swapi to get people with second way check', () => {
  expect.assertions(1);
  return getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it('calls swapi to get people with a promise', () => {
  getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
/////////////////Mocks

it('getPeople returns count and results with mocks', () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 82,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );
  expect.assertions(4);
  return getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
