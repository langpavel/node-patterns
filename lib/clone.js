var lib_clone = require('clone');



var clone = module.exports = exports = lib_clone;



clone.deepCopy = lib_clone;



clone.shallowCopy = 
clone.prototypeClone = function(source) {
  var clone = function() {};  
  clone.prototype = source;
  return new clone();
};
