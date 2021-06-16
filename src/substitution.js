const referenceAlphabet = "abcdefghijklmnopqrstuvwxyz";

function substitution(input, alphabet, encode = true) {
  if (alphabet.length !== 26 || !alphabetIsComplete(alphabet)) return false;
  
  if (input && encode) {
    return encodeMessage(input.toLowerCase(), alphabet);
  }
  if(input && !encode) {
    return decodeMessage(input.toLowerCase(), alphabet);
  }
}

function alphabetIsComplete(alphabet) {
  return [...alphabet].sort().join("") === [...referenceAlphabet].sort().join("");
}

function encodeMessage(input, alphabet) {
  let output = "";
  for(let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    if (code > 96 && code < 123) {
      let index = referenceAlphabet.indexOf(input[i]);
      output += alphabet[index];
    } else {
      output += input[i];
    }
  }
  return output;
}

function decodeMessage(input, alphabet) {
  let output = "";
  for(let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    if (code > 96 && code < 123) {
      let index = alphabet.indexOf(input[i]);
      output += referenceAlphabet[index];
    } else {
      output += input[i];
    }
  }
  return output;
}

module.exports = substitution;