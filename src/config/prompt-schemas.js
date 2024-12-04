/**
* @LuisStarlino
* Created AT: 03/12/2024 | 19:20
*/

import chalk from "chalk"

const mainPrompt = [
    {
        name: "selectedV",
        description: chalk.yellow.bold("Choose one of this options: 1-QR Code | 2-Password"),
        pattern: /^[1,2]+$/,
        message: chalk.red.italic("Choose only the number 1 or 2!"),
        require: true
    }
]

const qrCodePrompt = [
    {
        name: "link",
        description: chalk.yellow("Enter with the link for the QRCode:"),
    },
    {
        name: "type",
        description: chalk.yellow("QRCode Type: 1 - Normal | 2 - QRCode on Terminal"),
        pattern: /^[1,2]+$/,
        message: chalk.red.italic("Choose only the number 1 or 2!"),
        require: true
    }
]

export default {
    mainPrompt,
    qrCodePrompt
}