// Add to Filter
function addToFilter(filter, sourceList, key, fnComparator) {
    const selectedItem = sourceList.filter(fnComparator)
    return {
        ...filter,
        [key]: selectedItem[0] || {},
    }
}

// Splits key in a JSON Object
const assign = (obj, key, val) => {
    return assignToObj(obj, val, key.split('.'))
}


const assignToObj = (obj, val, key) => {
    var newObj = {...obj };

    key.reduce((a, cv, ci, arr) => arr.length == ci + 1 ? (str) =>
        a[cv] = str : (a[cv] = {...a[cv] }, a[cv]), newObj)(val);

    return newObj;
}


const getValue = (obj, name) =>
    name.split('.').reduce((a, cv) => (a || {})[cv], obj) || ''


module.exports = {
    addToFilter: addToFilter,
    assign: assign,
    assignToObj: assignToObj,
    getValue: getValue
}