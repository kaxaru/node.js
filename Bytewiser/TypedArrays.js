
process.stdin.once('data',function(data){
    var uint = new Uint8Array(data.length);

    for(var i = 0; i < data.length; i++){
        uint[i] = data[i];
    }

    var str = JSON.stringify(uint);
    console.log(str);
})



