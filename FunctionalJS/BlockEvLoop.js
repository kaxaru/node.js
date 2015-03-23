function repeat(operation, num) {
     // modify this so it can be interrupted
     if (num <= 0) return
     operation()
     return setTimeout(function(){return repeat(operation, --num)},1500)
   }

module.exports = repeat
