function reduce(arr, fn, initial) {
var rec = function reduceOne(index,value){
    if(index > arr.length - 1) return value;
       return reduceOne(index + 1, fn(value, arr[index], index, arr))
    }(0,initial);

    return rec;
}

module.exports = reduce

