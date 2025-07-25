function atualizarHora() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    horas = (horas < 10 ? "0" : "") + horas;
    minutos = (minutos < 10 ? "0" : "") + minutos;
    segundos = (segundos < 10 ? "0" : "") + segundos;

    var horario = horas + ":" + minutos + ":" + segundos;

    document.getElementById("hora").innerHTML = horario;
}

setInterval(atualizarHora, 1000);
atualizarHora();

document.getElementById('toggle-theme').onclick = function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fa-solid fa-sun';
        icon.style.color = '#FFD43B';
    } else {
        icon.className = 'fa-solid fa-moon';
        icon.style.color = '#ffffff';
    }
};
document.getElementById('sound-btn').onclick = function() {
    const img = document.getElementById('sound-img');
    if (img.src.includes('sound.png')) {
        img.src = 'img/sound-off.png';
    } else {
        img.src = 'img/sound.png';
    }
};

document.getElementById('sound-btn').onclick = function() {
    const img = document.getElementById('sound-img');
    const player = document.getElementById('player');
    if (player.muted) {
        player.muted = false;
        img.src = 'img/sound.png';
    } else {
        player.muted = true;
        img.src = 'img/sound-off.png';
    }
};
const player = document.getElementById('player');
player.volume = 0.2;
player.play();

document.getElementById('radio-img').onclick = function() {
    const player = document.getElementById('player');
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
};

 document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
  fixedWeekCount: false,     // Remove as semanas extras
  expandRows: true,          // Expande a altura conforme o conteúdo
  locale: 'pt-br',
  height: 'auto', 
      selectable: true,
      showNonCurrentDates: false,
      dateClick: function(info) {
        const title = prompt('O que você quer adicionar para o dia ' + info.dateStr + '?');
        if (title) {
          calendar.addEvent({
            title: title,
            start: info.dateStr,
            allDay: true
          });
        }
      }
    });
    calendar.render();
  });

    const domain = "meet.jit.si";
    const options = {
      roomName: "TCCSalaDaBarbara",
      width: "100%",
      height: 500, // altura real do conteúdo (maior que a box pra gerar scroll)
      parentNode: document.querySelector('#jitsi-container'),
      configOverwrite: {
        startWithVideoMuted: true,
        startWithAudioMuted: false
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_BRAND_WATERMARK: false,
        TOOLBAR_BUTTONS: [
          'microphone', 'hangup', 'chat', 'settings'
        ]
      }
    };
    const api = new JitsiMeetExternalAPI(domain, options);

    