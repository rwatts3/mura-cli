'use strict';

const assert = require('assert');
const cli = require('cli');
const setup = require('../scripts/setup');

describe('Setup | Config', () => {
	it('setup module should exist', () => {
		assert(setup == setup);
	});
});