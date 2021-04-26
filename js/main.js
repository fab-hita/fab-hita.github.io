function moveRight(){
    var round = document.getElementById('round').getAttribute('data-round');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');
    var card4 = document.getElementById('card4');
    var card5 = document.getElementById('card5');

    if(round === 'round1'){
        card1.style.transform = "translate(1120px)";
        card2.style.transform = "translate(-224px)";
        card4.style.transform = "translate(-672px)";
        card5.style.transform = "translate(-224px)";
        document.getElementById('round').setAttribute('data-round', 'round2');
    } else if(round === 'round2'){
        card1.style.transform = "translate(896px)";
        card2.style.transform = "translate(896px)";
        card4.style.transform = "translate(-896px)";
        card5.style.transform = "translate(-896px)";
        document.getElementById('round').setAttribute('data-round', 'round3');
        
    } else if(round === 'round3'){
        card1.style.transform = "translate(224px)";
        card2.style.transform = "translate(672px)";
        card4.style.transform = "translate(224px)";
        card5.style.transform = "translate(-1120px)";
        document.getElementById('round').setAttribute('data-round', 'round4');
    } else if(round === 'round4'){
        card1.style.transform = "translate(0px)";
        card2.style.transform = "translate(0px)";
        card4.style.transform = "translate(0px)";
        card5.style.transform = "translate(0px)";
        document.getElementById('round').setAttribute('data-round', 'round1');
    }
}

function moveLeft(){
    var round = document.getElementById('round').getAttribute('data-round');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');
    var card4 = document.getElementById('card4');
    var card5 = document.getElementById('card5');

    if(round === 'round1'){
        card1.style.transform = "translate(224px)";
        card2.style.transform = "translate(672px)";
        card4.style.transform = "translate(224px)";
        card5.style.transform = "translate(-1120px)";
        document.getElementById('round').setAttribute('data-round', 'round2');
    } else if(round === 'round2'){
        card1.style.transform = "translate(896px)";
        card2.style.transform = "translate(896px)";
        card4.style.transform = "translate(-896px)";
        card5.style.transform = "translate(-896px)";
        document.getElementById('round').setAttribute('data-round', 'round3');
        
    } else if(round === 'round3'){
        card1.style.transform = "translate(1120px)";
        card2.style.transform = "translate(-224px)";
        card4.style.transform = "translate(-672px)";
        card5.style.transform = "translate(-224px)";
        document.getElementById('round').setAttribute('data-round', 'round4');
    } else if(round === 'round4'){
        card1.style.transform = "translate(0px)";
        card2.style.transform = "translate(0px)";
        card4.style.transform = "translate(0px)";
        card5.style.transform = "translate(0px)";
        document.getElementById('round').setAttribute('data-round', 'round1');
    }
}
