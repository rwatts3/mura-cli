#!/usr/bin/env node
// require
var cli = require('cli').enable('version');
var shell = require('shelljs');

cli.setApp('lc', '0.1.0');

var options = {
    // options
    file:	['f', 'A file to process', 'file', 'temp.log'],
    time:	['t', 'An access time', 'time', false],
    work:	[false, 'What kind of work to do', 'string', 'sleep'],
    box:	['b', 'Chooses between Node or CF but defaults to Node', 'string', 'node']
};

var commands = ['stopAll', 'startAll'];

// register options and commands.
cli.parse(options, commands);

/****************************************
* Private FUNCTIONS AND COMMANDS BELOW  *
****************************************/

// Suspend All Node Boxes
if (cli.command == 'stopAll' && cli.options.box == 'node') {
	cli.info('Suspending Node Boxes');

	shell.cd('d:/cms30/nodeServer');
	shell.exec('vagrant suspend', {
		async: true
	});

	shell.cd('d:/cms30/mongoServer');
	shell.exec('vagrant suspend', {
		async: true
	});

	shell.cd('d:/cms30/solrServer');
	shell.exec('vagrant suspend', {
		async: true
	});

	cli.ok('All Boxes Suspended');
}

// Start All Node Boxes
if (cli.command == 'startAll' && cli.options.box == 'node') {
	cli.info('Starting Node Boxes');

	shell.cd('d:/cms30/nodeServer');
	shell.exec('vagrant up', {
		async: true
	});

	shell.cd('d:/cms30/mongoServer');
	shell.exec('vagrant up', {
		async: true
	});

	shell.cd('d:/cms30/solrServer');
	shell.exec('vagrant up', {
		async: true
	});

	cli.ok('All Boxes Running');
}

// Stop CF Boxes
if (cli.command == 'stopAll' && cli.options.box == 'cf') {
	cli.info('Stopping CF');
	shell.exec('net stop "ColdFusion 9 Application Server"');
	shell.exec('net stop "ColdFusion 9 ODBC Agent"');
	shell.exec('net stop "ColdFusion 9 ODBC Server"');
	shell.exec('net stop "ColdFusion 9 Search Server"');
	shell.exec('net stop "ColdFusion 9 .NET Service"');
	shell.exec('net stop "ColdFusion 9 Solr Service"');
	cli.ok('All CF Boxes Stopped');
}

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


