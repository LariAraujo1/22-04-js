// Aqui esta como você pode interpretar essa expressão regular;

// ^ - Representa o inicio da String
// [0-9]- Representa qualquer digito numerico de 0 a 9.
// + - indica que o digito numerico de 0 a 9.
// + - indica que o digito pode ocorrer uma ou mais vezes.
// $ - Representa o final da String.

//01 - Exemplo
// const regex = /^\d+$/;

// const string1 = "12345";
// const string2 = "abc123";
// const string3 = "987654321";

// console.log(regex.test(string1)); //true
// console.log(regex.test(string2)); //false
// console.log(regex.test(string3)); //true


// 02- Exemplo
// const regex = /^[A - Za-z]+$/;
// console.log(regex.test("abcd"));// true
// console.log(regex.test("abc123")); //false


// //03 - Email
// const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// console.log(regex.test("test@exemple.com")); //true
// console.log(regex.test("invalid_email"));//false


// const regex = /\d+/g;
// const string = "Eu tenho 3 maças e 5 laranjas.";
// const numeros = string.match(regex);
// console.log(numeros); //["3", "5"]

const regex = /^(\+55)?\s?(?:\(?\d{2}\)?\s?)?(?:9\s?)?[6-9]\d{3}\s?\-?\d{4}$/;

// Exibir resultado 
if(ehValido){
    console.log("O numero de celular é valido");

}else {
     console.log("o numero de ceular é invalido");
}

/*Explicação da expressão regular:
^ e $ são âncoras que indicam o início e o fim da string, respectivamente. (\+55)? é um grupo de captura opcional que corresponde ao código de país "+55". O código de país é opcional para números de celular brasileiros.
\s? corresponde a um espaço em branco opcional.
(?:\(?\d{2}\)?\s?)? é um grupo não capturador opcional que corresponde a um código de área opcional, que pode estar entre parênteses. O código de área é composto por dois dígitos numéricos.
