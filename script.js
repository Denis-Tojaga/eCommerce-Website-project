  var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";
   document.getElementById("menu-icon").onclick=()=>{
        if(MenuItems.style.maxHeight == "0px"){
            MenuItems.style.maxHeight = "200px";
        }else{
            MenuItems.style.maxHeight = "0px";
        }
    }





var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = ()=>{
    productImg.src = smallImg[0].src;
}

smallImg[1].onclick = ()=>{
    productImg.src = smallImg[1].src;
}

smallImg[2].onclick = ()=>{
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = ()=>{
    productImg.src = smallImg[3].src;
}





document.getElementById("cartButton").onclick = function(){
    alert("Your product has been successfully added to your cart");
}



