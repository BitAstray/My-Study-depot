"use strict";
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const res = await uniCloud.deleteFile({
		fileList: [
			"https://mp-a55b94c4-d7a5-4c03-b006-2374f5ade826.cdn.bspapp.com/cloudstorage/53f509e9-0871-49a0-951a-21b526b74240.png",
		],
	});
	console.log("res : ", res);

	//返回数据给客户端
	return event;
};