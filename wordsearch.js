const wordSearch = (letters, word) => {
    if ((letters.length === 0) || (word.length === 0)) {
        return false;
    }
    // Create the horrizontal join
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = new Array(horizontalJoin[0].length);
    // Check horizontally
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
        // Created the vertical join
        for (let i = 0; i < l.length; i++) {
            (verticalJoin[i] === undefined) ? verticalJoin[i] = l[i] : verticalJoin[i] += l[i];
        }
    }
    // Check vertically
    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch;