function getShortMessages(messages){
    var map = Array.prototype.map;
    var msg = map.call(messages, function(obj){
        if(obj.message.length < 51) {
            return obj.message;
        }
    })
    return msg;
}
module.exports = getShortMessages;