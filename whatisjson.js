/**
 * @desc what is json ?
 *   json is a data format that transmission on HTTP created by master 道格拉斯•克罗克福德 (Douglas Crockford)
 *   it has very strict format!
 **/
// json is come from javascript Object
var obj = {
	a: 'alpha',
	b: 'beta',
};

var jsonStr = JSON.stringify(obj);

console.log('this is a json string from JSON.stringify object ', jsonStr);

var _jsonStr = '{a: "alpha", b: "beta"}';
console.log('JSON.parse a json like string ', JSON.parse(_jsonStr));  // SyntaxError: Unexpected token a