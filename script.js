let indeksSuara = 0;

function ledakkan() {
  const pesan = document.getElementById("pesan");

  // Pesan kocak
  const pesanLucu = [
    "Ngapain diklik beneran 😅",
    "Astaga kamu serius? 😂",
    "Waduh kamu iseng ya 🤪",
    "Nyesel kan? 😈",
    "Yuk ngopi dulu ☕"
  ];
  
  // Efek suara kentut random
  const efekSuara = [
    "assets/kentut.mp3",
    "assets/hallo-gaes.mp3",
    "assets/ah-capek-ah-komeng.mp3"
  ];

  const suara = new Audio(efekSuara[indeksSuara]);
  suara.play();
  indeksSuara = (indeksSuara + 1) % efekSuara.length;
 

  // Efek pesan
  const randomPesan = pesanLucu[Math.floor(Math.random() * pesanLucu.length)];
  pesan.innerText = randomPesan;

  // Bikin emoji terbang
  for (let i = 0; i < 50; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = ["😂", "💩", "🔥", "😵", "🤡", "😝", "😭", "🤪", "🙊", "🐒", "🫢"][Math.floor(Math.random() * 11)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 2000);
}
}
