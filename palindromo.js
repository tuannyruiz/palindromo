var palindromo = function(str) {
    var strLen = str.length; //pega o tamanho da string

    if (strLen === 0 || strLen === 1) { //se tiver um caracter ou nenhum
        return true; //é palindromo automaticamente
    }
    
    if (str[0] === str[strLen - 1]) { //se o primeiro caracter for igual ao último
        return palindromo(str.slice(1, strLen - 1)); //exclui o primeiro e o último caracter e chama a função de novo
    }
    
    return false;
};

console.log(palindromo('racecar'));


/*

Como funcionaria com a palavra 'racecar':

r === r

aceca

a === a

cec

c === c

e

Um caracter = Palindromo.

*/