/**
* @LuisStarlino
* Created AT: 04/12/2024 | 19:10
*/

//------------------------------------------------
// IMPORT'S
//------------------------------------------------

async function handle() {

    //------------------------------------------------
    // CONST'S
    //------------------------------------------------
    const passwordLength = process.env.PW_LENGTH;
    let characters = [];
    let password = "";

    //------------------------------------------------
    // --- R1: Get .env values
    //------------------------------------------------
    if (process.env.PW_UPPERCASE_LETTERS === "true") characters.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (process.env.PW_LOWERCASE_LETTERS === "true") characters.push(... "abcdefghijklmnopqrstuvwxyz");
    if (process.env.PW_NUMBERS === "true") characters.push(... "1234567890");
    if (process.env.PW_SPECIAL_CHARACTERS === "true") characters.push(... "!@#$%&*()-_");
    
    //------------------------------------------------
    // --- R2: Generate random pw
    //------------------------------------------------
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;

}

export { handle };