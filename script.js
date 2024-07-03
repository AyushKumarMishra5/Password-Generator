const generatePass = document.getElementById('password');
const length = 10;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

const gen = uppercase + lowercase + numbers;
function createPass(){
    let password = "";
    password += uppercase[Math.floor(Math.random()* uppercase.length)];
    password += lowercase[Math.floor(Math.random()* lowercase.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];

    while(length > password.length)
        {
            password += gen[Math.floor(Math.random()*gen.length)];
        }
        generatePass.value = password;
}

function copyPass(){
    generatePass.select();
    document.execCommand("copy");
}