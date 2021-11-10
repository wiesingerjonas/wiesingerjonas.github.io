let scrollDistance;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSq1JoJirvsYIyhs0krfSk_39I3JkzYh0",
  authDomain: "wiesingerjonas-d4583.firebaseapp.com",
  databaseURL: "https://wiesingerjonas-d4583-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wiesingerjonas-d4583",
  storageBucket: "wiesingerjonas-d4583.appspot.com",
  messagingSenderId: "124382985077",
  appId: "1:124382985077:web:57b7090659ce141d2b713c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.addEventListener('load', () => {
  const imageContainer = document.getElementById('imageContainer');
  const filmDetail = document.getElementById('filmDetail');

  const filmCategoriesObjects = document.getElementsByClassName('filmCategoriesObject');

  const categories = ["documentary", "livestream", "musicvideo", "shortfilm", "concert", "advertisement"]
  let active = "";


  onValue(ref(db, '/'), (snapshot) => {
    const filmsJson = snapshot.val();

    for (let i = filmsJson.films.length - 1; i >= 0; i--) {
      const img = document.createElement('img');
      img.className = filmsJson.films[i].category;

      const imgSrc = filmsJson.films[i].title
          .replace(/\s/g, '')
          .toLowerCase()
          .replace(/[^a-zA-Z ]/g, '');

      img.src = '../media/films/' + imgSrc + '.png';

      img.alt = "Poster: " + filmsJson.films[i].title;
      img.title = filmsJson.films[i].title;

      imageContainer.appendChild(img);

      img.addEventListener('click', () => {
        scrollDistance = window.scrollY;
        window.scrollTo(0, 0);

        document.getElementById("filmCategories").classList.add('hide');

        deleteChildren(filmDetail);

        filmDetail.classList.remove('hide');
        imageContainer.classList.add('hide');
        document.getElementById('FilmTitleHeader').classList.add('hide');

        const backButton = document.createElement('p');
        backButton.textContent = "Back";
        backButton.setAttribute('id', 'backButton');

        backButton.addEventListener('click', () => {
          window.scrollTo(0, scrollDistance);
          document.getElementById("filmCategories").classList.remove('hide')
          filmDetail.classList.add('hide');
          imageContainer.classList.remove('hide');
          document.getElementById('FilmTitleHeader').classList.remove('hide');
        })

        filmDetail.appendChild(backButton);

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
        poster.alt = "poster:" + filmsJson.films[i].title;
        poster.title = filmsJson.films[i].title;
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
          img.alt = "Behind the Scenes: " + filmsJson.films[i].title;
          img.title = "Behind the Scenes"

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

  for (let i = 0; i < filmCategoriesObjects.length; i++) {
    filmCategoriesObjects.item(i).addEventListener("click", () => {
      if(active !== filmCategoriesObjects.item(i).id) {
        document.getElementById(filmCategoriesObjects.item(i).id).style.backgroundColor = "#292929"
        active = filmCategoriesObjects.item(i).id;
        for (let j = 0; j < categories.length; j++) {
          if (categories[j] !== filmCategoriesObjects.item(i).id) {
            document.getElementById(categories[j]).style.backgroundColor = "#212121"
            let elm = document.getElementsByClassName(categories[j]);
            for (let k = 0; k < elm.length; k++) {
              elm[k].style.display = "none";
            }
          } else {
            let elm = document.getElementsByClassName(categories[j]);
            for (let k = 0; k < elm.length; k++) {
              elm[k].style.display = "block";
            }
          }
        }
      } else {
        active = "";
        for (let j = 0; j < categories.length; j++) {
          document.getElementById(categories[j]).style.backgroundColor = "#212121"
          let elm = document.getElementsByClassName(categories[j]);
          for (let k = 0; k < elm.length; k++) {
            elm[k].style.display = "block";
          }
        }
      }
    });
  }
});
