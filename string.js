var exports = module.exports = {};

function PasswordMessage(m){
this.name = "PasswordMessage";
this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(char.length>= min && char.length<= max)
    {
      return true;
    }
    else {
      return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
let hasUpper = false;
try{
    for(var i=0; i<str.length; i++){
        hasUpper= inRange(str[i],65,90);
        if (hasUpper == true) {
            break;
        }
    }
}


}


exports.containsLower =function(str){
    let hasLower = false;
    try{
        for(var i=0; i<str.length; i++){
            hasLower= inRange(str[i],97,122);
            if (hasLower == true) {
                break;
            }
        }
    }
}


exports.containsNumerical =function(str){
    let hasNumber = false;
    try{
        for(var i=0; i<str.length; i++){
            hasNumber= inRange(str[i],48,57);
            if (hasNumber == true) {
                break;
            }
        }
    }
}


exports.containsSpecial =function(str){
    let hasSpecial = false;
    let special= [33,35,36,37,38,42,64,94]
    try{
        for(var i=0; i<str.length; i++){
            for(var x=0;x<special.length; x++){


            hasSpecial= inRange(str[i],special[x],special[x]);
            if (hasSpecial == true) {
                break;
            }
        } if (hasSpecial == true) {
            break;
        }}
    }
}
