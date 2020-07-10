importScripts("utils1.js");

onmessage = function (e) {
	var count = 10000;
	let str = '';
	for (var i=0; i<count; i++) {
		str += utils1.addBreak(i);
	}

	postMessage({ result: str });
};
