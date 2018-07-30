// Example of Middleware that will log time and date of a request:

const logger = (req, res, next) => {

console.log(new Date().toLocaleDateString());
next();
}

module.exports = logger;