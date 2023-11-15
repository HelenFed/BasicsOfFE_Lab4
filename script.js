const element3 = document.getElementById('element3');
const element4 = document.querySelector('body :nth-child(4)');

var toggleElement3 = false;
var toggleElement4 = true;
var newImage;


element3.addEventListener('click', function onClick(event) {
    toggleElement3 = !toggleElement3;
    updateStyle(element3, toggleElement3);
});

element4.addEventListener('click', function onClick(event) {
    toggleElement4 = !toggleElement4;
    updateStyle(element4, toggleElement4);
});

function updateStyle(element, isToggled) {
    isToggled ? (element.classList.remove('colorScheme2'),
                 element.classList.add('colorScheme1')) : 
                (element.classList.remove('colorScheme1'),
                 element.classList.add('colorScheme2'))
}


function addImage() {
    if (!newImage) {
        newImage = document.createElement('img');
        newImage.src = "https://discover-ukraine.info/uploads/i/i/4ffd2c1051c059.81722594.805.jpg";
        newImage.alt = 'Тут мало бути нове фото Львова';
        var imageContainer = document.getElementById('images');
        imageContainer.appendChild(newImage);
    }
}

function increaseSize() {
    if (newImage) {
        var currentWidth = newImage.width;
        var newWidth = currentWidth + 10;
        newImage.style.width = newWidth + 'px';
    }
}

function decreaseSize() {
    if (newImage) {
        var currentWidth = newImage.width;
        var newWidth = currentWidth - 10;
        newImage.style.width = newWidth + 'px';
    }
}

function deleteImage() {
    if (newImage) {
        newImage.parentNode.removeChild(newImage);
        newImage = null;
    }
}