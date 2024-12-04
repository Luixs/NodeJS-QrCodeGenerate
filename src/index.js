/**
* @LuisStarlino
* Created AT: 03/12/2024 | 19:15
*/

//------------------------------------------------
// IMPORT'S
//------------------------------------------------
import { createPassword } from "./services/password/create.js";
import { createQrCode } from "./services/qr-code/create.js";
import promptSchemas from "./config/prompt-schemas.js";
import prompt from "prompt";

// --- Auto invoke
(async function main() {

    // --- Get the params from terminal
    prompt.get(promptSchemas.mainPrompt, async (err, choose) => {

        if (choose.selectedV == 1) await createQrCode();
        if (choose.selectedV == 2) await createPassword();
    })

    prompt.start()
})()