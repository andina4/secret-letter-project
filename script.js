const message = `Mas, i just want you to know, I still think about you sometimes.\n\nIm not over you. Not even close. I still wait for something from you. A message, a sign, anything. Still hoping you'd comeback.\n\nKalau kamu tahu seberapa sering aku nahan diri buat nggak ngontak kamu, mungkin kamu bakal sadar aku ga pernah bener - bener baik-baik aja semenjak kamu pergi\n\nI just wonder… if we had met at a different point in life, would the ending have been different?\n\njust so u know mine never stopped choosing you.\n\nNot ever once.`;

function showLetter() {
  document.querySelector(".intro-container").style.display = "none";
  document.querySelector(".intro-container").style.display = "flex";
  document.getElementById("introText").style.opacity = 0;

  document.querySelector(".back-btn").style.display = "flex"; 

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
function goBack() {
  document.getElementById("letterBox").style.display = "none";
  document.querySelector(".back-btn").style.display = "none"; // sembunyikan tombol

  document.querySelector(".intro-container").style.display = "flex";
  document.getElementById("introText").style.opacity = 1;

  document.getElementById("typedText").innerHTML = "";
}

