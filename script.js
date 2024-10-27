function diceroller(){
    const min = 1;
    const max = 6;
    const randomno = Math.round(Math.random() * (max-min))+min;
    const diceImg = document.getElementById('start-img');

    if(randomno==1){
        diceImg.src='./../images/dice (1).png';
    }
    else if(randomno==2){
        diceImg.src='./../images/dice (2).png';
    }
    else if(randomno==3){
        diceImg.src='./../images/dice (3).png';
    }
    else if(randomno==4){
        diceImg.src='./../images/dice (4).png';
    }
    else if(randomno==5){
        diceImg.src='./../images/dice (5).png';
    }
    else if(randomno==6){
        diceImg.src='./../images/dice (6).png';
    }

   setTimeout(resetImg,3000);

}

function resetImg(){
   const diceImg = document.getElementById('start-img');
   diceImg.src='./../images/reset-img.png';
}