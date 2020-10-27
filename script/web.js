window.addEventListener('load', () => {

     let web = '{"web":[' +
         '{"title":"Vs Hart", "iframe":"null", "text":"I am currently working on a web project with two classmembers. We are renewing the Webpage of the Vs Hart."},' +

         '{"title":"Theatermonitor", "iframe":"https://www.youtube.com/embed/4AfV2YXBmrg", "text":"I\'ve worked on this project for almost one year. It\'s a monitor, which theaters can use to give the audience information about the current play. In my case it is for the Musiktheater Linz."},' +

         '{"title":"Htl Dir Av", "iframe":"https://htldirav.net/", "text":"null"},' +

         '{"title":"Adventskalender", "iframe":"https://wiesingerjonas.github.io/adventskalender/", "text":"null"},' +

         '{"title":"Fashionblog", "iframe":"https://wiesingerjonas.github.io/fashionblog/", "text":"This is a funny little project I made to make fun of the sometimes very difficult Captcha verifications."}]}';

     let webJson = JSON.parse(web);

     let webDiv = document.getElementById('web');

     for (let i = 0; i < webJson.web.length; i++) {

         let title = document.createElement('h2');
         title.innerHTML = webJson.web[i].title;
         webDiv.appendChild(title);

         if(webJson.web[i].text!=='null') {
             let p = document.createElement('p');
             p.innerHTML = webJson.web[i].text;
             webDiv.appendChild(p);
         }

         if(webJson.web[i].iframe!=='null') {
             let iframe = document.createElement('iframe');
             iframe.setAttribute('src', webJson.web[i].iframe);
             iframe.setAttribute('allowtransparency', 'false');
             let container = document.createElement('div')
             container.setAttribute('id', 'container');
             container.appendChild(iframe)
             webDiv.appendChild(container);
         }

         let hr = document.createElement('hr');
         webDiv.appendChild(hr);
     }
});