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

// app details
cli.setApp('mura', '0.0.1');

// options
const options = {
    file:	['f', 'A file to process', 'file', 'temp.log'],
    time:	['t', 'An access time', 'time', false],
    work:	[false, 'What kind of work to do', 'string', 'sleep'],
	env :	['e', 'Environment, Local/Staging/Production', 'string', 'local']
};

// commands
const commands = [
	'init',
	'gitTest', 'configTest'
];

// register options and commands.
cli.parse(options, commands);

// friendly message
console.log('MURA CMS CLI'.bold.green + ' Unofficial'.bold.yellow);


/****************************************
* Private FUNCTIONS AND COMMANDS BELOW  *
****************************************/

// start cf boxes
if (cli.command == 'startAll' && cli.options.box == 'cf') {
	cli.info('Starting CF');
	shell.exec('net start "ColdFusion 9 Application Server"');
	shell.exec('net start "ColdFusion 9 ODBC Agent"');
	shell.exec('net start "ColdFusion 9 ODBC Server"');
	shell.exec('net start "ColdFusion 9 Search Server"');
	shell.exec('net start "ColdFusion 9 .NET Service"');
	shell.exec('net start "ColdFusion 9 Solr Service"');
	cli.ok('All CF Boxes Running');
}

// prompt test
if (cli.command == 'promptTest') {
	prompt.get(['username', 'password'], function(err, res) {
		console.log(res.username);
		console.log(res.password);
	});
}

// config test
if (cli.command == 'configTest') {
	console.log(setup.createConfig());
}