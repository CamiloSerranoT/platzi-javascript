// for estandar
let list = ['eat','sleep','code']

for (let i = 0;i < list.length;i++){
    console.log(list[i])
}

console.log('----------------------------')
// for-of
let list2 = ['Manzana','Pera','Granadilla','Melon']

for (fruta of list2){
    console.log(fruta)
}

console.log('----------------------------')
// for-in
let list3 = {
    manzana: 5,
    pera: 3,
    uva: 4
}

for (fruta2 in list3){
    console.log(fruta2)
}

for (fruta3 in list3){
    console.log(`${fruta3} : ${list3[fruta3]}`)
}
