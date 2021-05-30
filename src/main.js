let ORIGIN;
let CLASSIC;
let custom;
const btnBox = document.querySelector(".button__box");
const ticketCard = document.querySelector(".ticket__card--front");

function changeTicketBg(e) {
  const target = e.target;
  if (target.dataset.key === "origin") {
    ticketCard.style.backgroundImage = `url("https://picsum.photos/200/300")`;
  } else if (target.dataset.key === "classic") {
    ticketCard.style.backgroundImage = `url("https://picsum.photos/201/300")`;
  } else if (target.dataset.key === "custom") {
    ticketCard.style.backgroundImage = `url("https://picsum.photos/202/300")`;
  }
}

btnBox.addEventListener("click", changeTicketBg);

const socialLink = document.querySelector(".social__link");

function shareLink(e) {
  if (e.target.matches(".fa-twitter")) {
    window.open(
      `https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" alt="Share on Twitter"`
    );
  } else if (e.target.matches(".kakao")) {
    //   마지막에 구현하자
    console.log("kakao");
  } else if (e.target.matches(".fa-facebook-f")) {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" alt="Share on Facebook"`
    );
  }
}
socialLink.addEventListener("click", shareLink);
