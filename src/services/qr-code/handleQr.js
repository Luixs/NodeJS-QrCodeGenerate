/**
* @LuisStarlino
* Created AT: 03/12/2024 | 20:15
*/
//------------------------------------------------
// IMPORT'S
//------------------------------------------------
import qr from 'qrcode-terminal';
import chalk from "chalk";

async function handleQr(err, result) {
    try {

        const { type, link } = result;

        //------------------------------------------------
        // R1: is small? Means i need only show in terminal
        //------------------------------------------------
        var isSmall = type == 2;

        //------------------------------------------------
        // R2: Generate QR
        //------------------------------------------------
        qr.generate(link, { small: isSmall }, (qrcode) => {
            console.log(chalk.green("QR Generated! ✅"))
            console.log(qrcode);
        });

    } catch (error) {
        console.log(chalk.red(error.toString()));
    }
}

export { handleQr };