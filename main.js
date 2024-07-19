let iconShare = document.getElementById('share-icon');
let iconWrapper = document.getElementById('share-icon-wrapper');
let shareContainer = document.getElementById('share-container');

iconShare.addEventListener('mouseenter', () => {
    shareContainer.classList.remove('hide');
    shareContainer.classList.add('show');
});
iconShare.addEventListener('mouseout', () => {
    shareContainer.classList.remove('show');
    shareContainer.classList.add('hide');
});
