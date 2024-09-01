document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      header: {
            left: 'prev, next, today',
            center: 'title',
            right: 'dayGridMonth, dayGridWeek, dayGridDay, listWeek'
        },
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'In Flames 19:00HS Lugar: Arena Sur',
                start: '2023-11-09',
                end:'2023-11-10'
            },
            {
                title: 'Gojira & Mastodon 19:00HS Lugar: Movistar Arena',
                start: '2023-11-17',
                end:'2023-11-17'
            },
            {
                title: 'Roger Waters 20:00HS Lugar: Estadio Mas Monumental',
                start: '2023-11-22',
                end:'2023-11-22'
            },
            {
                title: 'Red Hot Chili Peppers 19:00HS Lugar: Estadio Mas Monumental',
                start: '2023-11-24',
                end:'2023-11-24'
            },
            {
                title: 'Bad Religion 19:00HS Lugar: Microestadio De Ferro',
                start: '2023-11-28',
                end:'2023-11-28'
            },
            {
                title: 'Primavera Sound Todo el dia Lugar: Parque Sarmiento',
                start: '2023-11-25',
                end:'2023-11-27'
            },
            {
                title: 'Rata Blanca 21:00HS Lugar: Luna Park',
                start: '2023-12-02',
                end:'2023-12-02'
            },
            {
                title: 'Damas Gratis 20:00HS Lugar: Luna Park',
                start: '2023-12-07',
                end:'2023-12-07'
            },
            {
                title: 'Dante Spinetta 21:00HS Lugar: Teatro Gran Rex',
                start: '2023-12-14',
                end:'2023-12-14'
            },
            {
                title: 'Airbag 20:30HS Lugar: Estadio Velez',
                start: '2023-12-15',
                end:'2023-12-15'
            },
            {
                title: 'Santiago Motorizado 20:30HS Lugar: Centro Cultural Konex',
                start: '2023-12-20',
                end:'2023-12-20'
            },
            {
                title: 'Navidad',
                start: '2023-12-25',
                end:'2023-12-25'
            },
        ]
    }); 

    calendar.render();
  });
  


