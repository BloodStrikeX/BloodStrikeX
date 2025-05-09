
    function toggleMenu() {
      const menu = document.getElementById('menu');
      const toggle = document.getElementById('menuToggle');
      
      // تغییر حالت نمایش منو
      const isMenuOpen = menu.style.display === 'flex';
      menu.style.display = isMenuOpen ? 'none' : 'flex';
      
      // تغییر آیکون ☰ به X
      if (isMenuOpen) {
        toggle.textContent = '☰'; // بازگشت به آیکون ☰
        toggle.classList.remove('open'); // حذف کلاس برای استایل
      } else {
        toggle.textContent = '❌'; // تغییر به ایکس قرمز
        toggle.classList.add('open'); // اضافه کردن کلاس برای استایل
      }
    }

    // بستن منو در کلیک بیرون از آن
    document.addEventListener('click', function(e) {
      const menu = document.getElementById('menu');
      const toggle = document.getElementById('menuToggle');
      
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.style.display = 'none';
        toggle.textContent = '☰'; // بازگشت به آیکون ☰
        toggle.classList.remove('open'); // حذف کلاس
      }
    });
  


  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  }

  document.addEventListener('click', function(e) {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.style.display = 'none';
    }
  });



  const container = document.getElementById("lava-particles");

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");
    particle.classList.add("lava-particle");

    // مکان شروع تصادفی در اطراف کارت (بالا، پایین، چپ، راست)
    const side = Math.floor(Math.random() * 4);
    let top, left;

    switch (side) {
      case 0: // top
        top = "-10px";
        left = Math.random() * 100 + "%";
        break;
      case 1: // bottom
        top = "100%";
        left = Math.random() * 100 + "%";
        break;
      case 2: // left
        top = Math.random() * 100 + "%";
        left = "-10px";
        break;
      case 3: // right
        top = Math.random() * 100 + "%";
        left = "100%";
        break;
    }

    particle.style.top = top;
    particle.style.left = left;

    // حرکت به سمت داخل کارت
    const deltaX = (Math.random() * 100 - 50) + "px";
    const deltaY = (Math.random() * 100 - 50) + "px";
    particle.style.setProperty("--x", deltaX);
    particle.style.setProperty("--y", deltaY);

    particle.style.animationDelay = Math.random() * 2 + "s";
    particle.style.backgroundColor = ['#ff4500', '#ffaa33', '#ff6600'][Math.floor(Math.random() * 3)];

    container.appendChild(particle);
  }



    const canvas = document.getElementById("fireCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const maxParticles = window.innerWidth < 768 ? 100 : 250;

    class Particle {
      constructor(fire = false) {
        this.fire = fire;
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2;
        this.speedY = this.fire ? Math.random() * 2 + 1 : Math.random() * 1 + 0.5;
        this.speedX = this.fire ? (Math.random() - 0.5) * 1 : (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.5 + 0.5;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > canvas.height) this.y = 0;
        if (this.x > canvas.width || this.x < 0) this.x = Math.random() * canvas.width;
      }
      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        if (this.fire) {
          gradient.addColorStop(0, `rgba(255, ${Math.floor(Math.random() * 100 + 50)}, 0, ${this.alpha})`);
          gradient.addColorStop(1, `rgba(255, 0, 0, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.alpha})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        }

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      while (particles.length < maxParticles) {
        particles.push(new Particle(false)); // Snow
        particles.push(new Particle(true));  // Firey flake
      }
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  
