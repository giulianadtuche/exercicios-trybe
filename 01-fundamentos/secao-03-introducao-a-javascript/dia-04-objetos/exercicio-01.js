let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }
info.recorrente = 'Sim';
//console.log(info);
//for(let key in info) {
    //console.log(key);
    //console.log(info[key]);
//}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Moutain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}
for (let key in info) {
    if (
        key === 'recorrente' &&
        info[key] === 'Sim' &&
        info2[key] === 'Sim'
    ) {
     console.log('Ambos recorrentes');
    } else {
        console.log(info[key], 'e', info2[key]);
     }
    }


