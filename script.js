let btn=document.getElementById('btn');
let reset=document.getElementById('btnTwo');
let outputImg=document.getElementById('img');
let outputTxt=document.getElementById('txt');
function getInputValue(){
    let inputVal=document.getElementById('input').value;
    let food=inputVal;
    if (food==='noodle' || food==='Noodle'){
    outputTxt.textContent='noodle';
    outputImg.innerHTML=`<img src="pic/noodle.jpg">`
    console.log('noodle')
    }
    else if(food==='cake' || food==='Cake'){
    outputTxt.textContent='cake';
    outputImg.innerHTML=`<img src="pic/cake.jpg">`
    }
    else if(food==='candy' || food==='Candy'){
    outputTxt.textContent='candy';
    outputImg.innerHTML=`<img src="pic/candy.jpg">`
    }
    else if(food==='chicken' || food==='Chicken'){
    outputTxt.textContent='chicken';
    outputImg.innerHTML=`<img src="pic/chicken.jpg">`
    }
    else if(food==='coconut' || food==='Coconut'){
    outputTxt.textContent='blarh';
    outputImg.innerHTML=`<img src="pic/coconut.jpg">`
    }
    else if(food==='cookie' || food==='Cookie'){
    outputTxt.textContent='cookie';
    outputImg.innerHTML=`<img src="pic/cookie.jpg">`
    }
    else if(food==='fries' || food==='Fries'){
    outputTxt.textContent='fries';
    outputImg.innerHTML=`<img src="pic/fries.jpg">`
    }
    else if(food==='hotpot' || food==='Hotpot'){
    outputTxt.textContent='hotpot';
    outputImg.innerHTML=`<img src="pic/hotpot.jpg">`
    }
    else if(food==='ice cream' || food==='Ice cream'){
    outputTxt.textContent='Ice Cream';
     outputImg.innerHTML=`<img src="pic/icecream.jpg">`

    }
    else if(food==='mcdonalds' || food==='Mcdonalds'){
    outputTxt.textContent='mcdonalds';
    outputImg.innerHTML=`<img src="pic/mcdonalds.jpg">`
    }
    else if(food==='pear' || food==='Pear'){
    outputTxt.textContent='pear';
    outputImg.innerHTML=`<img src="pic/pear.jpg">`
    }
    else if(food==='ramen' || food==='Ramen'){
    outputTxt.textContent='ramen';
    outputImg.innerHTML=`<img src="pic/ramen.jpg">`
    }
    else if(food==='sushi' || food==='Sushi'){
    outputTxt.textContent='Sushi';
    outputImg.innerHTML=`<img src="pic/sushi.jpg">`
    }
    else if(food==='cheesecake' || food==='Cheesecake'){
        outputTxt.textContent='cheesecake';
        outputImg.innerHTML=`<img src="pic/cheesecake.jpg">`
    }
    else if(food==='strawberry' || food==='Strawberry'){
        outputTxt.textContent='strawberry';
        outputImg.innerHTML=`<img src="pic/strawberry.jpg">`
    }
    else if(food==='soba' || food==='Soba'){
        outputTxt.textContent='soba';
        outputImg.innerHTML=`<img src="pic/soba.jpg">`
    }
    else{
        outputTxt.textContent='Could not find food, try searching something else.';
    } 
}
function clear(){
    document.getElementById('input').value="";
}
btn.addEventListener('click',getInputValue);
reset.addEventListener('click',clear);