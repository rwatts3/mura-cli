#!/usr/bin/env node

// require
var cli = require('cli').enable('version');
var shell = require('shelljs');
var prompt = require('prompt');
var fs = require('fs');

// app details
cli.setApp('mura', '0.0.1');

// options
var options = {
    file:	['f', 'A file to process', 'file', 'temp.log'],
    time:	['t', 'An access time', 'time', false],
    work:	[false, 'What kind of work to do', 'string', 'sleep']
};

// commands
var commands = [
	'gitTest'
];

// register options and commands.
cli.parse(options, commands);

// friendly message
console.log('MURA CMS CLI'.bold.green + ' Unofficial'.zebra);


/****************************************
* Private FUNCTIONS AND COMMANDS BELOW  *
****************************************/

// Start CF Boxes
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

if (cli.command == 'promptTest') {
	prompt.get(['username', 'password'], function (err, result) {
		console.log(result.username);
		console.log(result.password);
	});
}
