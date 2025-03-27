
const aboutLink = document.querySelector('a[href="#about"]');
const exploreLink = document.querySelector('a[href="#explore"]');
const accountLink = document.querySelector('a[href="#account"]');
const collectionLink = document.querySelector('a[href="#collection"]');


aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'about.html'; 
});

exploreLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'explore.html';
});

accountLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'account.html'; 
});
accountLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'collection.html'; 
});