"use strict";


/**
 * Mocks cookies
 * @see {link} - https://stackoverflow.com/questions/50761393/how-to-mock-cookie-getlanguage-in-jest
 */
Object.defineProperty(window.document, 'cookie', {
  writable: true,
  value: '',
});


/**
 * Enables static methods to be called from within class methods
 * @see {link} - https://github.com/Microsoft/TypeScript/issues/3841
 */
interface Objectify_Cookies_Test {
  constructor: typeof Objectify_Cookies_Test;
}


/**
 * Tests `objectifyCookies()` function
 * @author S0AndS0
 * @license AGPL-3.0
 */
class Objectify_Cookies_Test {
  objectifyCookies: Function;
  cookieObject: { [s: string]: any; };

  constructor() {
    this.objectifyCookies = require('../objectify-cookies.js');
  }

  /**
   *
   */
  static appendCookie(key: string, value: any) {
    if (window.document.cookie.length === 0) {
      window.document.cookie = `${key}=${value}`;
    } else {
      window.document.cookie += `;${key}=${value}`;
    }
  }

  /**
   *
   */
  runTests() {
    this.testsArray();
    this.testsBoolean();
    this.testsDictionary();
    this.testsNaN();
    this.testsNull();
    this.testsNumber();
    this.testsString();
    this.testsUndefined();
  }

  /**
   *
   */
  testsArray() {
    const array_data = [1, 'two', false];
    const array_json = JSON.stringify(array_data);

    this.constructor.appendCookie('array', array_json);

    test('Is JSON encoded Array retrievable?', () => {
      expect(this.objectifyCookies()['array']).toStrictEqual(array_json);
    });

    test('Does coercion of Array values function?', () => {
      expect(this.objectifyCookies(true)['array']).toStrictEqual(array_data);
    });
  }

  /**
   *
   */
  testsBoolean() {
    const boolean_data = true;
    const boolean_json = JSON.stringify(boolean_data);

    this.constructor.appendCookie('boolean', boolean_json);

    test('Is JSON encoded Boolean retrievable?', () => {
      expect(this.objectifyCookies()['boolean']).toEqual(boolean_json);
    });

    test('Does coercion of Boolean values function?', () => {
      expect(this.objectifyCookies(true)['boolean']).toEqual(boolean_data);
    });
  }

  /**
   *
   */
  testsDictionary() {
    const dictionary_data = {
      'string': 'something',
      'boolean': false,
      'integer': 42,
      'float': 0.5,
      'object': {
        'nested': 'value'
      }
    };
    const dictionary_json = JSON.stringify(dictionary_data);

    this.constructor.appendCookie('dictionary', dictionary_json);

    test('Is JSON encoded Dictionary retrievable?', () => {
      expect(this.objectifyCookies()['dictionary']).toEqual(dictionary_json);
    });

    test('Does coercion of Dictionary values function?', () => {
      expect(this.objectifyCookies(true)['dictionary']).toStrictEqual(dictionary_data);
    });
  }

  /**
   * @warning - `JSON.stringify` coerces `NaN` to `"null"`
   */
  testsNaN() {
    this.constructor.appendCookie('nan', NaN);

    test('Is JSON encoded NaN retrievable?', () => {
      expect(this.objectifyCookies()['nan']).toBe('NaN');
    });

    test('Does coercion of NaN values function?', () => {
      expect(this.objectifyCookies(true)['nan']).toBe(NaN);
    });
  }

  /**
   *
   */
  testsNull() {
    const null_data = null;
    const null_json = JSON.stringify(null_data);

    this.constructor.appendCookie('null', null_json);

    test('Is JSON encoded null retrievable?', () => {
      expect(this.objectifyCookies()['null']).toBe(null_json);
    });

    test('Does coercion of null values function?', () => {
      expect(this.objectifyCookies(true)['null']).toBe(null_data);
    });
  }

  /**
   *
   */
  testsNumber() {
    const number_data = 42;
    const number_json = JSON.stringify(number_data);

    this.constructor.appendCookie('number', number_json);

    test('Is JSON encoded number retrievable?', () => {
      expect(this.objectifyCookies()['number']).toEqual(number_json);
    });

    test('Does coercion of number values function?', () => {
      expect(this.objectifyCookies(true)['number']).toEqual(number_data);
    });
  }

  /**
   *
   */
  testsString() {
    const string_data = 'something';
    const string_json = JSON.stringify(string_data);

    this.constructor.appendCookie('string', string_json);

    test('Is JSON encoded string retrievable?', () => {
      expect(this.objectifyCookies()['string']).toBe(string_json);
    });

    test('Does coercion of string values function?', () => {
      expect(this.objectifyCookies(true)['string']).toBe(string_data);
    });
  }

  /**
   *
   */
  testsUndefined() {
    this.constructor.appendCookie('undefined', undefined);

    test('Is encoded undefined retrievable?', () => {
      expect(this.objectifyCookies()['undefined']).toEqual("undefined");
    });

    test('Does coercion of undefined values function?', () => {
      expect(this.objectifyCookies(true)['undefined']).toEqual(undefined);
    });
  }
}


const test_objectify_cookies: Objectify_Cookies_Test = new Objectify_Cookies_Test();
test_objectify_cookies.runTests();

