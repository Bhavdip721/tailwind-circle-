document.addEventListener("DOMContentLoaded", function () {

  const titles = document.querySelectorAll('[id="footer__nav"]');

  titles.forEach(title => {

    title.addEventListener("click", function () {

      const list = this.nextElementSibling;

      // only toggle on mobile
      if (window.innerWidth < 768) {
        list.classList.toggle("hidden");
        list.classList.toggle("grid");
      list.classList.toggle("grid-cols-2");
    
      }

    });

  });

});