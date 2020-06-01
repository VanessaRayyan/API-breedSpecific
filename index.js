'use strict';


function getDogImage() {
  let breed = $('#breed').val().toLowerCase();
  fetch('https://dog.ceo/api/breed/'+breed+'/images/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status == 'error') {
    $('.results').html(`<p class="errorMsg">${responseJson.message}</p>`);
  } else {
      $('.results').html(
        `<img src="${responseJson.message}" class="results-img">`
      );
  }
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
