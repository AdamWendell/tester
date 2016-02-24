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

describe('Retuns the largest number', function() {
	it('Will return 19', function() {
		var output = app.largestNumber(12, 19);

		assert.isNumber(output, 'It is a number');
		assert.equal(output, 19, '19 is the largest number')
	})

	it('Will return 48', function() {
		var output = app.largestNumber(48, 44)

		assert.isNumber(output, 'It is a number');
		assert.equal(output, 48, '48 is the largest number')
	})

});


describe('Remove spaces from strings', function() {
	it('Should return "Ninja tortise can not dance"', function() {
		var output = app.spaceRemover('Ninja tortise can not dance')

		assert.isString(output, 'Its a string');
		assert.equal(output, 'Ninjatortisecannotdance');
	})

	it('Returns a empty string if the string only contains spaces', function() {
		var output = app.spaceRemover('   ');

		assert.isString(output, 'Its a string');
		assert.equal(output, '');
	})
})

describe('Odd or even', function() {
	it('Will return true when 11 is used', function() {
		var output = app.isOdd(11);

		assert.isBoolean(output, 'Yep boolean it is!');
		assert.isTrue(output, 'Yep this was is odd');
	});

	it('Will return false when 12 is used', function() {
		var output = app.isOdd(12);

		assert.isBoolean(output, 'Yep it is boolean');
		assert.isFalse(output, 'Yep false!');
	})
})