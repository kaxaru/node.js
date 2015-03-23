   module.exports = function arrayMap(arr, fn) {
    	return arr.reduce(function(prev,next,index,arr){return prev.concat(fn(next, index, arr))},[]);
   }

