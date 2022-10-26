var num

function VerificarNum() {
    num = prompt("Insira um valor inteiro")
    if(num < 0){
    num = -1
    }
    if(num == 0){
    num = 0
    }
    if(num >1){
    num = 1
    }
}
VerificarNum()
console.log(num)