  function switchLang(wrapper, lang) {
    if (!wrapper) return;
    wrapper.querySelectorAll('.lang').forEach(el => el.classList.remove('active'));
    const target = wrapper.querySelector('.' + lang);
    if (target) target.classList.add('active');
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.multilang').forEach(wrapper => {
      // restaurer la langue si déjà choisie pour ce bloc (optionnel)
      const saved = localStorage.getItem('fbm_lang_' + wrapper.dataset.id);
      if (saved) switchLang(wrapper, saved);

      // attacher les boutons
      wrapper.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', function() {
          switchLang(wrapper, this.dataset.lang);
          try { 
            // sauvegarde avec un id unique par bloc
            localStorage.setItem('fbm_lang_' + (wrapper.dataset.id || 'default'), this.dataset.lang); 
          } catch(e) {}
        });
      });
    });
  });