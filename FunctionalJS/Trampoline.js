function repeat(operation, num) {
    if(!num) return;
      // Modify this so it doesn't cause a stack overflow!
       return function(){
          operation()
          return repeat(operation, --num)
       }
    }

function trampoline(fn) {
   while (fn());
      // You probably want to implement a trampoline!
}

    module.exports = function(operation, num) {
      // You probably want to call your trampoline here!
      return trampoline(repeat(operation, num));
    }

