const images = [
    './images/bigredones.jpeg',
    './images/blue20sided.jpeg',
    './images/bluedots.jpeg',
    './images/manydice.jpeg',
    './images/mediumredones.jpeg',
    './images/oneblackdie.jpeg',
    './images/plainongreen.jpeg',
    './images/redwithhands.jpeg',
  ];
  
  const randomNumber = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomNumber];
  
  document.querySelector('.hero').style.backgroundImage = `url(${selectedImage})`;
  