#!/usr/bin/env node
'use strict';

const fs = require('fs');
const shell = require('shelljs');
const cli = require('cli');
const configFile = process.cwd() + '/muraConfig.json';
const baseConfigFile = process.env.OLDPWD + '/lib/muraConfig.json';

const createConfig = () => {
	cli.info('No config file found. Creating one now!'.bold.yellow);
	shell.cp(baseConfigFile, process.cwd());
	cli.ok('Process Complete.'.bold.green);
};

try {
	fs.accessSync(configFile, fs.R_OK | fs.W_OK);
	exports.config = JSON.parse(fs.readFileSync(configFile));
} catch (err) {
	createConfig();
}