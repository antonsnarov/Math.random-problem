let a =[];
let stat ={};

function generateRandom(){
    return Math.round(10*Math.random());
}

function generateArray(){
    for( let i=0; i< 100;i++){
        a.push(generateRandom());
    }
}
generateArray();

function calcStat(arr){
    for(let k of arr){
        if(stat[k]){
            stat[k]++;
        }
        else{
            stat[k]=1;
        }
    }
    return stat;
}
console.log(calcStat(a));