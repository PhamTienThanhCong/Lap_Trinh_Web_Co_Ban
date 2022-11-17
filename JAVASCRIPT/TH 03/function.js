const cats = document.getElementsByClassName('pick-cat');
const mainCat = document.getElementById('img-preview');

for (let i = 0; i < cats.length; i++) {
    cats[i].addEventListener('click', function () {
        let src = this.getAttribute('src');
        mainCat.setAttribute('src', src);
    });
}