
const repeatString = function getRepeatString(nom = string,number) {
if(number < 0) return 'ERROR'

 string = nom.repeat(number)

 return string
};

const number = Math.floor(Math.random() * 10)
for(i = 0; i < number; i++){
    
    repeatString('hey',number)
}


// Do not edit below this line
module.exports = repeatString;
