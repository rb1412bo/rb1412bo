const chat = [
  { user: "👤 Du", text: "Hey Bot, wer bist du?" },
  { user: "🤖 Bot", text: "Ich bin rb1412bo’s GitHub Assistant 😎" },
  { user: "👤 Du", text: "Zeig mir den Snake-Score!" },
  { user: "🤖 Bot", text: "🐍 Snake-Level: 9000!" }
];

let i = 0;
function showChat() {
  if (i < chat.length) {
    const line = document.createElement("div");
    line.innerText = `${chat[i].user}: ${chat[i].text}`;
    document.getElementById("terminal").appendChild(line);
    i++;
    setTimeout(showChat, 1500);
  }
}

window.onload = showChat;
