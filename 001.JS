function wisContador(){
    let n = Number(prompt("Digite um número: "));
    let inc = 1;
    while(inc <= n){
        alert(inc);
        inc ++;
    }
}
function WisAteZero(){
    let n = Number(prompt("Digite um número! "));
    let soma = 0;
    while(n != 0){
        soma = soma + n;
        n = Number(prompt("Digite um número!"));
    }
    alert(soma);
}

function atv3(){
    let qtdTotal = Number(prompt("Digite a quantidade de números que você quer! "));
    let soma = 0;
    let qtdCad = 0;
    while(qtdCad < qtdTotal){
        let numero = Number(prompt("Digite a quantidade de números que você quer! "));
        soma = soma + numero
        qtdCad ++;
    }
    let media = soma/qtdTotal;
    alert(media);
}
function atv5(){
    let n = Number(prompt("Digite um número!"));
    let tabela = "";
    //for(inicialização ; condição ; incremento){trecho que será repetido};
    for(let mult = 1; mult <= 10; mult ++){
        tabela += "\n"+n+" X "+mult+" = "+(n*mult);
    }
    alert(tabela)
}
function atv6(){
    let n = Number(prompt("Digite um número!"));
    let pares = ""
    for(let par = 1; par <= n; par ++){
        //guarda += "\n"+n+par+
        if(par % 2 == 0){
            pares += "\n"+par;
        }
    }
    alert("Seus números pares são: "+pares);
}
function atv7(){
    let n = Number(prompt("Digite o número!"));
    let passo = Number(prompt("Digite o passo definido por você!!!"));
    let i = 1;
    while(i < n){
        alert(i);
        i += passo;
    } 
}
function atv8(){
    let n = Number(prompt("Digite um número!"));
    let impares = ""
    for(let i = 1; i <= n; i ++){
        if(i % 2 != 0){
            impares += "\n"+i;
        }
    }
    alert(impares)
}
function atv9(){
    let n1 = Number(prompt("Digite um número!!"));
    let n2 = Number(prompt("Digite o possivel multiplo!!"));
    if(n2 % n1 == 0){
        alert(n2+" é múltiplo de "+n1);
    }
    else{
        alert(n2+" não é múltiplo de "+n1);        
    }
}
function verPrimo(i){
    let qtdDivisores = 0;
    let ant = 1;
    while(ant <= i){
        if(i % ant == 0){
            qtdDivisores ++;
        }
        ant ++;
    }
    if(qtdDivisores == 2){
        return true;
    }
    else{
        return false;
    }
}

function atv10(){
    let n = Number(prompt("DIgite um número!!"));
    let i = 1;
    while(i <= n){
        if(verificaSeEhPrimo(i) == true){
            alert(i+" É primo!!");
        }
        else{
            alert(i+" Não é primo!!")
        }
        i ++;
    }
}
function atv10for(){
    let n = Number(prompt("Digite um número!!"));
    let tabel = ""
    for(let i = 1; i <= n; i ++){
        if(verPrimo(i) == true){
            tabel += i+" \n "
        }
    }
    alert(tabel);
}