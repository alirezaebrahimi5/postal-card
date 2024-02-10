const gif1 = document.querySelector('#gif1');
const gif2 = document.querySelector('#gif2');
const image = document.getElementById("myImage");
const player = document.getElementById("app-cover");
const playButton = document.getElementById("play-pause-button");
const changeButton = document.querySelector('#change');
const card = document.getElementById('card');
const card2 = document.getElementById('card2');
const cardInner = document.getElementById('cardInner');
const cardInner2 = document.getElementById('cardInner2');

changeButton.onclick = function() {
    if (gif1.style.display === 'block') {
      image.style.display = 'block';
      playButton.click();

      window.timerID =  setInterval(function() {
        var aOpaque = image.style.opacity;
        aOpaque = aOpaque-0.1;
        image.style.opacity = aOpaque;
        if(image.style.opacity<=-1.1){
          clearInterval(window.timerID);
          image.style.display = "none";
        }

        },350);
        }
      gif1.style.display = 'none';
      document.getElementById('front').style.display = 'block';
      document.getElementById('back').style.display = 'block';
      document.getElementById('front2').style.display = 'block';
      document.getElementById('back2').style.display = 'block';
      gif2.style.display = 'block';
      card.style.display = 'block';
      player.style.display = "block";
}

card.addEventListener('click', function() {
  cardInner.classList.toggle('zoom');
  if (cardInner.style.transform === 'rotateY(180deg) scale(2)') {
    cardInner.style.transform = 'rotate(0deg) scale(1)';
    cardInner.style.zIndex = '0';
    cardInner.style.transition = '';
    card.style.animation = 'float 20s infinite ease-in-out';
    card.style.zIndex = 0;
  } else {
    cardInner.style.transform = 'rotateY(180deg) scale(2)';
    cardInner.style.zIndex = '1';
    cardInner.style.transition = 'transform 0.5s';
    card.style.animation = 'none';
    card.style.zIndex = 100;
  }
});

card2.addEventListener('click', function() {
  cardInner2.classList.toggle('zoom');
  if (cardInner2.style.transform === 'rotateY(180deg) scale(2)') {
    cardInner2.style.transform = 'rotate(0deg) scale(1)';
    cardInner2.style.zIndex = '0';
    cardInner2.style.transition = '';
    card2.style.animation = 'float2 20s infinite ease-in-out';
    card2.style.zIndex = 0;
  } else {
    cardInner2.style.transform = 'rotateY(180deg) scale(2)';
    cardInner2.style.zIndex = '1';
    cardInner2.style.transition = 'transform 0.5s';
    card2.style.animation = 'none';
    card2.style.zIndex = 100;
  }
});