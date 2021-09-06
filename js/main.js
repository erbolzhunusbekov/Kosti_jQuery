$(document).ready(function () {

    let img1 = document.querySelector('.player1');
    let img2 = document.querySelector('.player2');


    $('button').click(function(){

        let r1 = Math.round( Math.random() * 5 ) + 1;
        let r2 = Math.round( Math.random() * 5 ) + 1;

        $('.player1').attr('src', `img/dice${r1}.png`);
        $('.player2').attr('src', `img/dice${r2}.png`);


        if (r1 > r2){
            $('h1').text('The 1 Player wins!')
        } else if (r1 < r2){
            $('h1').text('The 2 Player wins!')
        } else {
            $('h1').text('Draw!')
        }
    })


    $('button').click(function(){
        let p1 = Math.round(Math.random()*5)+1;
        let p2 = Math.round(Math.random()*5)+1;

    })


    $('.player1').attr('src', `img/dice${r1}.png`);
    $('.player2').attr('src', `img/dice${r2}.png`);

});