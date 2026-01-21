const frog = document.getElementById("frog");

const messages = [
  "ribbit 🐸",
  "hola",
  "me gustas",
  "quédate un rato",
  "gracias por existir"
];

frog.addEventListener("click", () => {
  // salto
  frog.style.transform = "translateY(-40px) scale(1.05)";
  
  setTimeout(() => {
    frog.style.transform = "";
  }, 300);

  // mensaje sutil
  const msg = messages[Math.floor(Math.random() * messages.length)];
  console.log(msg);
});

// detalle dev
console.log("si lees esto: espero que estés sonriendo 🌙🐸");
