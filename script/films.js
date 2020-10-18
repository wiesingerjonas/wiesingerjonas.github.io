window.addEventListener('load', () => {

    let imageContainer = document.getElementById('imageContainer');
    let img;

    let films = '{"films":[' +
        '{"title":"OK Center for Contemporary Art", "subtitle":"null", "year":"2015", ' +
        '"amountImg":"2", "iframeLink":"null", ' +
        '"secondLink":"null", "text":"Im Rahmen des Drehs eines Fernsehbeitrags von BildungsTV, ' +
        'durfte ich das Kamerateam einen Tag lang begleiten und durfte, da ich damals schon Kameramann werden wollte, ' +
        'in diesen Beruf hineinschnuppern."},' +

        '{"title":"En Croix", "subtitle":"null", "year":"2016", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/watch?v=X2OR0cfNU-E", ' +
        '"secondLink":"https://www.youtube.com/watch?v=VznsLLXwVf0", "text":"Im Rahmen des Sommerprojekts, ' +
        'einer jährlich stattfindenden Reihe von Workshops Rund ums Thema Film, ' +
        'welche vom Medien Kultur Haus Wels initiiert wurden, habe ich das erste Mal 2016 teilgenommen.' +
        'In einem 15-köpfigen Team haben wir in einer Woche einen Kurzfilm mit dem Titel En Croix erstellt. ' +
        'In diesem Projekt haben Profis mit Amateuren oder Anfänger ihre Erfahrungen austauschen, ' +
        'und ihr wissen weitergeben können. Ich habe bei diesem Filmdreh zum ersten Mal erfahren ' +
        'wie es bei einem Kurzfilmdreh abläuft."},' +

        '{"title":"Best Friend Forever Or Whatever", "subtitle":"null", "year":"2017", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/watch?v=V_XP24q9Wp4", ' +
        '"secondLink":"null", "text":"Auch im Jahr 2017 habe ich am Sommerprojekt des Medien Kultur Hauses teilgenommen. ' +
        'Im Laufe dieses Projekts entstand der Kurzfilm Best Friend Forever Or Whatever."},' +

        '{"title":"Wels, was wird?", "subtitle":"null", "year":"2018", "amountImg":"3", ' +
        '"iframeLink":"https://www.youtube.com/watch?v=-uIngfORXfI", ' +
        '"secondLink":"null", "text":"Wels, was wird? ist eine Dokumentation über die Zukunft der Stadt Wels. ' +
        'Diese Dokumentation ist mit einem kleinen Team in Zusammenarbeit mit dem MedienKulturhaus Wels entstanden."},' +

        '{"title":"Am eigenen Leibe", "subtitle":"Die Experimente des Dr. Zasch", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/watch?v=0Vi-V9bhUTI", ' +
        '"secondLink":"null", "text":"null"}]}';

    let filmsJson = JSON.parse(films);

    for (let i = 0; i < filmsJson.films.length; i++) {

        img = document.createElement('img');

        let imgSrc =  filmsJson.films[i].title
            .replace(/\s/g, "")
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, "");

        img.src = './media/films/' + imgSrc + '.png';
        imageContainer.appendChild(img);

    }
});
