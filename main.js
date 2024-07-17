let iconShare = document.getElementById('share-icon');
let iconWrapper = document.getElementById('share-icon-wrapper');
let shareContainer = document.getElementById('share-container');

function hoverHandler() {
    console.log('Hover event triggered');
    shareContainer.classList.toggle('hide');
}

iconWrapper.addEventListener('mouseover', hoverHandler);
iconWrapper.addEventListener('mouseout', hoverHandler);