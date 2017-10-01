//let isDone : boolean =true;

let btn1 = <HTMLInputElement>document.getElementById("btn1");
let div1 = <HTMLInputElement>document.getElementById("div1");
let btn2 = <HTMLInputElement>document.getElementById("btn2");
let div2 = <HTMLInputElement>document.getElementById("div2");
let btn3 = <HTMLInputElement>document.getElementById("btn3");
let div3 = <HTMLInputElement>document.getElementById("div3");
let btn4 = <HTMLInputElement>document.getElementById("btn4");
let div4 = <HTMLInputElement>document.getElementById("div4");

let name1 = <HTMLInputElement>document.getElementById("name1");
let btn5 = <HTMLInputElement>document.getElementById("btn5");
let btn6 = <HTMLInputElement>document.getElementById("btn6");

let btn7 = <HTMLInputElement>document.getElementById("btn7");
let btn8 = <HTMLInputElement>document.getElementById("btn8");

let addadd = <HTMLInputElement>document.getElementById("addadd");
let addundo = <HTMLInputElement>document.getElementById("addundo");
let name2 = <HTMLInputElement>document.getElementById("name2");
let des = <HTMLInputElement>document.getElementById("des");

let man = <HTMLInputElement>document.getElementById("man");
let dev = <HTMLInputElement>document.getElementById("dev");

let listemp = <HTMLInputElement>document.getElementById("listemp");
let list1 = <HTMLInputElement>document.getElementById("list1");
let eledit = <HTMLInputElement>document.getElementById("eledit");
let elrem = <HTMLInputElement>document.getElementById("elrem");

var jk=0;
var no:number =0;
let types= [] ;
let emps: { addname: string,adddes: string,addtype: string }[] = [];
class empl{

    f1()
    {
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    //display : block; 
    }

    f2()
    {
    div2.style.display = "block";
    div1.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";

var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
var listoftypes="";
for(var i=0;i<types.length;i++)
{
console.log(types[i]);
// listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
listoftypes+="<option value= "+i+">"+types[i]+"</option>";
document.getElementById("select1").innerHTML = listoftypes;
}
    //display : block; 
    }

    f3()
    {
    div3.style.display = "block";
    div4.style.display = "none";
    div2.style.display = "none";
    div1.style.display = "none";
    //display : block; 
    var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
var listoftypes="";
for(var i=0;i<types.length;i++)
{
console.log(types[i]);
// listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
listoftypes+="<li id="+types[i]+">"+types[i]+"</li>";
document.getElementById("listemp").innerHTML = listoftypes;

}

//adding default values
    let devs=[];
    var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
    for(var i=0;i<emps.length;i++){
        if(emps[i].addtype ==types[0]){
        devs.push(emps[i].addname);
     console.log(emps[i].addname);
        }
    }
document.getElementById("list1").innerHTML='';
    var listoftypes="";
for(var i=0;i<devs.length;i++)
{
console.log(devs[i]);
listoftypes+="<li idx="+devs[i]+">"+devs[i]+"</li><br>";
document.getElementById("list1").innerHTML = listoftypes;
}

    }

    f4()
    {
    div4.style.display = "block";
    div3.style.display = "none";
    div2.style.display = "none";
    div1.style.display = "none";
    //display : block; 


var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
var listoftypes="";
for(var i=0;i<types.length;i++)
{
console.log(types[i]);
// listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
listoftypes+="<option value= "+i+">"+types[i]+"</option>";
document.getElementById("select2").innerHTML = listoftypes;
}


    }
}

let obj= new empl();

btn1.onclick = function(){ obj.f1()};
btn2.onclick = function(){ obj.f2()};
btn3.onclick = function(){ obj.f3()};
btn4.onclick = function(){ obj.f4()};

//btn1.on("click", "button", f1);
class createType{

 f6()
    {
    div4.style.display = "none";
    div3.style.display = "none";
    div2.style.display = "none";
    div1.style.display = "none";
    //display : block; 
}

f5(){
//console.log(name1.value);
 var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }

types.push(name1.value);

   window.localStorage.setItem("types", JSON.stringify(types));
for(var i=0;i<types.length;i++)
console.log(types[i]);


(document.getElementById("name1") as HTMLInputElement).value = "";
// document.getElementById("name1").innerHTML="";
}

f7(){

//selectx.innerHTML
let selectx =(document.getElementById("select1") as HTMLInputElement).value;

// var j=0;
// for(var i=0;i<types.length;i++)
// {
//     if(types[i])
// }
types.splice(Number(selectx),1);  
// console.log(selectx);

// for(var i=0;i<types.length;i++)
// console.log(types[i]);
 window.localStorage.setItem("types", JSON.stringify(types));
 let obj= new empl();
obj.f2();
}   

}

let obj1 = new createType();
btn6.onclick = function(){ obj1.f6()};
btn8.onclick = function(){ obj1.f6()};
btn5.onclick = function(){ obj1.f5()};
btn7.onclick = function(){ obj1.f7()};

