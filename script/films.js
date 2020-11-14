window.addEventListener('load', () => {
  const imageContainer = document.getElementById('imageContainer');
  const filmDetail = document.getElementById('filmDetail');
  const films = '{"films":[' +
        '{"title":"OK Center for Contemporary Art", "subtitle":"null", "year":"2015", ' +
        '"amountImg":"2", "iframeLink":"null", ' +
        '"secondLink":"null", "text":"I was allowed to accompany the camera team of BildungsTV for a day and, ' +
        'since I already wanted to become a camera operator at the time, ' +
      'I was allowed to get a taste of this profession.", ' +
        '"popularity":"13"},' +

        '{"title":"En Croix", "subtitle":"null", "year":"2016", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/X2OR0cfNU-E", ' +
        '"secondLink":"Making of;https://www.youtube.com/watch?v=VznsLLXwVf0", "text":"As part of the summer project, ' +
        'an annual series of workshops, which are initiated by Medien Kultur Haus Wels, ' +
        'I took part for the first time in 2016. In a team of 15 people we produced a short film with the title En Croix. ' +
        'In this project, professionals exchanged their experiences and pass on their knowledge to amateurs or beginners. ' +
        'It was during this film shoot that I found what is it like to produce movies.", ' +
        '"popularity":"3"},' +

        '{"title":"Best Friend Forever Or Whatever", "subtitle":"null", "year":"2017", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/V_XP24q9Wp4", ' +
        '"secondLink":"null", "text":"Auch im Jahr 2017 habe ich am Sommerprojekt des Medien Kultur Hauses teilgenommen. ' +
        'Im Laufe dieses Projekts entstand der Kurzfilm Best Friend Forever Or Whatever.", ' +
        '"popularity":"11"},' +

        '{"title":"Foreverloops", "subtitle":"Las Gafas Films", "year":"2018", "amountImg":"3", ' +
        '"iframeLink":"https://player.vimeo.com/video/315526461", ' +
        '"secondLink":"Making of;https://youtu.be/s22MuywfUxM", "text":"Dieser Werbespotdreh war für mich insofern etwas Besonderes, ' +
        'da ich zum ersten Mal in meinem Leben bei einer professionellen Filmfirma, ' +
        'mit dem Namen Las Gafas Films schnuppern durfte. ' +
        'Ich habe für das Team den Dreh dokumentiert und in einem kurzen Making-of zusammengefasst. ' +
        'Der Werbespot gewann bei den CANNES CORPORATE MEDIA & TV AWARDS ' +
        'und im Film Forum Austria in der Kategorie TECHNOLOGIE FILM.", ' +
        '"popularity":"1"},' +

        '{"title":"Cats, Rats & Lovebirds", "subtitle":"Las Gafas Films", "year":"2018", "amountImg":"3", ' +
        '"iframeLink":"http://player.vimeo.com/video/276199205", ' +
        '"secondLink":"Making of;https://youtu.be/WHhRj5fAO40", "text":"Zum zweiten Mal wurde ich von den Las Gafas Films eingeladen, ' +
        'sie auf einen Dreh zu begleiten. Im Rahmen des Wissenstransferzentrums West (WTZW) arbeitet ' +
        'die Kunstuniversität Linz an neuen und alternativen Strategien für die Wissenschaftskommunikation. ' +
        'Las Gafas Films durften das vierte und auch letzte Projekt dieser Reihe produzieren. ' +
        'Cats, Rats & Lovebirds ist ein Kurzfilm der sich mit grundlegenden Aspekten der Siliziumphotonik befasst.", ' +
        '"popularity":"5"},' +

        '{"title":"Wels, was wird?", "subtitle":"null", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/-uIngfORXfI", ' +
        '"secondLink":"null", "text":"Wels, was wird? ist eine Dokumentation über die Zukunft der Stadt Wels. ' +
        'Diese Dokumentation ist mit einem kleinen Team in Zusammenarbeit mit dem MedienKulturhaus Wels entstanden.", ' +
        '"popularity":"2"},' +

        '{"title":"Am eigenen Leibe", "subtitle":"Die Experimente des Dr. Zasch", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/0Vi-V9bhUTI", ' +
        '"secondLink":"null", "text":"Das zweite Filmprojekt dieser Reihe war eine Mockumentary, ein fiktionaler Dokumentarfilm, ' +
        'welcher Unwahrheiten für wahr verkauft. Wir haben für diesen Kurzfilm Super 8 Kameras verwendet, ' +
        'um Videos aus der Vergangenheit zu fälschen bzw. nachzustellen. ' +
        'Dieser Film wurde bei den Filmfestspielen Crossing Europe in Linz gezeigt.", ' +
        '"popularity":"6"},' +

        '{"title":"48 Jahre später", "subtitle":"null", "year":"2018", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/LTw1zWqgQFY", ' +
        '"secondLink":"Making of;https://www.youtube.com/watch?v=g_lMDYkMFGk", ' +
        '"text":"Das dritte und somit letzte Projekt war ein Kurzfilm, welcher in der Zukunft in Wels spielt. ' +
        'Ich habe für diesen Film sowohl bei der Kamera geholfen, ' +
        'als auch den Dreh dokumentiert und in einem Making-of festgehalten.", ' +
        '"popularity":"7"},' +

        '{"title":"Christzilla", "subtitle":"Es kommt", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/iV-OH5eTi0o", ' +
        '"secondLink":"Episode #1;https://www.youtube.com/embed/h10DaiA51OY", "text":"Dieser satirische Filmtrailer ' +
        'ist aus einer spontanen Idee entstanden und teasert einen Film an, in dem das überdimensionale Christkind ' +
        'vom Welser Adventmarkt die Stadt angreift. Beim Dreh von Episode #1 war ich leider nicht beteiligt.", ' +
        '"popularity":"12"},' +

        '{"title":"Press Pause", "subtitle":"null", "year":"2019", "amountImg":"3", ' +
        '"iframeLink":"https://www.youtube.com/embed/XXHj03gttl4", ' +
        '"secondLink":"null", "text":"Im August 2019 entstand wie auch in den Jahren davor ein Kurzfilm. ' +
        'Dieses Filmprojekt war sehr aufregend für mich, da ich zum ersten Mal alleine hinter der Kamera stand. ' +
        'Ich habe mich zur Vorbereitung dieses Projekts sehr viel mit Winkeln und Perspektiven beschäftigt."' +
        ', "popularity":"8"},' +

        '{"title":"All About You", "subtitle":"Vicky - Music Video", "year":"2019", "amountImg":"3", ' +
        '"iframeLink":"https://www.youtube.com/embed/eEItw8KVsPk", ' +
        '"secondLink":"null", "text":"Im September 2019 wurde ich ' +
        'von Vicky (Vicky Kren) zu einem spontanen Musikvideodreh  eingeladen. ' +
        'Sowohl Vicky als auch ich selbst haben zuvor noch keine praktische Erfahrung in der Musikvideoproduktion. ' +
        'Neben der Kamera habe ich auch den Zusammenschnitt der meist spontanen Shots übernommen.", "popularity":"10"},' +

        '{"title":"Kleiner Horrorladen", "subtitle":"Musicalwaves Wels", "year":"2019", "amountImg":"1", ' +
        '"iframeLink":"https://www.youtube.com/embed/yY1kfpJRLaw", ' +
        '"secondLink":"Behind the Scenes;https://www.youtube.com/watch?v=DvkAO1lEfFQ", ' +
        '"text":"Im September wurde ich von den Musicalwaves Wels kontaktiert, ' +
        'ob ich ihre Inszenierung vom bekannten Musical Der kleine Horrorladen aufnehmen könnte. ' +
        'Ich habe ihnen neben den 2 Aufnahmen des gesamten Stücks auch ein Making of und einen Trailer gemacht.", ' +
        '"popularity":"9"},' +

        '{"title":"Marabu", "subtitle":"null", "year":"2020", "amountImg":"6", ' +
        '"iframeLink":"null", ' +
        '"secondLink":"null", ' +
        '"text":"Im Sommer 2020 hat trot Corona gottseidank das Sommerprojekt des Medien Kultur Hauses stattgefunden. ' +
        'In diesem Jahr haben wir uns für eine Coming-of-age Geschichte über 2 Schwestern, die einen Tag im Tiergarten ' +
        'Wels verbringen entschieden. Der Dreh war trotz vieler erschwerender Gründe (viele Menschen, Coronamasnahmen) ' +
        'mit dem sehr ambitionierten Team sehr lehrreich. Die Premiere wurde vorerst auf unbekannt verschoben.", ' +
        '"popularity":"4"}]}';

  const filmsJson = JSON.parse(films);

  for (let i = filmsJson.films.length - 1; i >= 0; i--) {
    const img = document.createElement('img');

    const imgSrc = filmsJson.films[i].title
      .replace(/\s/g, '')
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, '');

    img.src = '../media/films/' + imgSrc + '.png';
    imageContainer.appendChild(img);

    img.addEventListener('click', () => {
      deleteChildren(filmDetail);

      filmDetail.classList.remove('hide');
      imageContainer.classList.add('hide');

      const informationContainer = document.createElement('div');
      informationContainer.setAttribute('id', 'informationContainer');

      const informationText = document.createElement('div');
      informationText.setAttribute('id', 'informationText');

      //region poster
      const poster = document.createElement('img');

      const posterSrc = filmsJson.films[i].title
        .replace(/\s/g, '')
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, '');

      poster.src = `../media/films/${posterSrc}.png`;
      poster.setAttribute('id', 'poster');

      informationContainer.appendChild(poster);

      //endregion

      //region title
      const title = document.createElement('h1');
      title.textContent = filmsJson.films[i].title;
      informationText.appendChild(title);
      //endregion

      //region subtitle
      if (filmsJson.films[i].subtitle !== 'null') {
        const subtitle = document.createElement('h2');
        subtitle.textContent = filmsJson.films[i].subtitle;
        informationText.appendChild(subtitle);
      }
      //endregion

      //region year
      const year = document.createElement('p');
      year.textContent = filmsJson.films[i].year;
      year.setAttribute('id', 'year');
      informationText.appendChild(year);
      //endregion

      //region text
      if (filmsJson.films[i].text !== 'null') {
        const text = document.createElement('p');
        text.textContent = filmsJson.films[i].text;
        informationText.appendChild(text);
      }
      //endregion

      informationContainer.appendChild(informationText);
      filmDetail.appendChild(informationContainer);

      //region iframe
      if (filmsJson.films[i].iframeLink !== 'null') {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', filmsJson.films[i].iframeLink);

        const iframeContainer = document.createElement('div');
        iframeContainer.setAttribute('id', 'iframeContainer');

        iframeContainer.appendChild(iframe);
        filmDetail.appendChild(iframeContainer);
      }
      //endregion

      //region secondLink
      if (filmsJson.films[i].secondLink !== 'null') {
        const linkInfo = document.createElement('p');

        linkInfo.innerHTML = filmsJson.films[i].secondLink.split(';')[0] + ': ';

        const link = document.createElement('a');

        link.setAttribute('href', filmsJson.films[i].secondLink.split(';')[1]);

        link.innerHTML = filmsJson.films[i].secondLink.split(';')[1];

        linkInfo.setAttribute('id', 'secondLink');

        linkInfo.appendChild(link);

        filmDetail.appendChild(linkInfo);
      }
      //endregion

      //region images

      const amountImg = filmsJson.films[i].amountImg;
      const images = document.createElement('div');

      images.setAttribute('id', 'images');

      for (let j = 0; j < amountImg; j++) {
        const img = document.createElement('img');

        img.src = `../media/films/${posterSrc}_${j + 1}.jpg`;

        images.appendChild(img);
      }

      filmDetail.appendChild(images);
      //endregion
    });

    function deleteChildren(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  }
});
