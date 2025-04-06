/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let mp = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = mp[s[s.length - 1]];
    for (let i = s.length - 2; i >= 0; i--) {
        if (mp[s[i]] < mp[s[i + 1]]) {
            sum -= mp[s[i]];
        } else {
            sum += mp[s[i]];
        }
    }
    return sum;
};

let s = "III";
// output `3`
console.log(romanToInt(s))