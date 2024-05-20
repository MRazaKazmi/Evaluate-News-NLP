import {checkForValidUrl} from "../src/client/js/urlChecker"

describe('Test checkForValidUrl function', () => {

    test('test string is not a url', () => {
        expect(checkForValidUrl('httpp:/www.yahoo.com')).toBe(false);
    });

    test('test string is a url', () => {
        expect(checkForValidUrl('https://www.yahoo.com/')).toBe(true);
    });
});