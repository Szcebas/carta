document.querySelector('.heart').addEventListener('click', function() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'carta.pdf', true);// Asegurate que sea el mismo nombre de tu carta, al nombre escrito en esta linea.
  xhr.responseType = 'blob';
  xhr.onload = function() {
    if (xhr.status === 200) {
      const blob = xhr.response;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'ParaMiPrincesa(Sonia).pdf';// Nombre con el que se descarga la carta
      link.click();
      window.URL.revokeObjectURL(link.href);
    } else {
      console.error('No se pudo descargar el archivo.');
    }
  };
  xhr.send();
});

// Definir la fecha y hora objetivo
var targetDate = new Date('December 10, 2024 03:32:00').getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = targetDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent = `Carta disponible en: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x); // Detener el temporizador
    document.getElementById("press").textContent = "❤️Tap the heart❤️";
    document.getElementById("countdown").textContent = "¡Nueva carta disponible!";
    //localStorage.removeItem('countDownDate'); // Limpiar el almacenamiento si el tiempo ha expirado
  }
}, 1000);
