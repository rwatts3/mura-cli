#!/usr/bin/env node

var cli = require('cli').enable('version');
require('shelljs/global');

cli.setApp('lc', '0.1.0');

cli.info('Command Received.');

var options = {
	// options
    file: [ 'f', 'A file to process', 'file', 'temp.log' ],
    time: [ 't', 'An access time', 'time', false],
    work: [ false, 'What kind of work to do', 'string', 'sleep' ]
};

var commands = ['suspendAll', 'startAll'];

cli.parse(options, commands);

// Functions & Commands Below

// Suspend All Node Boxes
if (cli.command == 'suspendAll') {
	cli.info('Suspending Node Boxes');
	
	cd('d:/cms30/nodeServer');
	exec('vagrant suspend');
	
	cd('d:/cms30/mongoServer');
	exec('vagrant suspend');
	
	cd('d:/cms30/solrServer');
	exec('vagrant suspend');
	
	cli.info('All Boxes Suspended');
}

// Start All Node Boxes
if (cli.command == 'startAll') {
	cli.info('Starting Node Boxes');
	
	cd('d:/cms30/nodeServer');
	exec('vagrant up');
	
	cd('d:/cms30/mongoServer');
	exec('vagrant up');
	
	cd('d:/cms30/solrServer');
	exec('vagrant up');
	
	cli.info('All Boxes Running');
}