#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const args = require("node-args");
const inquirer = require("inquirer");

const helpers = {
  getFiles: (p, ext = ".js") =>
    fs
      .readdirSync(p)
      .filter((f) => fs.statSync(path.join(p, f)).isFile())
      .filter((f) => path.extname(f) === ext),
  getDirs: (p) =>
    fs
      .readdirSync(p)
      .filter((f) => fs.statSync(path.join(p, f)).isDirectory()),
};

const spriteDirectory = `${__dirname}/../src/sprites`;

const spriteFiles = helpers.getFiles(spriteDirectory, ".ts");

const spriteDirs = helpers.getDirs(spriteDirectory);

console.log("Sprite files", spriteFiles);
console.log("Sprite dirs", spriteDirs);

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "filename",
      message: "Are you nutz?",
    },
    {
      type: "list",
      name: "someList",
      choices: spriteFiles,
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  });
