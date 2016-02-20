#!/usr/bin/env node
'use strict';

// require
const cli = require('cli').enable('version');
const shell = require('shelljs');
const prompt = require('prompt');
const fs = require('fs');
const scp = require('scp');

// scripts require
const setup = require('./scripts/setup');
const utils = require('./scripts/utils');

// app details
cli.setApp('mura', '0.0.1');

/**
 * An object of options to be parsed by cli.
 * @type {Object}
 */
const options = {
    file:	['f', 'A file to process', 'file', 'temp.log'],
    time:	['t', 'An access time', 'time', false],
    work:	[false, 'What kind of work to do', 'string', 'sleep'],
	env :	['e', 'Environment, Local/Staging/Production', 'string', 'local']
};

/**
 * An array of commands to be parsed by cli.
 * @type {Array}
 */
const commands = [
	'init',
	'gitTest', 'configTest'
];

/**
 * Takes const options and const commands, then parses them.
 * @param  {Object} options  a list of options available to the terminal.
 * @param  {Array} commands an array of commands available to the terminal.
 * @return {null}
 */
cli.parse(options, commands);

// friendly message
console.log('MURA CLI'.bold.green + ` Version ${cli.version}`.bold.blue + ' Unofficial'.bold.yellow);

/****************************************
* Private FUNCTIONS AND COMMANDS BELOW  *
*****************************************/

if (cli.command == 'init') {
	cli.info(`Processing Command ${cli.command}`);
	setup.init();
	cli.ok(`Command ${cli.command} Complete!`);
};

/**
 * A simple test that prompts the user for a username and a password,
 * then outputs the users input to the terminal.
 * @param  {Array} a simple array of strings to be used
 * @return {null}
 */
if (cli.command == 'promptTest') {
	prompt.get(['username', 'password'], function(err, res) {
		console.log(res.username);
		console.log(res.password);
	});
}
