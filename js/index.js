function getAllCategories(){
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                let result = modifyData(data);
                let output = document.querySelector('.aside');
                let content = '';
                result.forEach(eResult =>{
                    content +=`
                    <li><a>
                        <i class='${eResult.icon}'></i>
                        <span>${eResult.name}</span>
                    </li></a>
                    `
                })
                output.innerHTML = content;
            })
}
function modifyData(data){
    let icons = [
        'bi-music-player',
        'bi-bag',
        'bi-node-plus',
        'bi-node-minus',
    ]
    let result =[]
        result = data.map((eData, index)=>{
            return{name:eData,icon:icons[index]};
        })
    return result;
}

function annimatedBanner(){
    const imglist = [
        'img 1.png','img 2.png','img 3.png','img 4.jpg','img 5.jpg',   
    ]
    let img = document.querySelector('.banner-img');
    const imglength = imglist.length;
    let count = 0; let interval=10000;
    let start = setInterval(function(){
        count++;
        if(count > imglength-1) count = 0;
        img.setAttribute('src',`/images/${imglist[count]}`);

    }, interval);

}
function FetchAllProduct(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                loadAllProduct(data);
            })
}
function loadAllProduct(data){
    let output = document.querySelector('.product-div');
    let content = '';
    if(data.length >0){
        data.forEach(function(product){
            content+=`
            <a>
            <div><img src="${product.image}"/></div>
            <div>
                <div>${product.title}</div>
                <div>${product.price}</div>
                <div>Rating: ${product.rating.rate}</div>
            </div>
            </a>
            `
            
        })
    }
    output.innerHTML= content;
}
window.onload = ()=>{
    getAllCategories();
    annimatedBanner();
    FetchAllProduct();
   
}