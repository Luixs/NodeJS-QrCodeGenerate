/**
* @LuisStarlino
* Created AT: 03/12/2024 | 20:00
*/

//------------------------------------------------
// IMPORT'S
//------------------------------------------------
import promptSchemas from "../../config/prompt-schemas.js";
import { handleQr } from "./handleQr.js";
import prompt from "prompt";

async function createQrCode() {
    prompt.get(promptSchemas.qrCodePrompt, handleQr)
}

export { createQrCode };