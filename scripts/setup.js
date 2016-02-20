#!/usr/bin/env node
'use strict';

const fs = require('fs');
const shell = require('shelljs');
const cli = require('cli');

// global const.
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
	cli.ok('Config Creation Complete!'.blue);
};

/**
 * Determines if the config file exists if not
 * calls the createConfig() method.
 * @type {Function}
 * @return {null}
 */
const getConfig = () => {
	cli.info(`Processing Command ${cli.command}`);
	try {
		fs.accessSync(configFile, fs.R_OK | fs.W_OK);
		return exports.config = JSON.parse(fs.readFileSync(configFile));
	} catch (err) {
		createConfig();
	}
};

/**
 * Clones the docker-lucee-mysql repo into the current directory.
 * @type {Function}
 * @return {null}
 */
const cloneDockerRepo = () => {
	cli.info('Cloning Docker Files');
	shell.exec('git clone https://github.com/gregmoser/docker-lucee-mysql ./');
	cli.ok('Docker Clone Complete!'.blue);
};

/**
 * Clones the latest edition of mura cms.
 * @type {Function}
 * @return {null}
 */
const getMura = () => {
	cli.info('Cloning the latest version of Mura');
	shell.rm('-rf', './www');
	shell.exec('git clone https://github.com/blueriver/muracms.git ./www');
	cli.ok('Mura Clone Complete!'.blue);
};

/**
 * Initializes the the project and clones needed dependancies.
 * @type {Function}
 * @return {null}
 */
const init = () => {
	cloneDockerRepo();
	getMura();
	getConfig();
};

// exports
exports.createConfig = createConfig;
exports.getConfig = getConfig;
exports.init = init;

