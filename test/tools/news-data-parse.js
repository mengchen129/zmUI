(function() {
    let newsList = [];

    let list = document.querySelectorAll('.mod-b');
    [...list].forEach(item => {
        let image = item.querySelector('img').src;
        let title = item.querySelector('h2').innerText;
        let sub = item.querySelector('.mob-sub').innerText;
        let news = {image, title, sub};
        newsList.push(news);
    });

    console.log(JSON.stringify(newsList, null, 4));
})();