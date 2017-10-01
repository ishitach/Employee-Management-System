//let isDone : boolean =true;
var btn1 = document.getElementById("btn1");
var div1 = document.getElementById("div1");
var btn2 = document.getElementById("btn2");
var div2 = document.getElementById("div2");
var btn3 = document.getElementById("btn3");
var div3 = document.getElementById("div3");
var btn4 = document.getElementById("btn4");
var div4 = document.getElementById("div4");
var name1 = document.getElementById("name1");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var addadd = document.getElementById("addadd");
var addundo = document.getElementById("addundo");
var name2 = document.getElementById("name2");
var des = document.getElementById("des");
var man = document.getElementById("man");
var dev = document.getElementById("dev");
var listemp = document.getElementById("listemp");
var list1 = document.getElementById("list1");
var eledit = document.getElementById("eledit");
var elrem = document.getElementById("elrem");
var jk = 0;
var no = 0;
var types = [];
var emps = [];
var empl = (function () {
    function empl() {
    }
    empl.prototype.f1 = function () {
        div1.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        //display : block; 
    };
    empl.prototype.f2 = function () {
        div2.style.display = "block";
        div1.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        var listoftypes = "";
        for (var i = 0; i < types.length; i++) {
            console.log(types[i]);
            // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
            listoftypes += "<option value= " + i + ">" + types[i] + "</option>";
            document.getElementById("select1").innerHTML = listoftypes;
        }
        //display : block; 
    };
    empl.prototype.f3 = function () {
        div3.style.display = "block";
        div4.style.display = "none";
        div2.style.display = "none";
        div1.style.display = "none";
        //display : block; 
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        var listoftypes = "";
        for (var i = 0; i < types.length; i++) {
            console.log(types[i]);
            // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
            listoftypes += "<li id=" + types[i] + ">" + types[i] + "</li>";
            document.getElementById("listemp").innerHTML = listoftypes;
        }
        //adding default values
        var devs = [];
        var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
        for (var i = 0; i < emps.length; i++) {
            if (emps[i].addtype == types[0]) {
                devs.push(emps[i].addname);
                console.log(emps[i].addname);
            }
        }
        document.getElementById("list1").innerHTML = '';
        var listoftypes = "";
        for (var i = 0; i < devs.length; i++) {
            console.log(devs[i]);
            listoftypes += "<li idx=" + devs[i] + ">" + devs[i] + "</li><br>";
            document.getElementById("list1").innerHTML = listoftypes;
        }
    };
    empl.prototype.f4 = function () {
        div4.style.display = "block";
        div3.style.display = "none";
        div2.style.display = "none";
        div1.style.display = "none";
        //display : block; 
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        var listoftypes = "";
        for (var i = 0; i < types.length; i++) {
            console.log(types[i]);
            // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
            listoftypes += "<option value= " + i + ">" + types[i] + "</option>";
            document.getElementById("select2").innerHTML = listoftypes;
        }
    };
    return empl;
}());
var obj = new empl();
btn1.onclick = function () { obj.f1(); };
btn2.onclick = function () { obj.f2(); };
btn3.onclick = function () { obj.f3(); };
btn4.onclick = function () { obj.f4(); };
//btn1.on("click", "button", f1);
var createType = (function () {
    function createType() {
    }
    createType.prototype.f6 = function () {
        div4.style.display = "none";
        div3.style.display = "none";
        div2.style.display = "none";
        div1.style.display = "none";
        //display : block; 
    };
    createType.prototype.f5 = function () {
        //console.log(name1.value);
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        types.push(name1.value);
        window.localStorage.setItem("types", JSON.stringify(types));
        for (var i = 0; i < types.length; i++)
            console.log(types[i]);
        document.getElementById("name1").value = "";
        // document.getElementById("name1").innerHTML="";
    };
    createType.prototype.f7 = function () {
        //selectx.innerHTML
        var selectx = document.getElementById("select1").value;
        // var j=0;
        // for(var i=0;i<types.length;i++)
        // {
        //     if(types[i])
        // }
        types.splice(Number(selectx), 1);
        // console.log(selectx);
        // for(var i=0;i<types.length;i++)
        // console.log(types[i]);
        window.localStorage.setItem("types", JSON.stringify(types));
        var obj = new empl();
        obj.f2();
    };
    return createType;
}());
var obj1 = new createType();
btn6.onclick = function () { obj1.f6(); };
btn8.onclick = function () { obj1.f6(); };
btn5.onclick = function () { obj1.f5(); };
btn7.onclick = function () { obj1.f7(); };
var addemp = (function () {
    function addemp() {
    }
    addemp.prototype.addfunc = function () {
        var selecty = document.getElementById("select2").value;
        var y = window.localStorage.getItem("emps");
        if (y) {
            emps = JSON.parse(y);
        }
        if (document.getElementById("addadd").innerHTML == "Update") {
            var a = document.getElementById("name2").value;
            emps.splice(jk, 1, { addname: a,
                adddes: document.getElementById("des").value,
                addtype: types[document.getElementById("select2").value]
            });
        }
        else {
            emps.push({ "addname": name2.value, "adddes": des.value, "addtype": types[selecty] });
            if (no < 3)
                no++;
            console.log(no);
        }
        document.getElementById("des").value = "";
        document.getElementById("name2").value = "";
        window.localStorage.setItem("emps", JSON.stringify(emps));
    };
    return addemp;
}());
var obj2 = new addemp();
addadd.onclick = function () { obj2.addfunc(); };
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
function displaylist(e) {
    console.log(e.srcElement.getAttribute('id'));
    eledit.disabled = true;
    elrem.disabled = true;
    var devs = [];
    var x = window.localStorage.getItem("emps");
    if (x) {
        emps = JSON.parse(x);
    }
    for (var i = 0; i < emps.length; i++) {
        if (emps[i].addtype == e.srcElement.getAttribute('id')) {
            devs.push(emps[i].addname);
            // console.log(emps[i].addname);
        }
    }
    // for(var i=0;i<devs.length;i++){
    //     console.log(devs[i]);
    // }
    document.getElementById("list1").innerHTML = '';
    var listoftypes = "";
    for (var i = 0; i < devs.length; i++) {
        console.log(devs[i]);
        // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
        listoftypes += "<li idx=" + devs[i] + ">" + devs[i] + "</li><br>";
        document.getElementById("list1").innerHTML = listoftypes;
    }
}
listemp.onclick = function showOnHover(e) {
    displaylist(e);
};
list1.onclick = function showOnHover(e) {
    console.log(e.srcElement.getAttribute('idx'));
    console.log(e.srcElement);
    //  style="color:blue;"
    var str = e.srcElement.getAttribute('idx');
    console.log(e.srcElement.setAttribute('style', 'background-color:yellow'));
    eledit.disabled = false;
    elrem.disabled = false;
    var x = window.localStorage.getItem("emps");
    if (x) {
        emps = JSON.parse(x);
    }
    var obj4 = [];
    for (var i = 0; i < emps.length; i++) {
        if (emps[i].addname == e.srcElement.getAttribute('idx')) {
            obj4[0] = emps[i].addname;
            obj4[1] = emps[i].adddes;
            obj4[2] = emps[i].addtype;
            obj4[3] = i;
            // console.log(emps[i].addname);
        }
    }
    // for(var i=0;i<devs.length;i++){
    //     console.log(devs[i]);
    // }
    eledit.onclick = function editemp() {
        div4.style.display = "block";
        div3.style.display = "none";
        div2.style.display = "none";
        div1.style.display = "none";
        //document.getElementById("name2").innerHTML = obj4[0];
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        var listoftypes = "";
        for (var i = 0; i < types.length; i++) {
            console.log(types[i]);
            // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
            listoftypes += "<option value= " + i + ">" + types[i] + "</option>";
            document.getElementById("select2").innerHTML = listoftypes;
        }
        document.getElementById("name2").value = obj4[0];
        document.getElementById("des").value = obj4[1];
        // (document.getElementById("select2") as HTMLInputElement).value= obj4[2];
        // document.getElementById("des").innerHTML = obj4[1];
        document.getElementById("addadd").innerHTML = "Update";
    };
    elrem.onclick = function rememp() {
        console.log(Number(obj4[0]));
        var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
        for (var i_1 = 0; i_1 < emps.length; i_1++) {
            if (emps[i_1].addname == obj4[0]) {
                jk = i_1;
                console.log(jk);
                console.log(emps[i_1].addname);
            }
        }
        emps.splice(jk, 1);
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
        var listoftypes = "";
        for (var i = 0; i < types.length; i++) {
            console.log(types[i]);
            // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
            listoftypes += "<li id=" + types[i] + ">" + types[i] + "</li>";
            document.getElementById("listemp").innerHTML = listoftypes;
            document.getElementById("list1").innerHTML = "";
        }
        //displaylist(emps[jk].addtype);
        //btn3.onclick = function(){ obj.f3()};
    };
};
addundo.onclick = function undoadd() {
    alert(no);
    if (no > 0) {
        var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
        //emps.pop(); 
        emps.splice(0, 1);
        window.localStorage.setItem("emps", JSON.stringify(emps));
        no--;
    }
    else {
        alert("Can't undo more than 3 items");
    }
};
