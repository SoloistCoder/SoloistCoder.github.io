(function () {

var names = ["Yaakov", "Jasmeet", "Jack", "Jai", "Shubham", "Muskan", "Jass", "Anuj", "Gurbaz", "John"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();