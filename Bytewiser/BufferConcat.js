var arr = [];

process.stdin.on('data',function(data){
    arr.push(data);
})
    .on('end',function(){
        var bigBuff = Buffer.concat(arr);
        console.log(bigBuff);
    })


