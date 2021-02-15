// @desc request to console
const logger = (req, res, next) =>{
	console.log(`${req.method} ${req.protocall}://${req.get('host')}`);
	next();
}

module.exports = logger