// const a = [{day:"Monday", value:10},{day:"Tuesday", value:30},{day:"Wednesday", value:20},{day:"Thursday",value:40}];
// const b = [{day:"Friday",value:60},{day:"Saturday",value:50},{day:"Sunday",value:70}];
/*const c = [];
c.push(...a,...b);
console.log(c)*/
// let map = {};

// a.forEach(item => map[item.value] = item);
// b.forEach(item => map[item.value] = item);

// const result = Object.values(map);

// console.log(result);




//  let c = []
//  for (let i=0;i<a.length;i++){
//    let d = a[i]
//  c.push(d)
//  }
//  for(let j=0;j<b.length;j++){
//    let d = b[j]
//  c.push(d)           
//  }

// c.sort(function(a, b){
//    return parseFloat(a.value) - parseFloat(b.value);
 
// });
// console.log(c);



//.some method
//let ansh=[1,2,9,5,4];
//console.log(ansh);
//ansh.push(4);
//let arpit = ansh.indexOf(4)
//console.log(arpit);
// let nitin = arpit.reverse();
// console.log(nitin);



/*duplicasy in array
let a = [1,3,2,4,1,3,2,4,1];
let b = [ a.sort() ];

let c =[];

for (let i= 0; i< a.length; i++){

if(c.indexOf(a[i]) === -1){
  c.push(a[i]);
  console.log(c);
}
}*/


/* duplicates through nested loop*/
let aa = [1,3,2,4,1,3,2,4,1];
let bb = [ aa.sort() ];
console.log(bb);
