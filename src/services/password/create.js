/**
* @LuisStarlino
* Created AT: 04/12/2024 | 19:00
*/

//------------------------------------------------
// IMPORT'S
//------------------------------------------------
import { handle } from "./handlePw.js";
import chalk from "chalk";

async function createPassword() {
    console.log(chalk.green("password"));
    const pw = await handle();
    console.log(chalk.green(pw));
}

export { createPassword }