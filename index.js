
const randomIndex = () => {
    return Math.floor(Math.random()*5);
}

function adGenerator(){

    list = ["Apple", "Samsung", "Motorola", "Xiomi", "Oneplus"]
   
    var homepage = document.getElementById("homepagediv");
    var welcomepage = homepage.innerHTML;

    var i = 0;

    setInterval(()=>{
        if(i==0){
            homepage.innerHTML = welcomepage;
            i=1;
        }
        else{
            homepage.innerHTML = `<div class= 'ad'> <h1> Ad for ${list[randomIndex()]}</h1>
            <div> These are the details of the advertisement: <br>
            -Have good display <br>
            -Have Good Battery Life <br>
            -Have good resale value <br>
            -Have good specs <br>
            </div>
            </div>`
            i = 0;
        }
    },3000)
}

adGenerator();