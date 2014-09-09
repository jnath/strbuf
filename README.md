strbuf
========

convert a buffet with is own charset

````
var strbuf = require('strbuf');

fs.readFile('/path/to/file', function(error, data){
  if(error){
    throw error;
  }
  
  console.log(strbuf(data));
});
````
or simply

````
// "中文abc";
var big5Buffer = new Buffer([0xa4,0xa4,0xa4,0xe5,0x61,0x62,0x63]),
console.log(strbuf(big5Buffer));
==> 中文abc
````
