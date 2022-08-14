const verbs = [
  "bring",
  "build",
  "burn",
  "beat",
  "bite",
  "become",
  "bear",
  "blow",
  "catch",
  "come",
  "choose",
  "do",
  "dig",
  "dug",
  "drink",
  "drive",
  "Eat",
  "fight",
  "fly",
  "forget",
  "feel",
  "feed",
  "give",
  "go",
  "grow",
  "get",
  "hold",
  "hide",
  "have",
  "keep",
  "know",
  "lay",
  "learn",
  "lose",
  "lend",
  "meet",
  "mean",
  "make",
  "pay",
  "ring",
  "run",
  "rise",
  "ride",
  "say",
  "send",
  "sell",
  "spend",
  "sleep",
  "sit",
  "sing",
  "sink",
  "speak",
  "stand",
  "stick",
  "strike",
  "sweep",
  "swim",
  "see",
  "shake",
  "take",
  "throw",
  "tear",
  "teach",
  "tell",
  "think",
  "wear",
  "win",
  "write",
  "weep",
];
const regular_verbs = [
  
];
function verbDisplay() {
  document.getElementById("regular-dis").innerHTML = "";
  document.getElementById("unchanging-dis").innerHTML = "";
  document.getElementById("verb-dis").innerHTML =
    verbs[Math.floor(Math.random() * verbs.length)];
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
function exit_reset() {
  window.location.reload();
}
