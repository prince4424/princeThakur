var info = [];

function tsubmit(){
    validation();
    
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
   
    var obj = {};
    obj["fname"] = fname;
    obj["lname"] = lname;
    obj["email"] = email;
    obj["number"] = number;

    info.push(obj);
    //console.log('array', info);

    if(fname !== '' && lname !== '' && email !== '' && number !== ''){

        let table = document.getElementById('table');
        table.innerHTML = '';
    
        for (let i = 0; i < info.length; i++){
    
            let row = table.insertRow();
            let th1 = row.insertCell(0);
            let th2 = row.insertCell(1);
            let th3 = row.insertCell(2);
            let th4 = row.insertCell(3);
           let th5 = row.insertCell(4);

             th1.innerHTML = info[i].fname;
             th2.innerHTML = info[i].lname;
             th3.innerHTML = info[i].email;
             th4.innerHTML = info[i].number;
             th5.innerHTML =`<button onclick ="edit('${th1.innerHTML}', '${th2.innerHTML}', '${th3.innerHTML}','${th4.innerHTML}')">Edit</button>`;
             
        }
    
    }  else{
        alert("field is empty")
    
    }
       document.getElementById("fname").value = "";
    document.getElementById("lname").value =" ";
     document.getElementById("email").value = "";
     document.getElementById("number").value ="";
 
    return false;

    
    
   
}

function validation(){

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;

    if(fname == "" ){
    
        document.getElementById("alert").style.display= 'block';
        return false;
    }
        else{
         document.getElementById("alert").style.display= "none";
        }

    

    
    if(lname == "" ){
        document.getElementById("alert1").style.display= 'block';
        return false;
        
        }
        else{
            document.getElementById('alert1').style.display ='none';
        }

    if(email ==""){
        document.getElementById("alert2").style.display= 'block';
        return false;
    }
    else{
        document.getElementById("alert2").style.display= "none";
       }
   

    if(number =="") {
        document.getElementById("alert3").style.display= 'block';
        return false;
    }  else{
        document.getElementById("alert3").style.display= "none";
       }

    // document.createElement('table')
    

}
function edit(a, b, c, d){
    document.getElementById("fname").value= a;
        document.getElementById("lname").value=b;
    document.getElementById("email").value=c;
document.getElementById("number").value=d;
    
}

