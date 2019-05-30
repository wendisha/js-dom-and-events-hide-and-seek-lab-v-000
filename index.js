function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    let increaser = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < increaser.length; i++) {
        increaser[i].innerHTML = parseInt(increaser[i].innerHTML) + n
      }
}

function deepestChild() {
    let grabber = document.querySelectorAll('#grand-node div')
    return grabber[grabber.length-1];
}
