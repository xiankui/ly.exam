/**
 * @desc everything in javascript is object, especially object
 **/

var obj = {
	me: 'obj',
};

// 对象存储在堆中，通过变量来引用
var objPoint = obj;  // obj & objPoint is point to the same Object

console.log('do you think objPoint is the same of obj ? ', objPoint === obj);

obj['A'] = {
	id: 100,
	name: 'alpha',
};

console.log('think about what is objPoint ', objPoint);

// 对象的拷贝
var _shallowCopy = {};
for (var prop in obj) {
	_shallowCopy[prop] = obj[prop];
}

console.log('do you think _shallowCopy is the same of obj ? ', _shallowCopy === obj);

// but ...
obj['A'].id = 101;
console.log('when i change obj.A.id = 101, think about what is _shallowCopy.A.id ? ', _shallowCopy.A.id);

// 对象的深拷贝；只介绍一种最简单的！
var _deepCopy = JSON.parse(JSON.stringify(obj));
obj.A.id = 102;
console.log('when i change obj.A.id = 102, think about what is _deepCopy.A.id ? ', _deepCopy.A.id);

// es7 对象的扩展运算符是深拷贝吗？
// var _es6Copy = {
// 	...obj,
// };
// obj.A.id = 103;
// console.log('when i change obj.A.id = 103, think about what is _es6Copy.A.id ? ', _es6Copy.A.id);


// think about, arr.length === 0 is an empty array, what is a empty object ?
// do it simple like this
function isEmptyObj(obj) {
	for (var prop in obj) {
		return false;
	}
	return true;
}

// in ECMA2015, you can do like this
function _isEmptyObj(obj) {
	if (obj.keys().length) {
		return false;
	}
	return true;
}
