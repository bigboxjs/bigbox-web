/**
 * Created by jiehua.yang on 2014/9/25.
 */

exports.async = function(name, callback) {
	callback(require(name));
};