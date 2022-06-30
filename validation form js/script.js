
function tsubmit(){

    let firstName = document.getElementById("fname").value;
    
    if(firstName == "" ){
    
        document.getElementById("alert").style.display= 'block';
        return false;

    }

    let lastName = document.getElementById("lName").value;
    if(lastName == "" ){
        document.getElementById("alert1").style.display= 'block';
        return false;
        
        }
        else{
            document.getElementById('alert1').style.display ='none';
        }


    let email = document.getElementById("email").value;
    if(email ==""){
        document.getElementById("alert2").style.display= 'block';
        return false;
    }
    let mobileNumber = document.getElementById("mobileNumber").value;
    if(mobileNumber =="") {
        document.getElementById("alert3").style.display= 'block';
        return false;
    }
}