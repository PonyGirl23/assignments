

const stringifyUrl = (url, query) => {
    // http://localhost:8080/monkeys
    // {color:"black, species: howler}
    // Trying to produce this string: "?color=black&species=howler"
    if (Object.keys(query).length === 0) return url;
    let queryString = "?";
    for (key in query) {
        queryString += `${key}={query[key]}&`
    }
    queryString = queryString.slice(0, queryString.length - 1);
    return url + queryString;
}

const object = url => {
    //  given a valid URL with a query string attached, return a query object.
    // "http://localhost:8080/monkeys?color=black&species=howler"
    // ["color=black&species=howler"]
    // [["color: black"], ["species: "howler"]]
    const queryString = url.substring(url.indexOf('?') + 1);
    if (queryString === url) return {};
    const splitQuery = queryString.split('&');
    const splitByEqual = splitQuery.map(str => string.split('='));
    const queryObject = splitByEqual.reduce((query, subArray) => {
        query[subArray[0]] = subArray[1];
        return query;
    }, {});
    return queryObject;
}



module.exports = { stringifyUrl, object }