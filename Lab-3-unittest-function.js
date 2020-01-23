//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

function checkHumbrId(valueIn){
    let Regex = /^n\d{8}$/i;

    return Regex.test(valueIn);
}