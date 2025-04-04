/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0, j = 0, flag = true, result = '';
    while (i < word1.length && j < word2.length) {
        if (flag) {
            result += word1[i++];

        } else result += word2[j++];
        flag = !flag;
    }
    while (i < word1.length) {
        result += word1[i++];

    }
    while (j < word2.length) {
        result += word2[j++];
    }
    return result;
};