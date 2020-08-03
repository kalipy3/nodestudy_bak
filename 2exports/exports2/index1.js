let a = 123;

module.exports.b = a;
//系统默认设置了：exports = modules.exports,而系统默认找的是modeles.exports
//所指的内存
exports = {user:"小明"}
