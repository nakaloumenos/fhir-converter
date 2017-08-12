exports.bundle = ['resourceType', 'type', 'meta', 'entry'];

exports.observation = ['resourceType', 'id', 'status', 'issued', 'category', 'code', 'effectiveDateTime', 'valueQuantity'];

exports.createBundle = function (resource) {
	var result = ['Bundle', 'transaction', {"lastUpdated": "2017-08-03T16:12:06.994Z"}, resource];
	return result;
};

exports.createObservation = function (id, issued, category, code, effectiveDatetime, valueQuantity) {
	var result = ['Observation', id, 'final', issued, category, code, effectiveDatetime, valueQuantity];
	return result;
}

