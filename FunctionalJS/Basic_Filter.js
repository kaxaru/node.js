function getShortMessages(messages){
   return messages
    .map(function (el) { return el.message;})
    .filter(function(el){ return el.length < 50;});
}
module.exports = getShortMessages;