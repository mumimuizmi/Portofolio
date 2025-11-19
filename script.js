// Toggle menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    (function(){
      emailjs.init("5FjlumIPc2shZV4BT"); // ganti dengan user id kamu
    })();

    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();

      emailjs.sendForm('service_jrdmpgd', 'template_wkwyduc', this)
        .then(() => {
          alert('Pesan berhasil dikirim!');
        }, (error) => {
          alert('Gagal mengirim pesan: ' + JSON.stringify(error));
        });
    });

    // Smooth scroll untuk semua link dengan hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          // Tutup menu mobile jika terbuka
          if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
          }
          
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });