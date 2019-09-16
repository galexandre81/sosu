function sosu(){
  var chars = ["y", "t", "i", "n", "u", "d", "n", "i", "v", "a", "m", "d", "i", "e", "l", "ö", "t", "y", "ö", "l", "ā", "v", "a", "h", "d", "ō", "Ś", "a", "m", "i", "r", "v", "é", "n", "e", "d", "n", "i", "f", "r", "e", "v", "u", "o", "r", "t", "i", "s", "ă", "g", "r", "a", "r", "t", "n", "o", "c", "n", "e", "ć", "ź", "e", "l", "a", "n", "d", "o", "t", "i", "m", "m", "o", "c", "d", "o", "h", "k", "a", "n"].reverse();
  var out = chars.splice(6,4).concat(chars.splice(chars.length-5,5));
  alert(`The key is "${out.reduce((a,b)=> a+b)}"`);
}
sosu();
