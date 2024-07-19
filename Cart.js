
var totalPrice=0;
var totalValue=document.getElementById("totalValue");
var total=totalValue.innerHTML;

$(".newbtn").click(function(){
    console.log($(this).parent())
    const price=$(this).parent().parent()[0].childNodes[0].nextSibling.outerText;

    const name=$(this).parent().parent().parent()[0].childNodes[2].nextSibling.outerText;
    
    totalPrice+=(Number(price.substring(4)));

    
    const newDiv = document.createElement("div");
    newDiv.className="mainDiv";

    const newCont=document.createElement("h4");
    newCont.innerHTML=name;

 
    const displayPrice=document.createElement("h5");
    displayPrice.innerHTML=price;

    const removebtn=document.createElement("button");
    removebtn.innerHTML="Remove";
    removebtn.classList.add("btn");
    removebtn.classList.add("remove1");

    const line=document.createElement('br');    

    newDiv.append(newCont,displayPrice,removebtn);
    $(".addtocart").append(newDiv,line);

    // Total Order value 
    total=totalPrice;
    totalValue.innerHTML=totalValue.innerHTML.replace(totalValue.innerHTML.substring(19),totalPrice);

  
});


$(document).on("click", ".remove1", function(){
    const removePrice=$(this).parent()[0].childNodes[1].innerHTML;
    totalPrice-=(Number(removePrice.substring(4)));
    // console.log($(this).parent().parent());
    $(this).parent()[0].nextSibling.remove();
    $(this).parent().remove();

    // totall order value
    total=totalPrice;

    totalValue.innerHTML=totalValue.innerHTML.replace(totalValue.innerHTML.substring(19),totalPrice);
    
});







