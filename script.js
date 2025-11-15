const message = `Mas, i just want you to know, I still think about you sometimes.\n\nIm not over you. Not even close. I still wait for something from you. A message, a sign, anything. Still hoping you'd comeback.\n\nI just wonder… if we had met at a different point in life, would the ending have been different?\n\nIf you ever think of me in the quiet hours, just know mine never stopped choosing you,mas.\n\nNot ever once.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 1000);
}