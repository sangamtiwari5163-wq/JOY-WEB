/**
 * load-components.js — Joy Logistics Exim India Pvt Ltd
 * ─────────────────────────────────────────────────────────────
 * Injects shared navbar and footer into pages that include
 * placeholder divs:
 *   <div id="navbar-placeholder"></div>  — top of <body>
 *   <div id="footer-placeholder"></div>  — bottom of <body>
 *
 * Active nav link is highlighted automatically based on current page.
 * ─────────────────────────────────────────────────────────────
 */

(function () {

  // ── PATH HELPERS ────────────────────────────────────────────
  // Detect if we are in pages/ subdirectory or project root
  const _inPages = window.location.pathname.includes('/pages/');
  // Root path prefix: '' from root, '../' from pages/
  const _root = _inPages ? '../' : '';
  // Helper to build path to a page inside pages/
  const _p = (file) => _inPages ? file : 'pages/' + file;

  // ── 1. SHARED NAVBAR HTML ──────────────────────────────────
  const NAVBAR_HTML = `
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 text-white">
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <a href="${_root}index.html" class="flex items-center gap-3 group text-2xl font-bold tracking-wide text-white" aria-label="Joy Logistics Home">
      <img src="${_root}assets/logos/logo.png" alt="Joy Logistics Exim India Pvt Ltd Logo" class="h-10 w-auto object-contain invert brightness-0 contrast-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
      <span class="group-hover:text-logisticsOrange transition duration-200">JOY LOGISTICS<span class="text-logisticsOrange">.</span></span>
    </a>

    <nav class="hidden md:flex space-x-8 text-sm font-medium tracking-wide items-center">
      <a href="${_root}index.html"         data-page="index"         class="nav-link hover:text-logisticsOrange transition">Home</a>
      <a href="${_root}index.html#aboutus" data-page="about"         class="nav-link text-gray-200 hover:text-white transition">About Us</a>

      <div class="relative dropdown py-2">
        <a href="${_root}index.html#services" data-page="services"
           class="nav-link text-gray-200 hover:text-white transition flex items-center gap-1 cursor-pointer"
           id="desktop-services-btn" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false">
          Services <i class="fa-solid fa-chevron-down text-xs pt-0.5"></i>
        </a>
        <div class="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 hidden dropdown-menu overflow-hidden z-50"
             role="menu" aria-labelledby="desktop-services-btn">
          <a href="${_p('project-cargo.html')}"     data-page="project-cargo"     role="menuitem" class="dropdown-link block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-xs font-semibold text-logisticsBlue hover:text-logisticsOrange transition">PROJECT CARGO</a>
          <a href="${_p('sea-freight.html')}"       data-page="sea-freight"       role="menuitem" class="dropdown-link block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-xs font-semibold text-logisticsBlue hover:text-logisticsOrange transition">SEA FREIGHT</a>
          <a href="${_p('air-freight.html')}"       data-page="air-freight"       role="menuitem" class="dropdown-link block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-xs font-semibold text-logisticsBlue hover:text-logisticsOrange transition">AIR FREIGHT</a>
          <a href="${_p('local-transport.html')}"   data-page="local-transport"   role="menuitem" class="dropdown-link block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-xs font-semibold text-logisticsBlue hover:text-logisticsOrange transition">LOCAL TRANSPORT</a>
          <a href="${_p('custom-clearance.html')}"  data-page="custom-clearance"  role="menuitem" class="dropdown-link block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-xs font-semibold text-logisticsBlue hover:text-logisticsOrange transition">CUSTOM CLEARANCE</a>
          <a href="${_p('household-goods.html')}"   data-page="household-goods"   role="menuitem" class="dropdown-link block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-xs font-semibold text-logisticsBlue hover:text-logisticsOrange transition">HOUSEHOLD GOODS</a>
          <a href="${_p('delivery-services.html')}" data-page="delivery-services" role="menuitem" class="dropdown-link block px-4 py-3 hover:bg-gray-50 text-xs font-semibold text-logisticsBlue hover:text-logisticsOrange transition">DELIVERY SERVICES</a>
        </div>
      </div>

      <a href="${_p('get-quote.html')}" data-page="get-quote" class="nav-link text-gray-200 hover:text-white transition">Get a Quote</a>
      <a href="${_p('contact.html')}"   data-page="contact"   class="nav-link text-gray-200 hover:text-white transition">Contact</a>
    </nav>

    <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu" aria-controls="mobile-menu" aria-expanded="false">
      <i id="hamburger-icon" class="fa-solid fa-bars text-xl"></i>
    </button>
  </div>

  <div id="mobile-menu" class="md:hidden bg-logisticsBlue/95 backdrop-blur-sm border-t border-white/10">
    <div class="px-6 py-6 flex flex-col gap-4 text-sm font-medium overflow-y-auto max-h-[calc(100vh-70px)]">
      <a href="${_root}index.html"         data-page="index"       class="mobile-link hover:text-logisticsOrange transition">Home</a>
      <a href="${_root}index.html#aboutus" data-page="about"       class="mobile-link text-gray-300 hover:text-white transition">About Us</a>
      <a href="${_root}index.html#services"data-page="services"    class="mobile-link text-gray-300 hover:text-white transition">Services</a>
      <a href="${_p('get-quote.html')}"     data-page="get-quote"   class="mobile-link text-gray-300 hover:text-white transition">Get a Quote</a>
      <a href="${_p('contact.html')}"       data-page="contact"     class="mobile-link text-gray-300 hover:text-white transition">Contact</a>
      <div class="pl-4 flex flex-col gap-3 border-l border-logisticsOrange/40 text-xs text-gray-400">
        <a href="${_p('project-cargo.html')}"     data-page="project-cargo"     class="mobile-sub hover:text-logisticsOrange transition">→ Project Cargo</a>
        <a href="${_p('sea-freight.html')}"       data-page="sea-freight"       class="mobile-sub hover:text-logisticsOrange transition">→ Sea Freight</a>
        <a href="${_p('air-freight.html')}"       data-page="air-freight"       class="mobile-sub hover:text-logisticsOrange transition">→ Air Freight</a>
        <a href="${_p('local-transport.html')}"   data-page="local-transport"   class="mobile-sub hover:text-logisticsOrange transition">→ Local Transport</a>
        <a href="${_p('custom-clearance.html')}"  data-page="custom-clearance"  class="mobile-sub hover:text-logisticsOrange transition">→ Custom Clearance</a>
        <a href="${_p('household-goods.html')}"   data-page="household-goods"   class="mobile-sub hover:text-logisticsOrange transition">→ Household Goods</a>
        <a href="${_p('delivery-services.html')}" data-page="delivery-services" class="mobile-sub hover:text-logisticsOrange transition">→ Delivery Services</a>
      </div>
    </div>
  </div>
</header>`;

  // ── 2. SHARED FOOTER HTML ──────────────────────────────────
  const FOOTER_HTML = `
<footer class="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/60">

      <div class="lg:col-span-4 space-y-5">
        <a href="${_root}index.html" class="flex items-center gap-3 group" aria-label="Joy Logistics Home">
          <img src="${_root}assets/logos/logo.png" alt="Joy Logistics Exim India Pvt Ltd Logo"
               class="h-12 w-auto object-contain invert brightness-0 contrast-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]" loading="lazy">
          <span class="text-white font-bold text-lg leading-tight tracking-wide group-hover:text-logisticsOrange transition duration-200">
            Joy Logistics Exim<br>(India) Pvt. Ltd.
          </span>
        </a>
        <p class="text-sm text-gray-400 leading-relaxed max-w-sm">
          Established 2009, Joy Logistics Exim (India) Pvt. Ltd. is a trusted name in international freight forwarding and integrated logistics solutions across India and beyond.
        </p>
      </div>

      <div class="lg:col-span-2 space-y-4">
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="${_root}index.html"          class="hover:text-logisticsOrange transition duration-200">Home</a></li>
          <li><a href="${_root}index.html#services" class="hover:text-logisticsOrange transition duration-200">Services</a></li>
          <li><a href="${_root}index.html#aboutus"  class="hover:text-logisticsOrange transition duration-200">Why Choose Us</a></li>
          <li><a href="${_p('contact.html')}"        class="hover:text-logisticsOrange transition duration-200">Contact</a></li>
        </ul>
      </div>

      <div class="lg:col-span-3 space-y-4">
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="${_p('project-cargo.html')}"     class="hover:text-logisticsOrange transition duration-200">Project Cargo</a></li>
          <li><a href="${_p('air-freight.html')}"       class="hover:text-logisticsOrange transition duration-200">Air Freight</a></li>
          <li><a href="${_p('sea-freight.html')}"       class="hover:text-logisticsOrange transition duration-200">Sea Freight</a></li>
          <li><a href="${_p('local-transport.html')}"   class="hover:text-logisticsOrange transition duration-200">Local Transport</a></li>
          <li><a href="${_p('custom-clearance.html')}"  class="hover:text-logisticsOrange transition duration-200">Custom Clearance</a></li>
          <li><a href="${_p('delivery-services.html')}" class="hover:text-logisticsOrange transition duration-200">Delivery Services</a></li>
        </ul>
      </div>

      <div class="lg:col-span-3 space-y-4">
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider">Reach Us</h4>
        <ul class="space-y-4 text-sm">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-location-dot text-logisticsOrange mt-1 text-base flex-shrink-0"></i>
            <span class="text-gray-400 leading-relaxed">Mohan Coop. Industrial Estate,<br>New Delhi – 110044</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-phone text-logisticsOrange text-base flex-shrink-0"></i>
            <a href="tel:+911140524933" class="hover:text-logisticsOrange transition duration-200">+91-11-4052-4933</a>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-mobile-screen text-logisticsOrange text-base flex-shrink-0"></i>
            <a href="tel:+919971788905" class="hover:text-logisticsOrange transition duration-200">+91-99717-88905</a>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-envelope text-logisticsOrange text-base flex-shrink-0"></i>
            <a href="mailto:m2khw@joylogis.com" class="hover:text-logisticsOrange transition duration-200 break-all">m2khw@joylogis.com</a>
          </li>
        </ul>
      </div>

    </div>
    <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
      <p>&copy; 2026 <strong class="text-gray-400 font-medium">Joy Logistics Exim (India) Pvt. Ltd.</strong>
         &nbsp;·&nbsp; All Rights Reserved &nbsp;·&nbsp; Reg No: 717-88-01139</p>
      <span class="tracking-wide text-gray-500">New Delhi &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; Bangalore &nbsp;·&nbsp; Chennai</span>
    </div>
  </div>
</footer>`;

  // ── 3. INJECT NAVBAR ──────────────────────────────────────
  const navbarSlot = document.getElementById('navbar-placeholder');
  // Track whether THIS file injected the navbar (to avoid duplicate event listeners
  // on pages that already have hardcoded navbars with their own inline scripts)
  const navWasInjected = !!navbarSlot;
  if (navbarSlot) {
    navbarSlot.outerHTML = NAVBAR_HTML;
  }

  // ── 4. INJECT FOOTER ──────────────────────────────────────
  const footerSlot = document.getElementById('footer-placeholder');
  if (footerSlot) {
    footerSlot.outerHTML = FOOTER_HTML;
  }

  // ── 5. ACTIVE NAV HIGHLIGHT ───────────────────────────────
  // Detect current page from filename
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const pageKey = currentFile.replace('.html', '') || 'index';

  // Service pages → highlight "Services" in desktop nav
  const servicePages = ['project-cargo','sea-freight','air-freight',
                        'local-transport','custom-clearance','household-goods','delivery-services'];

  document.querySelectorAll('.nav-link').forEach(link => {
    // Never touch links inside the slider track
    if (link.closest('.slider-track')) return;
    const pg = link.getAttribute('data-page');
    const isService = servicePages.includes(pageKey);
    if (pg === pageKey || (isService && pg === 'services')) {
      link.classList.add('text-logisticsOrange');
      link.classList.remove('text-gray-200');
    }
  });

  // Dropdown item highlight
  document.querySelectorAll('.dropdown-link').forEach(link => {
    if (link.closest('.slider-track')) return;
    if (link.getAttribute('data-page') === pageKey) {
      link.classList.add('text-logisticsOrange', 'bg-gray-50');
    }
  });

  // Mobile nav highlight
  document.querySelectorAll('.mobile-link, .mobile-sub').forEach(link => {
    if (link.closest('.slider-track')) return;
    const pg = link.getAttribute('data-page');
    const isService = servicePages.includes(pageKey);
    if (pg === pageKey || (isService && pg === 'services')) {
      link.classList.add('text-logisticsOrange', 'font-semibold');
    }
  });

  // ── 6-8 only run if THIS file injected the navbar.
  // Pages with hardcoded navbars handle their own events via inline scripts.
  if (!navWasInjected) return;

  // ── 6. MOBILE MENU TOGGLE ─────────────────────────────────
  // (runs after navbar is injected into DOM)
  const menuBtn       = document.getElementById('mobile-menu-btn');
  const mobileMenu    = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');

  if (menuBtn && mobileMenu && hamburgerIcon) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburgerIcon.className = isOpen ? 'fa-solid fa-xmark text-xl' : 'fa-solid fa-bars text-xl';
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburgerIcon.className = 'fa-solid fa-bars text-xl';
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── 7. DESKTOP DROPDOWN KEYBOARD ACCESSIBILITY (Issue 18) ────
  const svcBtn  = document.getElementById('desktop-services-btn');
  const svcMenu = svcBtn ? svcBtn.nextElementSibling : null;
  if (svcBtn && svcMenu) {
    const openMenu  = () => { svcMenu.classList.remove('hidden'); svcBtn.setAttribute('aria-expanded', 'true');  };
    const closeMenu = () => { svcMenu.classList.add('hidden');    svcBtn.setAttribute('aria-expanded', 'false'); };
    svcBtn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        svcMenu.classList.contains('hidden') ? (openMenu(), svcMenu.querySelector('a')?.focus()) : closeMenu();
      } else if (e.key === 'Escape') {
        closeMenu(); svcBtn.focus();
      }
    });
    svcMenu.addEventListener('keydown', e => {
      const items = [...svcMenu.querySelectorAll('a')];
      const idx   = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx + 1) % items.length]?.focus(); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }
      if (e.key === 'Escape')    { closeMenu(); svcBtn.focus(); }
      if (e.key === 'Tab' && !e.shiftKey && idx === items.length - 1) { closeMenu(); }
    });
    document.addEventListener('click', e => {
      if (!svcBtn.closest('.dropdown').contains(e.target)) closeMenu();
    });
  }

 // ── 8. SCROLL-BASED NAVBAR STYLE (ULTIMATE DIRECT STYLE FIX) ──
  const header = document.getElementById('main-header');
  if (header) {
    function handleScroll() {
      if (window.scrollY > 50) {
        // Scrolled down — apply solid dark navy background
        header.style.backgroundColor = "#0f172a";
        header.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.3)";
        header.style.transition = "all 0.3s ease";
      } else {
        // At top — transparent background
        header.style.backgroundColor = "#0A192F";
        header.style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on page load to set initial state
  }