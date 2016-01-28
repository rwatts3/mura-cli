#!/usr/bin/env node

var cli = require('cli').enable('version');
var shell = require('shelljs');

cli.setApp('lc', '0.1.0');

var options = {
	// options
    file: [ 'f', 'A file to process', 'file', 'temp.log' ],
    time: [ 't', 'An access time', 'time', false],
    work: [ false, 'What kind of work to do', 'string', 'sleep' ]
};

var commands = ['suspendAll', 'startAll'];

cli.parse(options, commands);



/*************************************
 * ALL FUNCTIONS AND COMMANDS BELOW  *
 *************************************/

// Suspend All Node Boxes
if (cli.command == 'suspendAll') {
	cli.info('Suspending Node Boxes');
	
	shell.cd('d:/cms30/nodeServer');
	shell.exec('vagrant suspend');
	
	shell.cd('d:/cms30/mongoServer');
	shell.exec('vagrant suspend');
	
	shell.cd('d:/cms30/solrServer');
	shell.exec('vagrant suspend');
	
	cli.info('All Boxes Suspended');
}

// Start All Node Boxes
if (cli.command == 'startAll') {
	cli.info('Starting Node Boxes');
	
	shell.cd('d:/cms30/nodeServer');
	shell.exec('vagrant up');
	
	shell.cd('d:/cms30/mongoServer');
	shell.exec('vagrant up');
	
	shell.cd('d:/cms30/solrServer');
	shell.exec('vagrant up');
	
	cli.info('All Boxes Running');
}