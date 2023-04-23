import * as React from 'react'
import {View, Text} from 'react-native'
import couser,{courseNm} from './exportcs'

class myarray extends Array{
    constructor(...args){
        super(...args)
    }

    display=()=>{
        let stritem="";
        for(let val of this){
            stritem+=`${val}`
        }
        console.log(stritem);
    }
}
// class use this to represent inside method, as its constructor
// or use static method


class person {
    constructor(name, age){
        this._pname=name;
        this._age=age;

    }

display(){
    console.log(this._pname)
    console.log(this._age)
}

set pname(bnm){this._pname=bnm}
get pname(){ return this._pname}

}


// js object is the object from a class, state and behavor

//state =={prop1,2,3,...}
//behavor={mth(),mth1(),mth2()....}

const car={
    color:'red',
    weight:1222,
    run: ()=>{console.log('run now')} //so here run can be define as a prop, nice!!!
}
// @@@@@@@@@@@@@@@@@@@@@@@

//object is important, so browser object: BOM, DOM,...
//object means state abd behavior ...............

//return {name:'david',addr:'wa 23', age: age} @@@



aaa=()=>{
    let org={one:1, two:2, three:3}
    let copp={...org}
    copp=[{...org},{four:4,five: 5}]
    console.log(JSON.stringify(copp))
}

bbb=()=>{
    let org={one:1, two:2, three:3}  //object state
    let {one, two:ttt}=org;  //state =object, name pass as a new object
    console.log(one) //return value!!!
    console.log(ttt) 
}


showd=({name})=>{
    console.log(name);

    let strobj='{"one":"11","two":"22","three":"33"}'
let obj=JSON.parse(strobj)
console.log(obj)
let obj1=JSON.stringify(obj)
console.log(obj1)
//location.assign(url) ---means open url

console.log(Math.floor(Math.random()*100)+1)
}

ccc=()=>{
    let numa=[8,90,78,999]
console.log(Math.max(...numa))
let ccci=[12,32,11,22]
let alll=[...numa,...ccci]
console.log(alll)
let fy=[98,67,88]
fyy=[...fy]
fyy.push(8,9,'i')

console.log(Math.max(fyy))

let uuuuu=['high shcool', 98]
let [cv,mn]=uuuuu
console.log(cv)
console.log(mn)  //any variable....

let [pk,,km]=['mkkkk',90, 987]
console.log(pk)
console.log(km)


let color=[{k:'ki',y:'yellow',r:'red',p:'purple'},{k:'kijh',j:'klop'}]
for(let i=0;i<color.length;i++){
    console.log(color[i])
}

let [kk,oo]=color
console.log(oo.j)


let kkk=[9,8,6,4,8,7]
let nk=kkk.map(n=>n/2)  //(n)=>{return each n/2}
console.log(nk)

console.log(kkk.join('-'))

kkk.splice(2,0,888)  //insert 888 after 8
console.log(kkk)
console.log(kkk.reduce((kn,ko)=>kn+ko))  //init kn+=ko, +ko.... sum all

console.log(nk.reduce((k,l)=>k+l))

let uu=[];
for (i=0;i<3;i++){
    uu.push(()=>{console.log(i)})
}
console.log(uu)

for (i=0;i<3;i++){
    uu[i]()  //execute!!!!!!correct 012
}


}//end

//callback, promise, async/await!!!!

// func a(funcb,v) funcb pass as a para to func a, a not execute, callback funcb not run
//call back hell, a wait b, b may a=wait c,,,...
// promise use .then.then...to sort out this hell---call back as well
//.then(()=>).........
//async use async keyword to return then() always............

const fkk=async ()=>{
    await setTimeout(() => {
        return "ke mk fhss"
    }, 3000);
    return "ke mk fhss"
} 


const kgg=()=>{  //fetch()) no result return until .then comes
    return Promise.resolve("klo htee")
}


const mypro=(x)=>{
 return x+9;
}


function asyncj(x){
    return new Promise(resolve=>resolve(x+9)); //promise dealy alreay , resolve wait for outg
}

