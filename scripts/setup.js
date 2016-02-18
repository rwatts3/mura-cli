#!/usr/bin/env node
'use strict';

const fs = require('fs');
const shell = require('shelljs');
const cli = require('cli');
const configFile = process.cwd() + '/muraConfig.json';
const baseConfigFile = process.env.OLDPWD + '/lib/muraConfig.json';

/**
 * Creates the muraConfig.json file
 * @type {Function}
 * @return {null}
 */
const createConfig = () => {
	cli.info('No config file found. Creating one now!'.blue);
	shell.cp(baseConfigFile, process.cwd());
	cli.ok('Process Complete.'.blue);
};

/**
 * Determines if the config file exists if not
 * calls the createConfig() method.
 * @type {Function}
 * @return {null}
 */
const getConfig = () => {
	try {
		fs.accessSync(configFile, fs.R_OK | fs.W_OK);
		return JSON.parse(fs.readFileSync(configFile));
	} catch (err) {
		createConfig();
	}
};


// cloneRepo
const cloneRepo = () => {
	
};

// init app
const init = () => {
	
};

// exports
exports.createConfig = createConfig;
exports.getConfig = getConfig;
exports.init = init;

