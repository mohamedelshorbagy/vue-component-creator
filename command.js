#!/usr/bin/env node

const program = require("commander");
const createVueComponent  = require("./app.js");



program
    .version("1.0.0")
    .description("Vue Component Creator");


program
    .command("create <cmpname>")
    .alias("c")
    .description("Add Vue Component")
    .action((cmpname) => {
        createVueComponent(cmpname);
    });

program.parse(process.argv);