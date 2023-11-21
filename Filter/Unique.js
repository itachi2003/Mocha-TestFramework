function unique(array) {
    return array.filter((str, i) => {
        return array.indexOf(str) === i;
    })
}

module.exports = unique;