const handleRegister = (e)=>{
    e.preventDefault();
    let obj ={};
    let form_input=document.querySelectorAll('.form-div > input');
    form_input.forEach((input)=>{
        // console.log(input.name,input.value);
        const name = input.name;
        const value = input.value;
        obj[name] = value;
    });
    let check = true;
    for(let key in obj){
       if(!obj[key]){
         check = false;
       }
    }
    if(!check){
        console.log("There is Empty input");
        alert('Fill all required Fields');
        return;
    }
    if(obj.password != obj.confirmPassword){
        alert('Password must match');
        return;
    }
    let body = {
        email:obj.email,
        username:obj.username,
        password:obj.password,
        name:{
            firstname:obj.firstname,
            lastname:obj.lastname
        },
        address:{
            city:obj.city,
            street:obj.street,
            number:obj.number,
            zipcode:obj.zipcode,
            
        },
        phone:obj.phone

    }

    fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(body)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.id){
            alert("User Registered Successfully");
            form_input.forEach((input)=>{
                input.value = '';                
            });
        }
        else{
            alert("User Not Registered \nTry Again Later");
        }
    })
}