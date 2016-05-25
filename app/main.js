var w = 250, //width
    h = 250, //height
    doc = document,
    myChallenge = doc.getElementById('myChallenge'),
    minCharCode = 65,
    range = 10,
    toFind;

function getRandm(n, m) {
    return ~~(Math.random() * (m - n + 1)) + n;
}

function generateButtons(minCharCode, range) {
  var min = minCharCode,
      max = min + range,
      body = doc.getElementById('myBody');
  for (var i = min; i < max; i++) {
      var node = doc.createElement('BUTTON'),
          text = doc.createTextNode(String.fromCharCode(i));
      node.appendChild(text);
      body.appendChild(node);
  }
}

function placeBtns() {
  var btns = doc.getElementsByTagName('button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].style.left = getRandm(0, w) + 'px';
    btns[i].style.top = getRandm(0, h) + 'px';
    btns[i].addEventListener('click', function(event) {
      if (event.target.innerText === toFind) {
        placeBtns();
        newChallenge();
      }
    });
  }
}

function newChallenge() {
  toFind = String.fromCharCode(getRandm(minCharCode, minCharCode + range - 1));
  myChallenge.innerText = toFind;
}

generateButtons(minCharCode, range);
placeBtns();
newChallenge();
