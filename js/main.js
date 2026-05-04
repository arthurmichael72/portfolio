/* ===================================================
   MICHAEL ARTHUR — PORTFOLIO JS
   Accordion cards, nested dropdowns, scroll reveal, nav
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- NAV: scroll shadow + mobile toggle ---
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = navToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });


  // --- ACCORDION CARDS ---
  document.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.card');
      const body = card.querySelector('.card-body');
      const inner = body.querySelector('.card-body-inner');
      const isOpen = card.classList.contains('open');

      // Close all other cards in the same category
      const siblings = card.closest('.card-grid').querySelectorAll('.card');
      siblings.forEach(sib => {
        if (sib !== card && sib.classList.contains('open')) {
          sib.classList.remove('open');
          sib.querySelector('.card-body').style.maxHeight = '0';
          // Also close nested dropdowns
          sib.querySelectorAll('.card-dropdown.open').forEach(dd => {
            dd.classList.remove('open');
            dd.querySelector('.card-dropdown-content').style.maxHeight = '0';
          });
        }
      });

      if (isOpen) {
        card.classList.remove('open');
        body.style.maxHeight = '0';
      } else {
        card.classList.add('open');
        body.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });


  // --- NESTED DROPDOWNS inside cards ---
  document.querySelectorAll('.card-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = toggle.closest('.card-dropdown');
      const content = dropdown.querySelector('.card-dropdown-content');
      const contentInner = content.querySelector('.card-dropdown-content-inner');
      const isOpen = dropdown.classList.contains('open');

      if (isOpen) {
        dropdown.classList.remove('open');
        content.style.maxHeight = '0';
      } else {
        dropdown.classList.add('open');
        content.style.maxHeight = contentInner.scrollHeight + 'px';
      }

      // Recalculate parent card body height
      const cardBody = dropdown.closest('.card-body');
      const cardInner = cardBody.querySelector('.card-body-inner');
      requestAnimationFrame(() => {
        cardBody.style.maxHeight = cardInner.scrollHeight + 'px';
      });
    });
  });


  // --- SCROLL REVEAL ---
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));


  // --- SMOOTH SCROLL for nav anchors ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
