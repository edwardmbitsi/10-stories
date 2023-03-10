$(function() {
    //Cards info
    var cards = [{
      author: "Shelton Cooper",
      quote: "Our Story",
      imgUrl: "https://images.pexels.com/photos/15536963/pexels-photo-15536963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "#18a0ff",
      likes: 423
    }];
  
    //Global variables
    var currIndex = 0;
    var fontMax = 49;
    // var currLikes =  parseInt($(".num-likes").text());
    var counter = 0;
  
    //Update info of each card when slide
    function changeQuote(i) {
      //Change author's image
      $(".card-navigation").css('background-image', 'url(' + cards[i].imgUrl + ')');
      //Change card background
      $(".quote-card").css('background-color', cards[i].color);
      //Change quote text
      $(".quote-text").hide().text(cards[i].quote).fadeIn(500);
      //Change quote font-size
      $(".quote-text").css('font-size', Math.round(fontMax * fontMax / $(".quote-text").text().length));
      //Change author text
      $(".quote-author").text("- " + cards[i].author);
      //Change num likes
      $(".num-likes").text(cards[i].likes);
    }
  
    //Slide to next card
    $('.arrow-right').click(function() {
      currIndex += 1;
      if (currIndex > cards.length - 1) {
        currIndex = 0;
      }
      changeQuote(currIndex);
    });
  
    //Slide to previous card
    $('.arrow-left').click(function() {
      currIndex -= 1;
      if (currIndex < 0) {
        currIndex = cards.length - 1;
      }
      changeQuote(currIndex);
    });
  
    //Change number of likes on click
    $(".heart-num").on('click', function() {
      var currLikes = parseInt($(".num-likes").text());
      if (counter % 2 === 0) {
        $(".like").css('color', '#F2495A');
        currLikes++;
        counter++;
      } else {
        $(".like").css('color', '#ffffff');
        currLikes--;
        counter++;
      }
      $(".num-likes").text(currLikes);
    })
  
  });

  var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 1000) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};

