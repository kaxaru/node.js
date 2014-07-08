/**
 * Created by Admin on 07.07.14.
 */
function doubleAll(numbers){
    var map = Array.prototype.map
    var result = map.call(numbers , function(number){ return number * 2})
    return result;
    }

module.exports = doubleAll