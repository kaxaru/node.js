var sum = 0;
for(var i = 2; i< process.argv.length; i++)
{
   if(!isNaN(parseInt(process.argv[i])))
       {
           sum += parseInt(process.argv[i]);
       }
   }

console.log(sum);