(function () {
  "use strict";

  const root = document.documentElement;
  const navToggle = document.querySelector("#js-navToggle");
  navToggle.addEventListener("click", function () {
  root.classList.toggle("show-nav");
  });   


  const eventPP = document.querySelector("#js-eventPP");
  if (eventPP) {
      const eventOpenBtn = document.querySelector("#js-eventOpenBtn");
      const closeEventPP = function (event) {
      function close() {
          document.removeEventListener("keyup", closeEventPP);
          eventPP.removeEventListener("click", closeEventPP);
          root.classList.remove("show-event-popup");
      }
      switch (event.type) { 
      case "keyup":
        if (event.key === "Escape" || event.keyCode === 27) close();
        break;
      case "click":
        if (
          event.target === this ||
          event.target.classList.contains("js-ppCloseBtn")
        )
          close();
        break;
      }
      };


      eventOpenBtn.addEventListener("click", function () {
      root.classList.add("show-event-popup");
      document.addEventListener("keyup", closeEventPP);
      eventPP.addEventListener("click", closeEventPP);
      });
   }

   const swipers = document.querySelectorAll(".js-swiper");
       swipers.forEach(function (swpr) {
       new Swiper(swpr, {
           updateOnWindowResize: true,
           slidesPerView: "auto",
           freeMode: true,
           spaceBetween: 0,
           speed: 500,
           grabCursor: true,
           pagination: {
               el: ".swiper-pagination",
               clickable: true
           },
           navigation: {
               nextEl: ".swiper-arrow-next",
               prevEl: ".swiper-arrow-prev",
               disabledClass: "arrow--disabled"
           }
       });
   });

   const contactsMap = document.querySelector("#js-contactsMap");
   if (contactsMap) {
     const mapStyles = [
       {
         elementType: "geometry",
         stylers: [
           {
             color: "#242f3e"
           }
         ]
       },
       {
         elementType: "labels.text.fill",
         stylers: [
           {
             color: "#746855"
           }
         ]
       },
       {
         elementType: "labels.text.stroke",
         stylers: [
           {
             color: "#242f3e"
           }
         ]
       },
       {
         featureType: "administrative",
         elementType: "geometry",
         stylers: [
           {
             visibility: "off"
           }
         ]
       },
       {
         featureType: "administrative.locality",
         elementType: "labels.text.fill",
         stylers: [
           {
             color: "#d59563"
           }
         ]
       },
       {
         featureType: "poi",
         stylers: [
           {
             visibility: "off"
           }
         ]
       },
       {
         featureType: "poi",
         elementType: "labels.text.fill",
         stylers: [
           {
             color: "#d59563"
           }
         ]
       },
       {
         featureType: "poi.park",
         elementType: "geometry",
         stylers: [
           {
             color: "#263c3f"
           }
         ]
       },
       {
         featureType: "poi.park",
         elementType: "labels.text.fill",
         stylers: [
           {
             color: "#6b9a76"
           }
         ]
       },
       {
         featureType: "road",
         elementType: "geometry",
         stylers: [
           {
             color: "#38414e"
           }
         ]
       },
       {
         featureType: "road",
         elementType: "geometry.stroke",
         stylers: [
           {
             color: "#212a37"
           }
         ]
       },
       {
         featureType: "road",
         elementType: "labels.icon",
         stylers: [
           {
             visibility: "off"
           }
         ]
       },
       {
         featureType: "road",
         elementType: "labels.text.fill",
         stylers: [
           {
             color: "#9ca5b3"
           }
         ]
       },
       {
         featureType: "road.highway",
         elementType: "geometry",
         stylers: [
           {
             color: "#746855"
           }
         ]
       },
       {
         featureType: "road.highway",
         elementType: "geometry.stroke",
         stylers: [
           {
             color: "#1f2835"
           }
         ]
       },
       {
         featureType: "road.highway",
         elementType: "labels.text.fill",
         stylers: [
           {
             color: "#f3d19c"
           }
         ]
       },
       {
         featureType: "transit",
         stylers: [
           {
             visibility: "off"
           }
         ]
       },
       {
         featureType: "transit",
         elementType: "geometry",
         stylers: [
           {
             color: "#2f3948"
           }
         ]
       },
       {
         featureType: "transit.station",
         elementType: "labels.text.fill",
         stylers: [
           {
             color: "#d59563"
           }
         ]
       },
       {
         featureType: "water",
         elementType: "geometry",
         stylers: [
           {
             color: "#17263c"
           }
         ]
       },
       {
         featureType: "water",
         elementType: "labels.text.fill",
         stylers: [
           {
             color: "#515c6d"
           }
         ]
       },
       {
         featureType: "water",
         elementType: "labels.text.stroke",
         stylers: [
           {
             color: "#17263c"
           }
         ]
       }
     ];
     const mapCenter = new google.maps.LatLng(56.49387, 84.96274);
     const mapOptions = {
       center: mapCenter,
       disableDefaultUI: true,
       draggable: true,
       gestureHandling: "cooperative",
       scrollwheel: false,
       styles: mapStyles,
       zoom: 15,
       zoomControl: true,
       zoomControlOptions: {
         position: google.maps.ControlPosition.RIGHT_BOTTOM
       }
     };

     const map = new google.maps.Map(contactsMap, mapOptions);
     const point = new google.maps.LatLng(56.49385, 84.96274);
     const mapPin = new google.maps.MarkerImage(
     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABHCAMAAABf/MtLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAADAUExURUdwTK8wILwyJL0zI70yJbwyI79AIL0yJL8wILs0JLw0JLsyJL0zJbwyJbwzJB8eHv///3Nycjs6OldWVsRMP4+OjsRNP8fHx+Pj492ZkUlISOazrauqqu7MyMfGxsBAMS0sLMlZTc1mW/vy8sBAMvvy8WVkZMVMQPbl48lZTtmMg81mWtmMhMxmW4+Pj/fm4/fl5OGmnvHx8Z2cnMVNQPLZ1tWAdt6ZktBzaHNzc9V/duq/u+Gmn8hZTNFzabm5uYZR+N4AAAAOdFJOUwAQz9/f3xB/EIDPz9/ftWbT5QAAAWxJREFUWMPt1VlTwjAQAGDEaluPJiQhYGjtAeUQxPu+/v+/cpO2DC+OI7PRYcw+JOlO55vMdpO2WmtBNo3W9+FsZzvb2c529l/Y45hXi/iG6yA8fuKMkGUMqS5X1RvLONvA7tJOtaD9au5AginSo5A6hUem3+hRhmUTwhubjNFttbKzDwT7GqqtGpv0G5vE2Ptes9FrsvqW/9FmXDGIjHCuZwYJc0wUHCn9aYlJKO7uKmf/sh39LJxtxx7lObJ9e1emMA1oISN5OUmFmNMrIQSGnd/TM2M/w3iRwCDpCdK+i9EwMfY5jMkU056l0SvNtf0GT0PUfT9K+a6tAYUKP0wFpl3oSpTansuXchIh2jM9LKDWet/SlATNLkxjg2lqsjAtg9cnOqCbU1Ev9Ji6+wTTdv/LLbJdbHnsh160GwZW6ANz+Ns28LC+WXwL9lFt71mwv7gSUcKzuG/fYr2DtqEPd2w0YeAfR55vg/4EpN3f8dlAXnoAAAAASUVORK5CYII=",
     new google.maps.Size(91, 71), //size
     new google.maps.Point(0, 0),  //origin point
     new google.maps.Point(0, 71)  //offset point
     );
     new google.maps.Marker({
     position: point,
     map: map,
     icon: mapPin,
     title: "TAGREE digital"
     });
   }
 /*  document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById("checkbox10");
    const rectangle = document.getElementById("Rectangle10");
    const ellipse1 = document.getElementById("Ellipse10-1");
    const ellipse2 = document.getElementById("Ellipse10-2");
    const ellipse3 = document.getElementById("Ellipse10-3");
    const ellipse4 = document.getElementById("Ellipse10-4");
    const number = document.getElementById("number10");
 
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          rectangle.setAttribute("fill", "black");
          ellipse1.setAttribute("fill", "black");
          ellipse2.setAttribute("fill", "black");
          ellipse3.setAttribute("fill", "black");
          ellipse4.setAttribute("fill", "black");
          number.setAttribute("fill", "white");
        } else {
          rectangle.setAttribute("fill", "none"); 
          ellipse1.setAttribute("fill", "none");
          ellipse2.setAttribute("fill", "none");
          ellipse3.setAttribute("fill", "none");
          ellipse4.setAttribute("fill", "none");
          number.setAttribute("fill", "black");
        }
      });
    });
    
     document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById("checkbox9");
    const rectangle = document.getElementById("Rectangle9");
    const ellipse1 = document.getElementById("Ellipse9-1");
    const ellipse2 = document.getElementById("Ellipse9-2");
    const ellipse3 = document.getElementById("Ellipse9-3");
    const number = document.getElementById("number9");
 
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          rectangle.setAttribute("fill", "#BC3324");
          ellipse1.setAttribute("fill", "#BC3324");
          ellipse2.setAttribute("fill", "#BC3324");
          ellipse3.setAttribute("fill", "#BC3324");
          number.setAttribute("fill", "white");
        } else {
          rectangle.setAttribute("fill", "none"); 
          ellipse1.setAttribute("fill", "none");
          ellipse2.setAttribute("fill", "none");
          ellipse3.setAttribute("fill", "none");
          number.setAttribute("fill", "#BC3324");
        }
      });
    });
 
    document.addEventListener('DOMContentLoaded', function() {
      const checkbox = document.getElementById("checkbox11");
      const rectangle = document.getElementById("Rectangle11");
      const ellipse1 = document.getElementById("Ellipse11-1");
      const ellipse2 = document.getElementById("Ellipse11-2");
      const ellipse3 = document.getElementById("Ellipse11-3");
      const ellipse4 = document.getElementById("Ellipse11-4");
      const ellipse5 = document.getElementById("Ellipse11-5");
      const ellipse6 = document.getElementById("Ellipse11-6");
      const ellipse7 = document.getElementById("Ellipse11-7");
      const number = document.getElementById("number11");
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          rectangle.setAttribute("fill", "#1F1E1E"); 
          ellipse1.setAttribute("fill", "#1F1E1E");
          ellipse2.setAttribute("fill", "#1F1E1E");
          ellipse3.setAttribute("fill", "#1F1E1E");
          ellipse4.setAttribute("fill", "#1F1E1E");
          ellipse5.setAttribute("fill", "#1F1E1E");
          ellipse6.setAttribute("fill", "#1F1E1E");
          ellipse7.setAttribute("fill", "#1F1E1E");
          number.setAttribute("fill", "white");
          
        } else {
          rectangle.setAttribute("fill", "#none");
          ellipse1.setAttribute("fill", "#none");
          ellipse2.setAttribute("fill", "#none");
          ellipse3.setAttribute("fill", "#none");
          ellipse4.setAttribute("fill", "#none");
          ellipse5.setAttribute("fill", "#none");
          ellipse6.setAttribute("fill", "#none");
          ellipse7.setAttribute("fill", "#none");
          number.setAttribute("fill", "black");
        }
      });
  });
    
  document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById("checkbox8");
    const rectangle = document.getElementById("Rectangle8");
    const ellipse1 = document.getElementById("Ellipse8-1");
    const ellipse2 = document.getElementById("Ellipse8-2");
    const ellipse3 = document.getElementById("Ellipse8-3");
    const number = document.getElementById("number8");
 
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          rectangle.setAttribute("fill", "#BC3324");
          ellipse1.setAttribute("fill", "#BC3324");
          ellipse2.setAttribute("fill", "#BC3324");
          ellipse3.setAttribute("fill", "#BC3324");
          number.setAttribute("fill", "white");
        } else {
          rectangle.setAttribute("fill", "none"); 
          ellipse1.setAttribute("fill", "none");
          ellipse2.setAttribute("fill", "none");
          ellipse3.setAttribute("fill", "none");
          ellipse4.setAttribute("fill", "none");
          number.setAttribute("fill", "#A51505");
        }
      });
    });
 
    document.addEventListener('DOMContentLoaded', function() {
      const checkbox = document.getElementById("checkbox6");
      const rectangle = document.getElementById("Rectangle6");
      const ellipse1 = document.getElementById("Ellipse6-1");
      const ellipse2 = document.getElementById("Ellipse6-2");
      const ellipse3 = document.getElementById("Ellipse6-3");
      const ellipse4 = document.getElementById("Ellipse6-4");
      const ellipse5 = document.getElementById("Ellipse6-5");
      const ellipse6 = document.getElementById("Ellipse6-6");
      const ellipse7 = document.getElementById("Ellipse6-7");
      const number = document.getElementById("number6");
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          rectangle.setAttribute("fill", "#1F1E1E"); 
          ellipse1.setAttribute("fill", "#1F1E1E");
          ellipse2.setAttribute("fill", "#1F1E1E");
          ellipse3.setAttribute("fill", "#1F1E1E");
          ellipse4.setAttribute("fill", "#1F1E1E");
          ellipse5.setAttribute("fill", "#1F1E1E");
          ellipse6.setAttribute("fill", "#1F1E1E");
          ellipse7.setAttribute("fill", "#1F1E1E");
          number.setAttribute("fill", "white");
          
        } else {
          rectangle.setAttribute("fill", "#none");
          ellipse1.setAttribute("fill", "#none");
          ellipse2.setAttribute("fill", "#none");
          ellipse3.setAttribute("fill", "#none");
          ellipse4.setAttribute("fill", "#none");
          ellipse5.setAttribute("fill", "#none");
          ellipse6.setAttribute("fill", "#none");
          ellipse7.setAttribute("fill", "#none");
          number.setAttribute("fill", "black");
        }
      });
  });
 
  document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById("checkbox7");
    const rectangle = document.getElementById("Rectangle7");
    const ellipse1 = document.getElementById("Ellipse7-1");
    const ellipse2 = document.getElementById("Ellipse7-2");
    const ellipse3 = document.getElementById("Ellipse7-3");
    const ellipse4 = document.getElementById("Ellipse7-4");
    const number = document.getElementById("number7");
 
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          rectangle.setAttribute("fill", "#BC3324");
          ellipse1.setAttribute("fill", "#BC3324");
          ellipse2.setAttribute("fill", "#BC3324");
          ellipse3.setAttribute("fill", "#BC3324");
          ellipse4.setAttribute("fill", "#BC3324");
          number.setAttribute("fill", "white");
        } else {
          rectangle.setAttribute("fill", "none"); 
          ellipse1.setAttribute("fill", "none");
          ellipse2.setAttribute("fill", "none");
          ellipse3.setAttribute("fill", "none");
          ellipse4.setAttribute("fill", "none");
          number.setAttribute("fill", "#A51505");
        }
      });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
      const checkbox = document.getElementById("checkbox1");
      const rectangle = document.getElementById("Rectangle1");
      const ellipse1 = document.getElementById("Ellipse1-1");
      const ellipse2 = document.getElementById("Ellipse1-2");
      const ellipse3 = document.getElementById("Ellipse1-3");
      const ellipse4 = document.getElementById("Ellipse1-4");
      const ellipse5 = document.getElementById("Ellipse1-5");
      const number = document.getElementById("number1");
  
        checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
            rectangle.setAttribute("fill", "#BC3324");
            ellipse1.setAttribute("fill", "#BC3324");
            ellipse2.setAttribute("fill", "#BC3324");
            ellipse3.setAttribute("fill", "#BC3324");
            ellipse4.setAttribute("fill", "#BC3324");
            ellipse5.setAttribute("fill", "#BC3324");
            number.setAttribute("fill", "white");
          } else {
            rectangle.setAttribute("fill", "none"); 
            ellipse1.setAttribute("fill", "none");
            ellipse2.setAttribute("fill", "none");
            ellipse3.setAttribute("fill", "none");
            ellipse4.setAttribute("fill", "none");
            ellipse5.setAttribute("fill", "none");
            number.setAttribute("fill", "#A51505");
          }
        });
      });
 
      document.addEventListener('DOMContentLoaded', function() {
        const checkbox = document.getElementById("checkbox4");
        const rectangle = document.getElementById("Rectangle4");
        const ellipse1 = document.getElementById("Ellipse4-1");
        const ellipse2 = document.getElementById("Ellipse4-2");
        const ellipse3 = document.getElementById("Ellipse4-3");
        const ellipse4 = document.getElementById("Ellipse4-4");
        const ellipse5 = document.getElementById("Ellipse4-5");
        const number = document.getElementById("number4");
    
          checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
              rectangle.setAttribute("fill", "#BC3324");
              ellipse1.setAttribute("fill", "#BC3324");
              ellipse2.setAttribute("fill", "#BC3324");
              ellipse3.setAttribute("fill", "#BC3324");
              ellipse4.setAttribute("fill", "#BC3324");
              ellipse5.setAttribute("fill", "#BC3324");
              number.setAttribute("fill", "white");
            } else {
              rectangle.setAttribute("fill", "none"); 
              ellipse1.setAttribute("fill", "none");
              ellipse2.setAttribute("fill", "none");
              ellipse3.setAttribute("fill", "none");
              ellipse4.setAttribute("fill", "none");
              ellipse5.setAttribute("fill", "none");
              number.setAttribute("fill", "#A51505");
            }
          });
        });
 
        document.addEventListener('DOMContentLoaded', function() {
          const checkbox = document.getElementById("checkbox2");
          const rectangle = document.getElementById("Rectangle2");
          const ellipse1 = document.getElementById("Ellipse2-1");
          const ellipse2 = document.getElementById("Ellipse2-2");
          const ellipse3 = document.getElementById("Ellipse2-3");
          const ellipse4 = document.getElementById("Ellipse2-4");
          const ellipse5 = document.getElementById("Ellipse2-5");
          const ellipse6 = document.getElementById("Ellipse2-6");
          const ellipse7 = document.getElementById("Ellipse2-7");
          const number = document.getElementById("number2");
          checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
              rectangle.setAttribute("fill", "#1F1E1E"); 
              ellipse1.setAttribute("fill", "#1F1E1E");
              ellipse2.setAttribute("fill", "#1F1E1E");
              ellipse3.setAttribute("fill", "#1F1E1E");
              ellipse4.setAttribute("fill", "#1F1E1E");
              ellipse5.setAttribute("fill", "#1F1E1E");
              ellipse6.setAttribute("fill", "#1F1E1E");
              ellipse7.setAttribute("fill", "#1F1E1E");
              number.setAttribute("fill", "white");
              
            } else {
              rectangle.setAttribute("fill", "#none");
              ellipse1.setAttribute("fill", "#none");
              ellipse2.setAttribute("fill", "#none");
              ellipse3.setAttribute("fill", "#none");
              ellipse4.setAttribute("fill", "#none");
              ellipse5.setAttribute("fill", "#none");
              ellipse6.setAttribute("fill", "#none");
              ellipse7.setAttribute("fill", "#none");
              number.setAttribute("fill", "black");
            }
          });
      });
 
      document.addEventListener('DOMContentLoaded', function() {
        const checkbox = document.getElementById("checkbox3");
        const rectangle = document.getElementById("Rectangle3");
        const ellipse1 = document.getElementById("Ellipse3-1");
        const ellipse2 = document.getElementById("Ellipse3-2");
        const ellipse3 = document.getElementById("Ellipse3-3");
        const ellipse4 = document.getElementById("Ellipse3-4");
        const ellipse5 = document.getElementById("Ellipse3-5");
        const ellipse6 = document.getElementById("Ellipse3-6");
        const ellipse7 = document.getElementById("Ellipse3-7");
        const number = document.getElementById("number3");
        checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
            rectangle.setAttribute("fill", "#1F1E1E"); 
            ellipse1.setAttribute("fill", "#1F1E1E");
            ellipse2.setAttribute("fill", "#1F1E1E");
            ellipse3.setAttribute("fill", "#1F1E1E");
            ellipse4.setAttribute("fill", "#1F1E1E");
            ellipse5.setAttribute("fill", "#1F1E1E");
            ellipse6.setAttribute("fill", "#1F1E1E");
            ellipse7.setAttribute("fill", "#1F1E1E");
            number.setAttribute("fill", "white");
            
          } else {
            rectangle.setAttribute("fill", "#none");
            ellipse1.setAttribute("fill", "#none");
            ellipse2.setAttribute("fill", "#none");
            ellipse3.setAttribute("fill", "#none");
            ellipse4.setAttribute("fill", "#none");
            ellipse5.setAttribute("fill", "#none");
            ellipse6.setAttribute("fill", "#none");
            ellipse7.setAttribute("fill", "#none");
            number.setAttribute("fill", "black");
          }
        });
    });
 
    function calculate() {
      const redCheckboxes = document.querySelectorAll('.event__reserving-check--red input[type="checkbox"]');
      const blackCheckboxes = document.querySelectorAll('.event__reserving-check input[type="checkbox"]');
      let redCount = 0;
      let blackCount = 0;
      let totalCost = 0;
    
      redCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          redCount += 1;
        }
      });
 
      blackCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          blackCount += 1;
        }
      });
      
      totalCost = blackCount * 1250 + redCount * 1400
 
      return {
        totalCost: totalCost,
        redCount: redCount,
        blackCount: blackCount
      };
    }
      
    
    const totalCostElement = document.getElementById('totalCost');
    const redDetailsElement = document.getElementById('redCostDetails');
    const blackDetailsElement = document.getElementById('blackCostDetails');  
    
    
    const redCheckboxes = document.querySelectorAll('.event__reserving-check--red input[type="checkbox"]');
    const blackCheckboxes = document.querySelectorAll('.event__reserving-check input[type="checkbox"]');    
    
 
    redCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const results = calculate();
        const redCount = results.redCount;
        
        let detailsHTMLred = '';
    
        if (redCount > 0) {
          const redDetail = `<p>${redCount} шт. | 1400 ₽ <span style="margin-left: 222px;"></span> ${redCount * 1400} ₽</p>`
          detailsHTMLred += redDetail;
        }
      
        redDetailsElement.innerHTML = detailsHTMLred; 
      });
    });
 
    blackCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const results = calculate();
        const blackCount = results.blackCount;
        
        let detailsHTMLblack = '';
 
        if (blackCount > 0) {
          const blackDetail = `<p>${blackCount} шт. | 1250 P <span style="margin-left: 222px;"></span> ${blackCount * 1250} ₽</p>`
          detailsHTMLblack += blackDetail;
        }
        
        blackDetailsElement.innerHTML = detailsHTMLblack; 
      });
    });
    redCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const results = calculate();
        const total = results.totalCost;
        totalCostElement.innerHTML = `Сумма <span style="margin-left: 35px;"></span> ${total} ₽`;
      });
    });
    blackCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const results = calculate();
        const total = results.totalCost;
        totalCostElement.innerHTML = `Сумма <span style="margin-left: 35px;"></span> ${total} ₽`;
      });
    });
 */

   const jsSelectric = $(".js-selectric");
   if (jsSelectric.length) {
     jsSelectric.selectric({
       nativeOnMobile: false
     });
   }

   const mobileMask = $('.js-mobileMask');
   if (mobileMask.length) {
     mobileMask.mask('+7 (000) 000 00 00', { placeholder: "+7 (___) ___ __ __" });
   }

   const dateField = $(".js-dateField");
   if (dateField.length) {
     const pickerInit = function (pick) {
       const dateInput = pick.find(".js-dateInput");
       const dateDay = pick.find(".js-dateDay");
       const dateMonth = pick.find(".js-dateMonth");
       const dateYear = pick.find(".js-dateYear");
       const dateConfig = {
         autoClose: true,
         minDate: new Date(),
         navTitles: {
           days: "MMMM <i>yyyy</i>"
         },
         onSelect: function ({ date }) {
           dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
           dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
           dateYear.val(date ? date.getFullYear() : "");
         }
       };
       new AirDatepicker(dateInput[0], dateConfig);
     };
     $.each(dateField, function (i) {
       pickerInit($(this));
     });
   }

   const eventForm = $('#js-eventForm');
   if (eventForm.length) {
     eventForm.validate({
       errorElement: "span"
     });
   }

   const subscribeForm = $("#js-subscribeForm");
   if (subscribeForm.length) {
     const subscribeAction = subscribeForm.attr("action");
     const subscribeEmail = subscribeForm.find("#js-subscribeEmail");
     subscribeForm.validate({
       errorElement: "span",
       submitHandler: function (form, event) {
         event.preventDefault();
         $.ajax({
           url: subscribeAction,
           method: "POST",
           data: {
             email: subscribeEmail.val()
           },
           success: function () {
             subscribeEmail.val("");
             subscribeEmail.blur();
             alert("Вы успешно подписались на рассылку новостей");
           },
           error: function () {
             alert("Что-то пошло не так, попробуйте еще раз");
           }
         });
       }
     });
     }

       
    

  })();

