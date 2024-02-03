
document.getElementById('no-button').addEventListener('click', function() {
    var yesButton = document.getElementById('yes-button');
    var yesButtonHeight = window.getComputedStyle(yesButton).height;
    var yesButtonWidth = window.getComputedStyle(yesButton).width;
        var currentHeight = parseFloat(yesButtonHeight);
    var currentWidth = parseFloat(yesButtonWidth);
    var increment = 50; 
    // Calculate the new height and width
    var newHeight = currentHeight + increment + 'px';
    var newWidth = currentWidth + increment + 'px';
    yesButton.style.height = newHeight;
    yesButton.style.width = newWidth;

    var currentFontSize = window.getComputedStyle(yesButton).fontSize;
    var currentSize = parseFloat(currentFontSize);
    var increment = 2;
    // Calculate the new font size
    var newSize = currentSize + increment + 'px';
    yesButton.style.fontSize = newSize;
});


var no_button = document.getElementById("no-button");
var no_question = [
    'lo karlo bat?',
    'Ham to good morning karne aye the',
];
var questionIndex = 0;

function changeText() {
    if (questionIndex < no_question.length) {
        no_button.textContent = no_question[questionIndex];
        questionIndex++;
    } else {
        no_button.textContent = "No";
        questionIndex = 0;
    }
}

