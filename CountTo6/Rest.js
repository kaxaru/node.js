module.exports = function average(...args){
	return args.reduce((a,b) => a+b, 0)/args.length;
}