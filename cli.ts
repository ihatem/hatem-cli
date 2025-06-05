#! /usr/bin/env bun

import chalk from "chalk";
import inquirer from "inquirer";
import open from "open";
import { say } from "cowsay";

// Message ASCII stylé
console.log(
  say({
    text: `Hey there! I'm Hatem, a passionate JS dev\nBuilding tools, automating stuff! 🚀`,
    e: "oo",
    T: "U ",
  })
);

console.log("");

// Menu items
const items = [
  {
    name: "🌐 Website",
    value: "https://hatem.cc",
  },
  {
    name: "💻 GitHub",
    value: "https://github.com/ihatem",
  },
  {
    name: "📧 Email",
    value:
      "mailto:contact@hatem.cc?subject=Hello%20Hatem&body=Hi%20Hatem%2C%0A%0AI%20wanted%20to%20reach%20out%20and%20introduce%20myself.%0A",
  },
  new inquirer.Separator(),
  {
    name: "❌ Quit",
    value: "quit",
  },
];

async function promptMenu(): Promise<void> {
  while (true) {
    const { selection, ...other } = await inquirer.prompt([
      {
        type: "list",
        name: "selection",
        message: chalk.green("What do you want to do?\n"),
        choices: items,
      },
    ]);

    if (selection === "quit") {
      console.log("");
      console.log(chalk.yellow("👋 Bye bye!"));
      break;
    }

    await open(selection);
    console.log("");
    const cleanedTarget = (selection as string).startsWith("mailto")
      ? "Email client"
      : selection;
    console.log(chalk.blue(`🔗 Opened ${cleanedTarget}`));
    console.log("");
  }
}

promptMenu();
