let lettersContainer = document.getElementById("lettersContainer");
let harakatContainer = document.getElementById("harakatContainer");
let harakat = [
  ["فتحة", "َ"],
  ["كسرة", "ِ"],
  ["ضمة", "ُ"],
  ["تنوين فتح", "ً"],
  ["تنوين كسر", "ٍ"],
  ["تنوين ضم", "ٌ"],
  ["شدة", "ّ"],
  ["سكون", "ْ"],
  ["مسافة", " "],
];
let letters = [
  "ا",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "ي",
  "ء",
  "أ",
  "إ",
  "ؤ",
  "ئ",
  "ة",
];

for (let i in letters) {
  lettersContainer.innerHTML += `<div>${letters[i]}</div>`;
}
for (let i in harakat) {
  harakatContainer.innerHTML += `
                <span><p>${harakat[i][0]}:</p></span>
                <div>${harakat[i][1]}</div>
    `;
}

$(function () {
  $(".boxesContainer>div").dragdrop({
    makeClone: true,
    sourceClass: "pendingDrop",
    dropClass: "highlight",
    container: $(".content"),
    didDrop: function ($src, $dst) {
      if ($dst.attr("id") != "destination") $dst = $dst.parents("#destination");
      var currentText = $dst.text();
      currentText += $src.text();
      $dst.text(currentText);
    },
  });
});
