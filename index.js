var iconv = require('iconv-lite');
var chardet = require('chardet');

module.exports = function(buffer){
  var charset = chardet.detect(buffer);
  if(!iconv.encodingExists(charset)){
    throw new Error('encoding ' + charset + ' not exist');
  }
  return iconv.decode(buffer, charset);
}
