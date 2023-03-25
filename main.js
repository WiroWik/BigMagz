var coin_count = 0;

function MouseSound() {
    var audio = new Audio("mario_coin.mp3");
    var audio_up = new Audio("1up.mp3");
    coin_count += 1;
    document.getElementById("coin_count").innerHTML = coin_count + "🪙"
    if (coin_count == 100) {
        coin_count = 0;
        audio_up.play()
    } else {
        audio.play();
    }
}

window.addEventListener('click', MouseSound , false);





