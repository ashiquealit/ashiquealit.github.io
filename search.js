(function () {
  // Runs only on pages that contain a .item-list (writing.html / talks.html)
  function init() {
    const lists = document.querySelectorAll("ul.item-list");
    if (!lists.length) return;

    // Collect all list items across every item-list on the page
    const items = [];
    lists.forEach((list) => {
      Array.from(list.children).forEach((li) => {
        if (li.tagName !== "LI") return;
        items.push({ el: li, text: (li.textContent || "").toLowerCase(),
                     original: li.innerHTML });
      });
    });
    if (!items.length) return;

    // --- Build the search box ---
    const wrap = document.createElement("div");
    wrap.className = "site-search-wrap";
    wrap.style.cssText = "margin:0 0 1.5rem;position:relative;max-width:520px;";
    wrap.innerHTML =
      '<input id="site-search-input" type="search" ' +
      'placeholder="Filter this list…" ' +
      'style="width:100%;padding:10px 40px 10px 14px;border:1px solid #d1d5db;' +
      'border-radius:10px;font-size:1rem;outline:none;transition:border-color .15s;" />' +
      '<span style="position:absolute;right:14px;top:50%;transform:translateY(-50%);' +
      'color:#94a3b8;pointer-events:none;">🔎</span>' +
      '<p id="site-search-count" style="margin:6px 2px 0;font-size:.85rem;color:#64748b;"></p>';

    // Insert the box right after the page's main heading
    const heading = document.querySelector("main h2, h2");
    if (heading && heading.parentNode) {
      heading.parentNode.insertBefore(wrap, heading.nextSibling);
    } else {
      (document.querySelector("main") || document.body).prepend(wrap);
    }

    const input = wrap.querySelector("#site-search-input");
    const count = wrap.querySelector("#site-search-count");
    input.addEventListener("focus", () => (input.style.borderColor = "#2563eb"));
    input.addEventListener("blur", () => (input.style.borderColor = "#d1d5db"));

    function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

    function filter(q) {
      const query = q.trim().toLowerCase();
      const terms = query.split(/\s+/).filter(Boolean);
      let shown = 0;

      items.forEach((it) => {
        const match = terms.every((t) => it.text.includes(t));
        it.el.style.display = match || !terms.length ? "" : "none";
        if (match || !terms.length) shown++;

        // Highlight matches (restore original first)
        it.el.innerHTML = it.original;
        if (terms.length && match) {
          const re = new RegExp("(" + terms.map(escapeRe).join("|") + ")", "ig");
          highlightTextNodes(it.el, re);
        }
      });

      // Hide list groups (and their sub-headings) that have no visible items
      document.querySelectorAll("ul.item-list").forEach((list) => {
        const anyVisible = Array.from(list.children)
          .some((li) => li.tagName === "LI" && li.style.display !== "none");
        list.style.display = anyVisible ? "" : "none";
      });

      count.textContent = terms.length
        ? shown + (shown === 1 ? " result" : " results")
        : "";
    }

    function highlightTextNodes(root, re) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const targets = [];
      let n;
      while ((n = walker.nextNode())) {
        if (re.test(n.nodeValue)) targets.push(n);
      }
      targets.forEach((node) => {
        const span = document.createElement("span");
        span.innerHTML = node.nodeValue.replace(re,
          '<mark style="background:#fde68a;padding:0 1px;">$1</mark>');
        node.parentNode.replaceChild(span, node);
      });
    }

    let timer;
    input.addEventListener("input", (e) => {
      clearTimeout(timer);
      const v = e.target.value;
      timer = setTimeout(() => filter(v), 80);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
