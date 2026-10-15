/* Örnek proje kartlarını kategori ve seviyeye göre süzer.
   Sayfada .filter-bar varsa çalışır; JS kapalıysa tüm kartlar görünür kalır. */
(function () {
  function init() {
    var bar = document.querySelector(".filter-bar");
    if (!bar) return;
    var buttons = bar.querySelectorAll("button[data-filter]");
    var cards = document.querySelectorAll(".ccard[data-cat]");
    var sections = document.querySelectorAll("[data-section]");
    var empty = document.querySelector(".filter-empty");
    var state = { cat: "all", lvl: "all" };

    function apply() {
      var shown = 0;
      cards.forEach(function (c) {
        var ok = (state.cat === "all" || c.dataset.cat === state.cat) &&
                 (state.lvl === "all" || c.dataset.lvl === state.lvl);
        c.hidden = !ok;
        if (ok) shown++;
      });
      sections.forEach(function (s) {
        s.hidden = !s.querySelector(".ccard:not([hidden])");
      });
      if (empty) empty.hidden = shown !== 0;
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var group = b.dataset.group;
        state[group] = b.dataset.filter;
        bar.querySelectorAll('button[data-group="' + group + '"]').forEach(function (x) {
          x.setAttribute("aria-pressed", x === b ? "true" : "false");
        });
        apply();
      });
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
