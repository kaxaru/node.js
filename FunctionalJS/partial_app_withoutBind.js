var slice = Array.prototype.slice

function logger(namespace) {
    return function logWithNamespace(){
        var message = slice.call(arguments).join(' ')
        console.log(namespace + " " + message);
    }
}
module.exports = logger