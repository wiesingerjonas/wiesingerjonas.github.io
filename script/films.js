window.addEventListener('load', () => {

    let imageContainer = document.getElementById('imageContainer');
    let filmDetail = document.getElementById('filmDetail');
    let filmsDiv = document.getElementById('films');

    let films = '{"films":[' +
        '{"title":"OK Center for Contemporary Art", "subtitle":"null", "year":"2015", ' +
        '"amountImg":"2", "iframeLink":"null", ' +
        '"secondLink":"null", "text":"Im Rahmen des Drehs eines Fernsehbeitrags von BildungsTV, ' +
        'durfte ich das Kamerateam einen Tag lang begleiten und durfte, da ich damals schon Kameramann werden wollte, ' +
        'in diesen Beruf hineinschnuppern."},' +

        '{"title":"En Croix", "subtitle":"null", "year":"2016", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/X2OR0cfNU-E", ' +
        '"secondLink":"Making of;https://www.youtube.com/watch?v=VznsLLXwVf0", "text":"Im Rahmen des Sommerprojekts, ' +
        'einer jährlich stattfindenden Reihe von Workshops Rund ums Thema Film, ' +
        'welche vom Medien Kultur Haus Wels initiiert wurden, habe ich das erste Mal 2016 teilgenommen.' +
        'In einem 15-köpfigen Team haben wir in einer Woche einen Kurzfilm mit dem Titel En Croix erstellt. ' +
        'In diesem Projekt haben Profis mit Amateuren oder Anfänger ihre Erfahrungen austauschen, ' +
        'und ihr wissen weitergeben können. Ich habe bei diesem Filmdreh zum ersten Mal erfahren ' +
        'wie es bei einem Kurzfilmdreh abläuft."},' +

        '{"title":"Best Friend Forever Or Whatever", "subtitle":"null", "year":"2017", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/V_XP24q9Wp4", ' +
        '"secondLink":"null", "text":"Auch im Jahr 2017 habe ich am Sommerprojekt des Medien Kultur Hauses teilgenommen. ' +
        'Im Laufe dieses Projekts entstand der Kurzfilm Best Friend Forever Or Whatever."},' +

        '{"title":"Wels, was wird?", "subtitle":"null", "year":"2018", "amountImg":"3", ' +
        '"iframeLink":"https://www.youtube.com/embed/-uIngfORXfI", ' +
        '"secondLink":"null", "text":"Wels, was wird? ist eine Dokumentation über die Zukunft der Stadt Wels. ' +
        'Diese Dokumentation ist mit einem kleinen Team in Zusammenarbeit mit dem MedienKulturhaus Wels entstanden."},' +

        '{"title":"48 Jahre später", "subtitle":"null", "year":"2018", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/LTw1zWqgQFY", ' +
        '"secondLink":"Making of;https://www.youtube.com/watch?v=g_lMDYkMFGk", "text":"null"},' +

        '{"title":"Press Pause", "subtitle":"null", "year":"2019", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/XXHj03gttl4", ' +
        '"secondLink":"null", "text":"null"},' +

        '{"title":"Kleiner Horrorladen", "subtitle":"Musicalwaves Wels", "year":"2019", "amountImg":"1", ' +
        '"iframeLink":"https://www.youtube.com/embed/yY1kfpJRLaw", ' +
        '"secondLink":"Behind the Scenes;https://www.youtube.com/watch?v=DvkAO1lEfFQ", ' +
        '"text":"Im September wurde ich von den Musicalwaves Wels kontaktiert, ' +
        'ob ich ihre Inszenierung vom bekannten Musical Der kleine Horrorladen aufnehmen könnte. ' +
        'Ich habe ihnen neben den 2 Aufnahmen des gesamten Stücks auch ein Making of und einen Trailer gemacht."}]}';

    let filmsJson = JSON.parse(films);

    for (let i = 0; i < filmsJson.films.length; i++) {

        let img = document.createElement('img');

        let imgSrc =  filmsJson.films[i].title
            .replace(/\s/g, "")
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, "");

        img.src = './media/films/' + imgSrc + '.png';
        imageContainer.appendChild(img);

        img.addEventListener('click', () => {
            deleteChildren(filmDetail);

            filmDetail.style.display = 'block';
            filmsDiv.style.display = 'none';

            //region poster
            let poster = document.createElement('img');

            let posterSrc =  filmsJson.films[i].title
                .replace(/\s/g, "")
                .toLowerCase()
                .replace(/[^a-zA-Z ]/g, "");

            poster.src = './media/films/' + posterSrc + '.png';
            poster.setAttribute("id", "poster");
            filmDetail.appendChild(poster);
            //endregion

            //region title
            let title = document.createElement('h1');
            title.innerHTML = filmsJson.films[i].title;
            filmDetail.appendChild(title);
            //endregion

            //region subtitle
            if(filmsJson.films[i].subtitle !== 'null') {
                let subtitle = document.createElement('h2');
                subtitle.innerHTML = filmsJson.films[i].subtitle;
                filmDetail.appendChild(subtitle);
            }
            //endregion

            //region year
            let year = document.createElement('p');
            year.innerHTML = filmsJson.films[i].year;
            filmDetail.appendChild(year);
            //endregion

            //region text
            if(filmsJson.films[i].text !== 'null') {
                let text = document.createElement('p');
                text.innerHTML = filmsJson.films[i].text;
                filmDetail.appendChild(text);
            }
            //endregion

            //region iframe
            if(filmsJson.films[i].iframeLink !== 'null') {
                let iframe = document.createElement('iframe');
                iframe.setAttribute('src', filmsJson.films[i].iframeLink);
                filmDetail.appendChild(iframe);
            }
            //endregion

            //region secondLink
            if(filmsJson.films[i].secondLink !== 'null') {

                let linkInfo = document.createElement('p');

                linkInfo.innerHTML = filmsJson.films[i].secondLink.split(';')[0] + ':';

                let link = document.createElement('a');

                link.setAttribute('href', filmsJson.films[i].secondLink.split(';')[1]);

                link.innerHTML = filmsJson.films[i].secondLink.split(';')[1];

                linkInfo.appendChild(link);

                filmDetail.appendChild(linkInfo);
            }
            //endregion

            //region images

            let amountImg = filmsJson.films[i].amountImg;

            for (let j = 0; j < amountImg; j++) {
                let img = document.createElement('img');

                console.log('./media/films/' + posterSrc + '_' + (j+1) + '.jpg');

                img.src = './media/films/' + posterSrc + '_' + (j+1) + '.jpg';

                if (amountImg <= 3) {
                    img.style.width = 90/amountImg + 'vw';

                    console.log((90 - 2 * amountImg) / amountImg + 'vw');
                }

                filmDetail.appendChild(img);
            }
            //endregion
        });

        function deleteChildren(parent) {
            let child = parent.lastElementChild;
            while (child) {
                parent.removeChild(child);
                child = parent.lastElementChild;
            }
        }
    }
});
