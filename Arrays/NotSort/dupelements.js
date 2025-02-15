let data = [10.20,30,10,20,50,10,30,80];
let Objdata = {};


 data.forEach(element => {
    Objdata[element] = (Objdata[element]||0) + 1
});
console.log(Objdata);
