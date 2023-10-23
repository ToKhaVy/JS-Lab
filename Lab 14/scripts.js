"use strict";

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "4dcfbae1fcf491ed3f5d20a7256b764c";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

  /* Your code: check list arrays */

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      // console.log(data);
      // console.log({ main, name, sys, weather });
      // console.log(icon);
      list.innerHTML += `<li class="city">
        <h2 class="city-name">${name} <sup>${sys.country}</sup></h2>
        <div class="city-temp">${main.temp}<sup>°C</sup></div>
        <figure class=".city-icon">
          <img src=${icon} alt="" />
          <figcaption>${weather[0].main}</figcaption>
        </figure>
      </li>`;
      /* Your code: process element */
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});
