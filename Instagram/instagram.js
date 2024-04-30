document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds
  });