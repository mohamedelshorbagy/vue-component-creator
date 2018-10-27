#!/usr/bin/env node

const program = require("commander");
const createVueComponent = require("./app.js");



program
    .version("1.0.0")
    .description("Vue Component Creator");


program
    .command("generate <cmpname>")
    .alias("g")
    .option('-d, --dir', 'Create Components')
    .description("Add Vue Component")
    .action((cmpname, options) => {
        createVueComponent(cmpname, options.dir);
    });

program.parse(process.argv);