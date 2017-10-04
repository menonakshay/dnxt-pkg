// Add to Filter
function addToFilter(filter, sourceList, key, fnComparator) {
    const selectedItem = sourceList.filter(fnComparator)
    return {
        ...filter,
        [key]: selectedItem[0] || {},
    }
}

// Splits key in a JSON Object
const assignHelper = (obj, key, val) => {
    var newObj = {...obj };


    key.split('.').reduce((a, cv, ci, arr) => arr.length == ci + 1 ? (str) =>
        a[cv] = str : (a[cv] = {...a[cv] }, a[cv]), newObj)(val);


    return newObj;
}

const getValue = (obj, name) =>
    name.split('.').reduce((a, cv) => (a || {})[cv], obj) || ''


module.exports = {
    addToFilter: addToFilter,
    assign: assignHelper,
    getValue: getValue
}