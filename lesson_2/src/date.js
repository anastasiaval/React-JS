let now = new Date();

document.querySelector('.date').addEventListener('click', () => getDate());

function getDate() {
    document.querySelector('.date').innerHTML = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
}