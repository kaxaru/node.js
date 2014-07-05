var net = require('net');
var data = new Date();
var month = conversion(data.getMonth()+1);
var days = conversion(data.getDate());
var hours = conversion(data.getHours());
var minutes = conversion(data.getMinutes());

var fulldata = data.getFullYear()+"-"+month+"-"+days+" "+hours+":"+minutes;
var server = net.createServer(function(socket){
socket.write(fulldata + "\n");
socket.end();
})
server.listen(parseInt(process.argv[2]));

function conversion(data){
if(data<10)
data = "0" + data;
    return data;
}