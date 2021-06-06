var index = 0;
var amount = 0;//amount of images
var currTransl = []
var currTranslTwo = [];
var translationComplete = true;

var transitionCompleted = function () {
    translationComplete = true;
}
// Starting listeners setup

document.addEventListener("DOMContentLoaded", function (event) {
    amount = document.getElementsByClassName('img').length;
    secondRowAmount = document.getElementsByClassName('img-2').length;
    for (var i = 0; i < amount; i++) {
        currTransl[i] = -200;
        currTranslTwo[i] = -200;
        document.getElementsByClassName('img')[i].addEventListener("transitionend", transitionCompleted, true);
        document.getElementsByClassName('img')[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName('img')[i].addEventListener("oTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName('img')[i].addEventListener("MSTransitionEnd", transitionCompleted, true);
    }
    console.log("DOM fully loaded and parsed");
});

// Forward button - next image

function right() {
    if (translationComplete === true) {
        translationComplete = false;
        index--;
        if (index == -1) {
            index = amount - 1;
        }
        var outerIndex = (index) % amount;
        for (let i = 0; i < amount; i++) {
            var img = document.querySelectorAll(".img")[i];
            img.style.opacity = '1';
            img.style.transform = 'translate(' + (currTransl[i] + 200) + 'px)';
            currTransl[i] = currTransl[i] + 200;
        }
        var secondRowOuterIndex = (index) % secondRowAmount;
        for (let i = 0; i < secondRowAmount; i++) {
            var secondRowImg = document.querySelectorAll('.img-2')[i];
            secondRowImg.style.opacity = '1';
            secondRowImg.style.transform = 'translate(' + (currTranslTwo[i] + 200) + 'px)';
            currTranslTwo[i] = currTranslTwo[i] + 200;
        }

        var outerImg = document.querySelectorAll(".img")[outerIndex];
        outerImg.style.transform = 'translate(' + (currTransl[outerIndex] - 200 * (amount)) + 'px)';
        outerImg.style.opacity = '0.5';
        currTransl[outerIndex] = currTransl[outerIndex] - 200 * (amount);

        var secondRowOuterImg = document.querySelectorAll(".img-2")[secondRowOuterIndex];
        secondRowOuterImg.style.transform = 'translate(' + (currTranslTwo[secondRowOuterIndex] - 200 * (secondRowAmount)) + 'px)';
        secondRowOuterImg.style.opacity = '0.5';
        currTranslTwo[secondRowOuterIndex] = currTranslTwo[secondRowOuterIndex] - 200 * (secondRowAmount);
    }
}

// Backwards button/arrow

function left() {
    if (translationComplete === true) {
        translationComplete = false;
        index++;
        var outerIndex = (index - 1) % amount;
        for (var i = 0; i < amount; i++) {
            var img = document.querySelectorAll("img")[i];
            img.style.opacity = '1';
            img.style.transform = 'translate(' + (currTransl[i] - 200) + 'px)';
            currTransl[i] = currTransl[i] - 200;
        }

        var secondRowOuterIndex = (index - 1) % secondRowAmount;
        for (let i = 0; i < secondRowAmount; i++) {
            var secondRowImg = document.querySelectorAll('.img-2')[i];
            secondRowImg.style.opacity = '1';
            secondRowImg.style.transform = 'translate(' + (currTranslTwo[i] - 200) + 'px)';
            currTranslTwo[i] = currTranslTwo[i] - 200;
        }

        var outerImg = document.querySelectorAll("img")[outerIndex];
        outerImg.style.transform = 'translate(' + (currTransl[outerIndex] + 200 * (amount)) + 'px)';
        outerImg.style.opacity = '0.5';
        currTransl[outerIndex] = currTransl[outerIndex] + 200 * (amount);

        var secondRowOuterImg = document.querySelectorAll(".img-2")[secondRowOuterIndex];
        secondRowOuterImg.style.transform = 'translate(' + (currTranslTwo[secondRowOuterIndex] + 200 * (secondRowAmount)) + 'px)';
        secondRowOuterImg.style.opacity = '0.5';
        currTranslTwo[secondRowOuterIndex] = currTranslTwo[secondRowOuterIndex] + 200 * (secondRowAmount);
    }
}

// Show - hide overflow button

function hideOverflow() {
    
    let hideOverflow = document.getElementById('hide-overflow');
    let overflowEl = document.querySelector('.slider-container');

    if (overflowEl.classList.contains('slider-container-overflow')) {
    
        overflowEl.classList.remove('slider-container-overflow');
        hideOverflow.innerHTML = "Hide overflow";
    }
    else {
        overflowEl.classList.add('slider-container-overflow');
        hideOverflow.innerHTML = "Show overflow";  
    }
}
hideOverflow();





