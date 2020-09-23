'use strict';
/**
 * Builds dictionary/object from cookies string
 * @function objectifyCookies
 * @param {boolean} coerce_values - If `true` attempts to coerce values
 * @return Object
 * @throws {!SyntaxError}
 * @author S0AndS0
 * @license AGPL-3.0
 */
const objectifyCookies = (coerce_values = false) => {
    return document.cookie.split(';').reduce((accumulator, cookie) => {
        const chunk = cookie.split('=');
        const key = chunk[0].trim();
        const value = chunk[1].trim();
        if (coerce_values === true) {
            try {
                accumulator[key] = JSON.parse(value);
            }
            catch (e) {
                /* istanbul ignore next */
                if (!(e instanceof SyntaxError)) {
                    throw e;
                }
                if (['undefined', undefined].includes(value)) {
                    accumulator[key] = undefined;
                }
                else if (['NaN', NaN].includes(value)) {
                    accumulator[key] = NaN;
                }
                else {
                    accumulator[key] = value;
                }
            }
        }
        else {
            accumulator[key] = value;
        }
        return accumulator;
    }, {});
};
/* istanbul ignore next */
if (typeof module !== 'undefined') {
    module.exports = objectifyCookies;
}
