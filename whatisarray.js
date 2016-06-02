/**
 * @desc array is an special object that key is numberic!!
 **/
var obj = {
	'0': 'zero',
	'1': 'alpha',
	'2': 'beta',
	length: 3,
};

// in es6, you can use Array.from(obj) instead
var arr = Array.prototype.slice.call(obj);

console.log('Array is from object ', arr);


arr.desc = 'this desc is extra, length is still the same.';

console.log('set arr.desc extra info, what is about arr.length ? ', arr.length);

var _arr = arr.map((item, i, arr) => {
	return {
		[i]: item
	};
});

console.log('Array.prototype.map return a new array ', _arr);

// copy 
// 浅拷贝：基本类型拷贝，对象引用；如果没有深层结构，浅拷贝就是深拷贝
// 深拷贝：完全拷贝
_arr.push('basic type');

var _shallowCopy = _arr.slice();

var _restCopy = [..._arr];

var _deepCopy = JSON.parse(JSON.stringify(_arr));

_arr[3] = '_base_type';
_arr['0']['0'] = '_zero';


console.log('arr.slice() is a shallowCopy ', _shallowCopy);
console.log('es6 rest is also a shallowCopy ', _restCopy);
console.log('JSON.parse(JSON.stringify(arr)) is deepCopy ', _deepCopy);

