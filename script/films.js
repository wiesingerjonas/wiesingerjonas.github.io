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

        '{"title":"Foreverloops", "subtitle":"Las Gafas Films", "year":"2018", "amountImg":"3", ' +
        '"iframeLink":"https://player.vimeo.com/video/315526461", ' +
        '"secondLink":"Making of;https://youtu.be/s22MuywfUxM", "text":"Dieser Werbespotdreh war für mich insofern etwas Besonderes, ' +
        'da ich zum ersten Mal in meinem Leben bei einer professionellen Filmfirma, ' +
        'mit dem Namen Las Gafas Films schnuppern durfte. ' +
        'Ich habe für das Team den Dreh dokumentiert und in einem kurzen Making-of zusammengefasst. ' +
        'Der Werbespot gewann bei den CANNES CORPORATE MEDIA & TV AWARDS ' +
        'und im Film Forum Austria in der Kategorie TECHNOLOGIE FILM."},' +

        '{"title":"Cats, Rats & Lovebirds", "subtitle":"Las Gafas Films", "year":"2018", "amountImg":"3", ' +
        '"iframeLink":"http://player.vimeo.com/video/276199205", ' +
        '"secondLink":"Making of;https://youtu.be/WHhRj5fAO40", "text":"Zum zweiten Mal wurde ich von den Las Gafas Films eingeladen, ' +
        'sie auf einen Dreh zu begleiten. Im Rahmen des Wissenstransferzentrums West (WTZW) arbeitet ' +
        'die Kunstuniversität Linz an neuen und alternativen Strategien für die Wissenschaftskommunikation. ' +
        'Las Gafas Films durften das vierte und auch letzte Projekt dieser Reihe produzieren. ' +
        'Cats, Rats & Lovebirds ist ein Kurzfilm der sich mit grundlegenden Aspekten der Siliziumphotonik befasst."},' +

        '{"title":"Wels, was wird?", "subtitle":"null", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/-uIngfORXfI", ' +
        '"secondLink":"null", "text":"Wels, was wird? ist eine Dokumentation über die Zukunft der Stadt Wels. ' +
        'Diese Dokumentation ist mit einem kleinen Team in Zusammenarbeit mit dem MedienKulturhaus Wels entstanden."},' +

        '{"title":"Am eigenen Leibe", "subtitle":"Die Experimente des Dr. Zasch", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/0Vi-V9bhUTI", ' +
        '"secondLink":"null", "text":"Das zweite Filmprojekt dieser Reihe war eine Mockumentary, ein fiktionaler Dokumentarfilm, ' +
        'welcher Unwahrheiten für wahr verkauft. Wir haben für diesen Kurzfilm Super 8 Kameras verwendet, ' +
        'um Videos aus der Vergangenheit zu fälschen bzw. nachzustellen. ' +
        'Dieser Film wurde bei den Filmfestspielen Crossing Europe in Linz gezeigt."},' +

        '{"title":"48 Jahre später", "subtitle":"null", "year":"2018", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/LTw1zWqgQFY", ' +
        '"secondLink":"Making of;https://www.youtube.com/watch?v=g_lMDYkMFGk", ' +
        '"text":"Das dritte und somit letzte Projekt war ein Kurzfilm, welcher in der Zukunft in Wels spielt. ' +
        'Ich habe für diesen Film sowohl bei der Kamera geholfen, ' +
        'als auch den Dreh dokumentiert und in einem Making-of festgehalten."},' +

        '{"title":"Christzilla", "subtitle":"Es kommt", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/iV-OH5eTi0o", ' +
        '"secondLink":"Episode #1;https://www.youtube.com/embed/h10DaiA51OY", "text":"Dieser satirische Filmtrailer ' +
        'ist aus einer spontanen Idee entstanden und teasert einen Film an, in dem das überdimensionale Christkind ' +
        'vom Welser Adventmarkt die Stadt angreift. Beim Dreh von Episode #1 war ich leider nicht beteiligt."},' +

        '{"title":"Press Pause", "subtitle":"null", "year":"2019", "amountImg":"3", ' +
        '"iframeLink":"https://www.youtube.com/embed/XXHj03gttl4", ' +
        '"secondLink":"null", "text":"Im August 2019 entstand wie auch in den Jahren davor ein Kurzfilm. ' +
        'Dieses Filmprojekt war sehr aufregend für mich, da ich zum ersten Mal alleine hinter der Kamera stand. ' +
        'Ich habe mich zur Vorbereitung dieses Projekts sehr viel mit Winkeln und Perspektiven beschäftigt."},' +

        '{"title":"Kleiner Horrorladen", "subtitle":"Musicalwaves Wels", "year":"2019", "amountImg":"1", ' +
        '"iframeLink":"https://www.youtube.com/embed/yY1kfpJRLaw", ' +
        '"secondLink":"Behind the Scenes;https://www.youtube.com/watch?v=DvkAO1lEfFQ", ' +
        '"text":"Im September wurde ich von den Musicalwaves Wels kontaktiert, ' +
        'ob ich ihre Inszenierung vom bekannten Musical Der kleine Horrorladen aufnehmen könnte. ' +
        'Ich habe ihnen neben den 2 Aufnahmen des gesamten Stücks auch ein Making of und einen Trailer gemacht."},' +

        '{"title":"Marabu", "subtitle":"null", "year":"2020", "amountImg":"6", ' +
        '"iframeLink":"null", ' +
        '"secondLink":"null", ' +
        '"text":"null"}]}';

    let filmsJson = JSON.parse(films);

    for (let i = filmsJson.films.length-1; i >= 0; i--) {

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

            let film_alignLeft = document.createElement('div');
            film_alignLeft.setAttribute('id', 'film_alignLeft');

            let film_alignRight = document.createElement('div');
            film_alignRight.setAttribute('id', 'film_alignRight');

            //region poster
            let poster = document.createElement('img');

            let posterSrc =  filmsJson.films[i].title
                .replace(/\s/g, "")
                .toLowerCase()
                .replace(/[^a-zA-Z ]/g, "");

            poster.src = './media/films/' + posterSrc + '.png';
            poster.setAttribute("id", "poster");

            film_alignLeft.appendChild(poster);

            filmDetail.appendChild(film_alignLeft);
            //endregion

            //region title
            let title = document.createElement('h1');
            title.innerHTML = filmsJson.films[i].title;
            film_alignRight.appendChild(title);
            //endregion

            //region subtitle
            if(filmsJson.films[i].subtitle !== 'null') {
                let subtitle = document.createElement('h2');
                subtitle.innerHTML = filmsJson.films[i].subtitle;
                film_alignRight.appendChild(subtitle);
            }
            //endregion

            //region year
            let year = document.createElement('p');
            year.innerHTML = filmsJson.films[i].year;
            year.setAttribute('id','year');
            film_alignRight.appendChild(year);
            //endregion

            //region text
            if(filmsJson.films[i].text !== 'null') {
                let text = document.createElement('p');
                text.innerHTML = filmsJson.films[i].text;
                film_alignRight.appendChild(text);
            }
            //endregion

            filmDetail.appendChild(film_alignRight);

            //region iframe
            if(filmsJson.films[i].iframeLink !== 'null') {
                let iframe = document.createElement('iframe');
                iframe.setAttribute('src', filmsJson.films[i].iframeLink);

                let iframeContainer = document.createElement('div');
                iframeContainer.setAttribute('id', 'iframeContainer');

                iframeContainer.appendChild(iframe);
                filmDetail.appendChild(iframeContainer);
            }
            //endregion

            //region secondLink
            if(filmsJson.films[i].secondLink !== 'null') {

                let linkInfo = document.createElement('p');

                linkInfo.innerHTML = filmsJson.films[i].secondLink.split(';')[0] + ': ';

                let link = document.createElement('a');

                link.setAttribute('href', filmsJson.films[i].secondLink.split(';')[1]);

                link.innerHTML = filmsJson.films[i].secondLink.split(';')[1];

                linkInfo.setAttribute('id', 'secondLink');

                linkInfo.appendChild(link);

                filmDetail.appendChild(linkInfo);
            }
            //endregion

            //region images

            let amountImg = filmsJson.films[i].amountImg;

            for (let j = 0; j < amountImg; j++) {
                let img = document.createElement('img');

                img.src = './media/films/' + posterSrc + '_' + (j+1) + '.jpg';

                if (amountImg <= 3) {
                    img.style.width = 90/amountImg + 'vw';
                } else if (amountImg <= 6) {
                    img.style.width = 90/(amountImg-3) + 'vw';
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
