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
        '"secondLink":"null", "text":"In 2017 I also took part in the summer project of the Medien Kultur Haus. ' +
        'In the course of this project, the short film Best Friend Forever Or Whatever was created.", ' +
        '"popularity":"11"},' +

        '{"title":"Foreverloops", "subtitle":"Las Gafas Films", "year":"2018", "amountImg":"3", ' +
        '"iframeLink":"https://player.vimeo.com/video/315526461", ' +
        '"secondLink":"Making of;https://youtu.be/s22MuywfUxM", "text":"This commercial shoot was something special for me ' +
        'because for the first time I got to see what it is like to be in a professional movie production team. ' +
        'I documented the shoot for the austrian film company called Las Gafas Films and summarized it in a short making-of. ' +
        'The commercial won the CANNES CORPORATE MEDIA & TV AWARDS and the Film Forum Austria in the TECHNOLOGY FILM category.", ' +
        '"popularity":"1"},' +

        '{"title":"Cats, Rats & Lovebirds", "subtitle":"Las Gafas Films", "year":"2018", "amountImg":"3", ' +
        '"iframeLink":"https://player.vimeo.com/video/276199205", ' +
        '"secondLink":"Making of;https://youtu.be/WHhRj5fAO40", "text":"For the second time ' +
        'I was invited by Las Gafas Films to accompany them on a shoot. As part of the Wissenstransferzentrums West (WTZW), ' +
        'the University of Arts Linz is working on new and alternative strategies for science communication. ' +
        'Las Gafas Films was allowed to produce the fourth and final project in this series. ' +
        'Cats, Rats & Lovebirds is a short film that deals with fundamental aspects of silicon photonics. ' +
        'Besides producing a making of for the film crew, ' +
        'I was helping them wherever I could including pushing the dolly.", ' +
        '"popularity":"5"},' +

        '{"title":"Wels, was wird?", "subtitle":"null", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/-uIngfORXfI", ' +
        '"secondLink":"null", "text":"Wels, was wird? is a documentary about the future of the city of Wels. ' +
        'This documentation was created with a small team in cooperation with the Medien Kultur Haus Wels. ' +
        'For this project, we did a lot of interviews with politicians as well as people on the street.", ' +
        '"popularity":"2"},' +

        '{"title":"Am eigenen Leibe", "subtitle":"Die Experimente des Dr. Zasch", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/0Vi-V9bhUTI", ' +
        '"secondLink":"null", "text":"The second film project in this series was a mockumentary, ' +
        'a fictional documentary that sells falsehoods for true. ' +
        'For this short film we used Super 8 cameras to forge or recreate videos from the past. ' +
        'This film was shown at the Crossing Europe film festival in Linz.", ' +
        '"popularity":"6"},' +

        '{"title":"48 Jahre später", "subtitle":"null", "year":"2018", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/LTw1zWqgQFY", ' +
        '"secondLink":"Making of;https://www.youtube.com/watch?v=g_lMDYkMFGk", ' +
        '"text":"The third and last project organised by the Medien Kultur Haus in summer 2018 was a short film ' +
        'that is set in Wels in the future. ' +
        'I both assisted the camera department for this film and documented the shooting in a making-of.", ' +
        '"popularity":"7"},' +

        '{"title":"Christzilla", "subtitle":"Es kommt", "year":"2018", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/iV-OH5eTi0o", ' +
        '"secondLink":"Episode #1;https://www.youtube.com/embed/h10DaiA51OY", "text":"This satirical film trailer ' +
        'emerged from a spontaneous idea and teasers a film ' +
        'in which the oversized angle statue from christkindlmarkt in Wels attacks the city. Unfortunately, ' +
        'I was not involved in the shooting of episode # 1 due to schedule superposition.", ' +
        '"popularity":"12"},' +

        '{"title":"Press Pause", "subtitle":"null", "year":"2019", "amountImg":"3", ' +
        '"iframeLink":"https://www.youtube.com/embed/XXHj03gttl4", ' +
        '"secondLink":"null", "text":"As in previous years, the Medien Kultur Haus produced a short film in August 2019. ' +
        'This film project was very exciting for me because it was my first time standing behind the camera alone. ' +
        'In preparation for this project, I dealt a lot with angles and perspectives."' +
        ', "popularity":"8"},' +

        '{"title":"All About You", "subtitle":"Vicky - Music Video", "year":"2019", "amountImg":"3", ' +
        '"iframeLink":"https://www.youtube.com/embed/eEItw8KVsPk", ' +
        '"secondLink":"null", "text":"In September 2019 I was invited by the austrian singer and songwriter ' +
        'Vicky (Vicky Kren) to do a spontaneous music video shoot. ' +
        'Neither Vicky nor myself have any previous hands-on experience in music video production. ' +
        'In addition to the camera, I also did the editing of the mostly spontaneous shots.", "popularity":"10"},' +

        '{"title":"Kleiner Horrorladen", "subtitle":"Musicalwaves Wels", "year":"2019", "amountImg":"1", ' +
        '"iframeLink":"https://www.youtube.com/embed/yY1kfpJRLaw", ' +
        '"secondLink":"Behind the Scenes;https://www.youtube.com/watch?v=DvkAO1lEfFQ", ' +
        '"text":"In September 2019 I was contacted by Musicalwaves Wels ' +
        'whether I could record their staging of the Menken musical Der kleine Horrorladen. ' +
        'In addition to the 2 recordings of the entire piece, ' +
        'I also produced a behind the scenes documentation and a trailer for the production.", ' +
        '"popularity":"9"},' +

        '{"title":"Marabu", "subtitle":"null", "year":"2020", "amountImg":"6", ' +
        '"iframeLink":"null", ' +
        '"secondLink":"null", ' +
        '"text":"In summer of 2020, the summer project of the Medien Kultur Haus took place ' +
        'even though there was a global pandemic going on. ' +
        'This year we decided to do a coming-of-age story about 2 sisters who spend a day in the local zoo. ' +
        'Despite many aggravating reasons (big amount of zoo visitors, corona measures), ' +
        'the shoot with the very ambitious team was very instructive. ' +
        'The premiere has been postponed to unknown for the time being.", ' +
        '"popularity":"4"},' +

        '{"title":"Studio 17 - 09.03.2021", "subtitle":"Johanna Dohnal und Feminismus Heute", "year":"2021", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/H0H-Z5g_rX0", ' +
        '"secondLink":"Livestream;https://youtu.be/H0H-Z5g_rX0", ' +
        '"text":"This was a rather spontaneous shoot where I operated one and a half hour a gimbal ' +
        'in the awesome Set of Studio 17. The program is produced by the Medien Kultur Haus ' +
        'and is broadcasted live on YouTube and Dorf-TV. I was invited the day before the stream ' +
        'and I am happy and proud to call this my first participation in a livestream.", ' +
        '"popularity":"14"},' +

        '{"title":"Grieskirchner Bierstream", "subtitle":"True Studios", "year":"2021", "amountImg":"0", ' +
        '"iframeLink":"https://player.vimeo.com/video/532175416?badge=0&autopause=0&player_id=0&app_id=58479", ' +
        '"secondLink":"Making of;https://youtu.be/crggsquiZbw", ' +
        '"text":"In this stream, live from the Grieskirchner brewery, different types of beer are presented and tasted. ' +
        'I was invited by the organizing company, true studios, to produce a making of. ' +
        'It was a great experience to get to know all the people from this company and to get an insight into their workflow.", ' +
        '"popularity":"15"},' +

        '{"title":"Der Digitale Beichtstuhl", "subtitle":"Studio 17", "year":"2021", "amountImg":"0", ' +
        '"iframeLink":"https://www.youtube.com/embed/CgVpGYhbdQw", ' +
        '"secondLink":"null", ' +
        '"text":"This livestream from Studio 17 is about an art project in Linz. ' +
        'The world\'s first digital confessional is presented and seduced. ' +
        'I was operating the B-Camera on a Gimbal.", ' +
        '"popularity":"16"},' +

        '{"title":"Kulturdialoge", "subtitle":"Studio 17", "year":"2021", "amountImg":"2", ' +
        '"iframeLink":"https://www.youtube.com/embed/VlQnPPYssQE", ' +
        '"secondLink":"All parts;https://youtube.com/playlist?list=PLRPEmPdeFNzp3BDC2U0QbnX-Fng6QglU6", ' +
        '"text":"The idea for the cultural dialogues comes from the city of Wels\' cultural development plan. ' +
        'This includes the opportunity to offer cultural workers a regular dialogue format ' +
        'in which cultural events in Wels can be discussed. Due to COVID-19, ' +
        'the presence format had to be postponed several times, which is why they made a viral version in Studio17. ' +
        'I was involved in all 4 Parts as the main camera operator.", ' +
        '"popularity":"17"}]}';

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
