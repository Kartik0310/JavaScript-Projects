const input = document.querySelector('.input');
const lowercase = document.querySelector('.lowercase-output')
const uppercase = document.querySelector('.uppercase-output')
const camelcase = document.querySelector('.camelcase-output')
const pascalcase = document.querySelector('.pascalcase-output')
const snakecase = document.querySelector('.snakecase-output')
const kebabcase = document.querySelector('.kebabcase-output')
const trimcase = document.querySelector('.trim-output')


function capitalizeFirst(str){
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1,str.length)
}

function toCamelCase(string) {
    const lowercase = string.toLowerCase()
    const wordArray = lowercase.split(" ");

    const finalArray = wordArray.map((word,i)=>{
        if(i===0) return word
        return capitalizeFirst(word)
    })
    
    return finalArray.join('');
}


function toPascalCase(str) {
    const lowercase = str.toLowerCase();
    const wordArray = lowercase.split(' ');

   const finalArray =  wordArray.map((word)=>  capitalizeFirst(word));
        // console.log(word[0].toUpperCase() + word.slice(1, word.length));
    

   return finalArray.join('');
}

function kebabCase(str) {
     return str.replaceAll(' ', '-')
}


function snakeCase(str) {
     return str.replaceAll(' ', '_')
}


function Trim (str) {
    
     return str.replaceAll(' ','');
}




input.addEventListener('input', ()=>{

    lowercase.innerText = input.value.toLowerCase();
    uppercase.innerText = input.value.toUpperCase();

    camelcase.innerText = toCamelCase(input.value.trim());

    pascalcase.innerText = toPascalCase(input.value.trim());

    snakecase.innerText = snakeCase(input.value.trim());

    kebabcase.innerText = kebabCase(input.value.trim());

    trimcase.innerText = Trim(input.value.trim());


    
})