async function execasyncjb(){
     resulr=await asyncj(7);
    console.log(resulr)
    sf=await asyncj(resulr)
    console.log(sf)
    sff=await asyncj(sf)
    console.log(sff)
    return "job done"
}

const Jstrain=()=>{

//fkk().then (val=>console.log(val)); 
//ececuted return fkk() result use then promise way
//not direct way
//kgg().then((val)=>console.log(val)) //because timeout in first, so it show result later
//only then can get result, resolve keep result, then return result
//kgg is a promise ==fetch()
//.then is a callback
var vv=mypro(8)
console.log(vv)
execasyncjb();/// so await function get para, this func simply return result, no need para
//async get result in delay way
//result from await
//await from promise resolve promise func normal, async call it with await to get resut later done

//finally await return a valuem, now i need to use .then() to accept this value, it is a text, want to show it, so console.log()comes
execasyncjb().then(val=>console.log(val)) //very gooooooooooooooooooooooood

couser.setcoursNm('mathertical science')

var cmm=couser.getcourenm();

console.log(cmm);  //sync get execute furst, async later

//ccc();


//     let bsb={name:'ccccc, david', country: 'usa'}
//     showd(bsb);

//     bbb();
//     aaa();

// let persons={name:'david', country: 'usa'}
// let dynamroperty="age"  //new property added!!!!!!!!!!
// persons[dynamroperty]=43;
// console.log(persons.age) //43 [] include this prop in
//     car.run();

// let mmkk=new myarray('david','dfete','jimki');
// mmkk.display();

// let per=new person();
// per.pname="ffddd"
// console.log(per.pname)
// let pers=new person("dlll", 34)
// console.log(pers._pname)




//hoisting----------only var can be hoist, let const not, 

// var cc;
// print cc
// cc="dd" cc is hoistedd



// callbytimeout=()=>{
//     console.log("be called by timeout")
// // }
// // let tbb=setTimeout(callbytimeout, 3000);

// // clearTimeout(tbb); //clean immedately 3000 comes, it already clean

// // let timeid=setInterval(callbytimeout, 3000); //repetivelyy loop

// // dd=()=>{clearInterval(timeid)};

// // setTimeout(dd,5000);


//  givemsg=(message)=>{

//     let usmsg=message;
//     function toUser(usname){
//         let name=usname
//         let great=usmsg+"---------"+name
//         return great
//     }
    
//     usmsg=toUser("booob")

//     return usmsg;

// }
// console.log(givemsg("force david"));

// // ()=>   //no underlined



//     const carg={name: 'wewedsd',addr: 'rfdew',emal: 'asfer'};

//     showdetail=({name,addr,emal})=>{
//         console.log(name);
//         console.log(addr); //pick from array as order
    
//     }
    
//     showdetail(carg)
    

//     let mov={empid:2,
//     empname:"david Huang"};


//     var loopc=0;

//     for (var lp=0; lp<5;lp++){
//        if(lp==3)  //not count, so 4 or 5 
//         continue;
//         loopc++;
//     }

//     var ppp=4;

//     switch(ppp){
//         case 5:
//             console.log("very poor");
//             break;
//         case 4:
//             console.log("poor");
//             break;
//             case 3:
//                 console.log("rich")
//                 break;
//                 default:
//                 console.log("ver rich")
//     }

//     const localob={
//         items:[1],
//         mypp(){
//         console.log(this===localob);
//             this.items.forEach(()=>{
//                 console.log(this===localob)
//                 console.log(this===window)
//             });
//         }
//     }

// localob.mypp();

// const arg=['wewedsd','rfdew','asfer'];

// showdetail=([asc,arg1,arg2])=>{
//     console.log(arg1);
//     console.log(arg2); //pick from array as order

// }

// showdetail(arg)


return (
    <View>
        <Text>test jsall</Text>
        {/* <Text> javascript is the loosely typed language, typeof is the operator to decide the data type in runtime,
            {mov.empid}+{mov.empname}
            it is called the dynamic data binding
            {typeof mov}
            {(mov.empid!==2)?(
                <Text>equal</Text>
                ):(<Text>not equal  </Text>)}
                continue is used to terminate a loop and continue a new loop
{loopc}
        </Text> */}
    </View>
)


}

export default Jstrain;