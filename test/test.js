var app = require('../app'),
	assert = require('chai').assert;

// Exercise 1

describe('Find the first and last word of a sentence', function() {
	it('should return [["katt"], ["hund"]]', function() {
		var output = app.firstAndLastWord('katt är ninja mot hund');

		assert.isArray(output, 'Array all things!');
		assert.isArray(output[0], 'This should be a array.');
		assert.isArray(output[1], 'This should be a array.');
		assert.deepEqual(output, [['katt'], ['hund']])

	});
	it('should return [["katt"], []]', function() {
		var output = app.firstAndLastWord('katt');

		assert.isArray(output, 'Array all things!');
		assert.isArray(output[0], 'This should be a array.');
		assert.isArray(output[1], 'This should be a array.');
		assert.deepEqual(output, [['katt'], []]);
	})	
})

describe('Convert a string to lowecase and replace åäö with a and o', function() {
	it('should return "katten ar inte nordig', function() {
		var output = app.stringConvert('Katten är inte nördig');

		assert.isString(output, "It's a string!");
		assert.notInclude(output, 'å', 'Noo å should be in string');
		assert.notInclude(output, 'ä', 'Noo ä should be in string');
		assert.notInclude(output, 'ö', 'Noo ö should be in string');
		assert.equal(output, 'katten ar inte nordig');
	})
})