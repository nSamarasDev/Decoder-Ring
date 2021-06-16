  const alphabet = [
    'a','b','c','d','e','f',
    'g','h','i','j','k','l',
    'm','n','o','p','q','r',
    's','t','u','v','w','x',
    'y','z'
  ];

function caesar(input, shift = 0, encode = true) {
  if(shift === 0 || shift > 25 || shift < -25){
    return false;
  }
  if(!encode){
    shift *= -1;
  }
  return input.toLowerCase().split('').map(letter => {
    if(alphabet.includes(letter)){ 
      if(alphabet.indexOf(letter) + shift < 0){
        return alphabet[alphabet.indexOf(letter) + shift + 26];
      }
      if(alphabet.indexOf(letter) + shift > 25){
        return alphabet[alphabet.indexOf(letter) + shift - 26];
      }
      return alphabet[alphabet.indexOf(letter) + shift];
    }else{
      return letter;
    }
  }).join('');
}

module.exports = caesar;
