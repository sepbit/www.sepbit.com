document.addEventListener("DOMContentLoaded", () => {
  const yearNodes = document.querySelectorAll("[data-year]");
  const currentYear = new Date().getFullYear();

  yearNodes.forEach((node) => {
    node.textContent = String(currentYear);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  // Destaque do menu conforme a seção visível durante a rolagem (scrollspy)
  const tracked = Array.from(document.querySelectorAll(".navbar .nav-link"))
    .filter((link) => {
      const href = link.getAttribute("href") || "";
      return href.startsWith("#") && document.getElementById(href.slice(1));
    })
    .map((link) => ({
      link,
      section: document.getElementById(link.getAttribute("href").slice(1)),
    }));

  if (tracked.length) {
    const NAV_OFFSET = 96; // compensa a altura da navbar fixa
    let ticking = false;

    const updateActiveLink = () => {
      const scrollPos = window.scrollY + NAV_OFFSET;
      let active = null;

      // A última seção acima do ponto de rolagem define o item ativo
      tracked.forEach(({ link, section }) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPos) {
          active = link;
        }
      });

      tracked.forEach(({ link }) => link.classList.toggle("active", link === active));
      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveLink);
      }
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateActiveLink();
  }
});
