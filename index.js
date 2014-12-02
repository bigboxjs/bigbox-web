/**
 * Created by jiehua.yang on 2014/8/28.
 */

var Router = require("./router");

/**
 * router暂时是单例对象
 * @type {{}}
 */
var instance = null;

/**
 * 获取一个router
 * @param config
 * @returns {router}
 * @constructor
 */
exports.Router = function(config) {
	if (instance) return instance;

	instance = new Router(config);
	return instance.router.bind(instance);
};