var uint32 = new Uint32Array(1);
  uint32[0] = +process.argv[2];
 var uint16 = new Uint16Array(uint32.buffer);
 console.log(JSON.stringify(uint16));


