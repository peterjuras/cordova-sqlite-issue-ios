function navigate() {
  window.location.href = window.location.href.replace('b.html', 'index.html');
}

document.addEventListener('deviceready', function() {
  document.getElementById('navigate-button').addEventListener('click', navigate);
})