class addemp{

addfunc(){
let selecty =(document.getElementById("select2") as HTMLInputElement).value;
 var y = window.localStorage.getItem("emps");
        if (y) {
            emps = JSON.parse(y);
        }

        if(document.getElementById("addadd").innerHTML == "Update"){
var a= (document.getElementById("name2") as HTMLInputElement).value;

            emps.splice(jk,1,{addname: a , 
                adddes : (document.getElementById("des") as HTMLInputElement).value,
addtype:  types[ (document.getElementById("select2") as HTMLInputElement).value]
            });
        }
        else{
emps.push( { "addname": name2.value ,"adddes":  des.value,"addtype": types[selecty] });
if(no<3)
no++;
console.log(no);

        }

(document.getElementById("des") as HTMLInputElement).value = "";
(document.getElementById("name2") as HTMLInputElement).value = "";

   window.localStorage.setItem("emps", JSON.stringify(emps));
}

}
let obj2 = new addemp();

addadd.onclick = function(){ obj2.addfunc()};

// interface IModal {
//     addname: string;
//     adddes: string;
//     //...
// addtype: string;
//     //Extra
//    // foo: (bar: string): void;
// }

// class Modal implements IModal {
//     addname: string;
//     adddes: string;
//   addtype: string;
// }

// class emplist{

// devsearch(){
//     let devs=[];
//     var x = window.localStorage.getItem("types");
//         if (x) {
//             types = JSON.parse(x);
//         }
//     for(var i=0;i<emps.length;i++){
//         if(emps[i].addtype == "Developer"){
//         devs.push(emps[i].addname);
//         console.log(emps[i].addname);
//         }
//     }

    

//       let mans=[];
//     for(var i=0;i<emps.length;i++){
//         if(emps[i].addtype == "Manager"){
//         mans.push(emps[i].addname);
//          console.log(emps[i].addname);
//         }
//     }
// }

// }
// let obj3 = new emplist();

// addundo.onclick = function(){ obj3.devsearch()};




 function displaylist(e){
    console.log(e.srcElement.getAttribute('id'));
    
    eledit.disabled = true;
      elrem.disabled = true;

    let devs=[];
    var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
    for(var i=0;i<emps.length;i++){
        if(emps[i].addtype == e.srcElement.getAttribute('id')){
        devs.push(emps[i].addname);
        // console.log(emps[i].addname);
        }
    }
    // for(var i=0;i<devs.length;i++){
    //     console.log(devs[i]);
    // }
document.getElementById("list1").innerHTML='';
    var listoftypes="";
for(var i=0;i<devs.length;i++)
{
console.log(devs[i]);
// listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
listoftypes+="<li idx="+devs[i]+">"+devs[i]+"</li><br>";
document.getElementById("list1").innerHTML = listoftypes;
}
}
listemp.onclick = function showOnHover(e){
    displaylist(e);
};

list1.onclick = function showOnHover(e){

    console.log(e.srcElement.getAttribute('idx'));
    console.log(e.srcElement);
  //  style="color:blue;"
    let str = e.srcElement.getAttribute('idx');
  console.log(e.srcElement.setAttribute('style','background-color:yellow'));
    eledit.disabled = false;
      elrem.disabled = false;

    var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
       let obj4=[];
    for(var i=0;i<emps.length;i++){
        if(emps[i].addname == e.srcElement.getAttribute('idx')){
        obj4[0] = emps[i].addname;
        obj4[1] = emps[i].adddes;
        obj4[2] = emps[i].addtype;
        obj4[3]=i;
        // console.log(emps[i].addname);
        }
    }
    // for(var i=0;i<devs.length;i++){
    //     console.log(devs[i]);
    // }

eledit.onclick = function editemp(){
 div4.style.display = "block";
    div3.style.display = "none";
    div2.style.display = "none";
    div1.style.display = "none";

//document.getElementById("name2").innerHTML = obj4[0];


var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
var listoftypes="";
for(var i=0;i<types.length;i++)
{
console.log(types[i]);
// listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
listoftypes+="<option value= "+i+">"+types[i]+"</option>";
document.getElementById("select2").innerHTML = listoftypes;
}

(document.getElementById("name2") as HTMLInputElement).value= obj4[0];
(document.getElementById("des") as HTMLInputElement).value= obj4[1];

// (document.getElementById("select2") as HTMLInputElement).value= obj4[2];
// document.getElementById("des").innerHTML = obj4[1];
document.getElementById("addadd").innerHTML = "Update";
};

elrem.onclick = function rememp(){
    console.log(Number(obj4[0]));
    
    var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
    
     for(let i=0;i<emps.length;i++){
        if(emps[i].addname == obj4[0]){
       jk=i;
       console.log(jk);
        console.log(emps[i].addname);
        }
    }
    emps.splice(jk,1); 
      window.localStorage.setItem("emps", JSON.stringify(emps));
    //   div3.style.display = "none";
//   let obj= new empl();
//  obj.f3();

//   div3.style.display = "block";
    // div4.style.display = "none";
    // div2.style.display = "none";
    // div1.style.display = "none";
    //display : block; 
    var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
var listoftypes="";
for(var i=0;i<types.length;i++)
{
console.log(types[i]);
// listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
listoftypes+="<li id="+types[i]+">"+types[i]+"</li>";
document.getElementById("listemp").innerHTML = listoftypes;
document.getElementById("list1").innerHTML = "";
}



//displaylist(emps[jk].addtype);
      //btn3.onclick = function(){ obj.f3()};
   
};


}

addundo.onclick = function undoadd(){
    alert(no);
if(no>0){
  var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
     //emps.pop(); 
     emps.splice(0,1);

      window.localStorage.setItem("emps", JSON.stringify(emps));
no--;
}else{
    alert("Can't undo more than 3 items")
}
}
