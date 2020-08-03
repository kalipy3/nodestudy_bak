let a = 123;

module.exports.b = a;
//系统默认设置了：exports = modules.exports,而系统默认找的是modeles.exports
//所指的内存
module.exports.e = {user:"小明"}

//如果写成module.exports = {user:"小明"}，则会把module.exports.b覆盖掉
//
//注意：使用exports.x时，只能设置单个属性如exports.a=a
//使用module.exports可以设置单个属性，也可以整个属性
