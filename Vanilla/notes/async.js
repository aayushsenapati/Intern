/* 
setTimeout(()=>console.log('done0'),3000)
for(let i=0;i<=10000000000;i++){
    if(i===10000000000)console.log('done1')
}
setTimeout(()=>console.log('done2'),3000) */

/* var i=1 
var t =parseInt(Math.random()*1000)
console.log(i++)
var pro=new Promise((resolve,reject)=>{
    console.log('promise started',i++)
    for(let i=0;i<=10000000000;i++){
        if(i===10000000000)console.log('done with long loop')
    }
    if(t%2===0){
        console.log('resolving')
        resolve(t)}
    else {
        console.log('rejecting')
        reject(t)}
})  
pro.then((t)=>console.log('resolved',t,i++),(t)=>console.log('rejected',t,i++))
console.log('um' ,i++) */

/* var i=1 
var t =parseInt(Math.random()*1000)
console.log(i++)
var pro=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('promise started',i++)
    for(let i=0;i<=10000000000;i++){
        if(i===10000000000)console.log('done with long loop')
    }
    if(t%2===0){
        console.log('resolving')
        resolve(t)}
    else {
        console.log('rejecting')
        reject(t)}
    },3000)
})
pro.then((t)=>console.log('resolved',t,i++),(t)=>console.log('rejected',t,i++))
console.log('um' ,i++) */


/* async function f(){


    var t =parseInt(Math.random()*1000)
    var pro=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('promise started')
        
        if(t%2===0){
            console.log('resolving')
            resolve(t)}
        else {
            console.log('rejecting')
            reject(t)}
        },3000)
    })
    console.log('abdb')
    s=await pro
    pro.then((t)=>console.log('resolved',t)).catch((t)=>console.log('rejected',t))
    console.log('um')
    console.log(s)
}
f()
 */


/* async function f(){
    for(let i=0;i<=10000000000;i++){
        if(i===10000000000)console.log('done with long loop')
    }
}
f()
console.log('started') */

p1 = Promise.resolve(50);
p2 = 200
p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 3000, 'geek');
});

Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values);
});
console.log('started')