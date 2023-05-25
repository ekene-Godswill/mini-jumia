const handleLogin = (e) =>{
    e.preventDefault();
    const form_input = document.querySelectorAll('.log-div input');
    let obj = {};
    form_input.forEach((input)=>{
        const name = input.name;
        const value = input.value;
        obj[name] = value;
        console.log(name,value);
    })
    let check = true;
    for(let key in obj){
        if(!obj[key]){
            check = false;
        }
    }
    if(!check){
        alert('Fill all Required Field');
        return;
    }
    const body={
        username: 'mor_2314',
        password: '83r5^_'
    }
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body)
    })
    .then(res=>{
        console.log(res);
        return res.json();
    })
    .then(data=>{
        console.log(data);
        if(data.token){
            alert('User login successfully');
            location.href="/index.html";
        }
        localStorage.setItem('token',data.token);
    })

}