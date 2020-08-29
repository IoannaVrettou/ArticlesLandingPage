function getDate(inttime)
{
let unix_timestamp = inttime;
let date = new Date(unix_timestamp * 1000);
return date;
}
// function checkImageURL(urlString){
//   return /^((http?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/i.test(urlString);
// }

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

function renderDomCardElement(item){
let target = document.querySelector('.row');
let div = document.createElement('div');
let datetime = getDate(item.datetime);

div.className = "card";
div.innerHTML = `<div class="wrapper" style="background-image: url(${validateUrl(item.imageurl) ? item.imageurl : "./soccer_ball.png"});background-size: cover;">
<div class="date">
    <span class="day">${datetime.getDay()}</span>
    <span class="month">${datetime.getMonth()}</span>
    <span class="year">${datetime.getFullYear()}</span>
</div>
<div class="data">
        <div class="content">
          <span class="text">${datetime.getHours()}:${datetime.getMinutes()}</span>
          <h1 class="title"><a href="#">${item.title}</a></h1>
          <p class="text">${item.summary ?? "<a href=\"#\">Διαβάστε Περισσότερα</a>"}</p>
        </div>
      </div>
    </div>
    </div>
</div>`;
  target.appendChild(div);
}


window.addEventListener('load', function(event) {
    articleCards.forEach((item) => {
      renderDomCardElement(item);
    });
});