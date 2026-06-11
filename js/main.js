/**
 * main.js — Joy Logistics Exim India Pvt Ltd
 * Production v4 · 2026-06-10
 * ─────────────────────────────────────────────────────────────────
 * - Client-side form validation with accessible error messages
 * - Form submit state handlers (loading / success)
 * - Lazy image intersection observer
 * ─────────────────────────────────────────────────────────────────
 */
(function () {
    'use strict';

    /* ── CSS CLASS CONSTANTS ────────────────────────────────────── */
    var CSS_INVALID = ['border-red-500','ring-1','ring-red-500'];
    var CSS_VALID   = ['border-logisticsOrange','ring-1','ring-logisticsOrange'];
    var CSS_DEFAULT = ['border-slate-700'];

    /* ── HELPERS ────────────────────────────────────────────────── */
    function getErrorEl(input) {
        var errId = input.id + '-error';
        var el    = document.getElementById(errId);
        if (!el) {
            el = document.createElement('span');
            el.id        = errId;
            el.className = 'text-red-400 text-xs mt-1 hidden';
            el.setAttribute('role', 'alert');
            el.setAttribute('aria-live', 'polite');
            input.parentNode.appendChild(el);
            input.setAttribute('aria-describedby', errId);
        }
        return el;
    }

    function showError(input, msg) {
        CSS_VALID.concat(CSS_DEFAULT).forEach(function(c){ input.classList.remove(c); });
        CSS_INVALID.forEach(function(c){ input.classList.add(c); });
        var el = getErrorEl(input);
        el.textContent = msg;
        el.classList.remove('hidden');
    }

    function clearError(input) {
        CSS_INVALID.concat(CSS_DEFAULT).forEach(function(c){ input.classList.remove(c); });
        var el = getErrorEl(input);
        if (el) { el.classList.add('hidden'); el.textContent = ''; }
    }

    function getErrorMsg(input) {
        var val = (input.value || '').trim();
        if (input.required && !val) return 'This field is required.';
        if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
            return 'Please enter a valid email address.';
        if (input.type === 'tel' && val && !/^[\d\s\+\-\(\)]{7,20}$/.test(val))
            return 'Please enter a valid phone number.';
        if (input.tagName === 'SELECT' && input.required && !val)
            return 'Please select an option.';
        return '';
    }

    function validateField(input) {
        var msg = getErrorMsg(input);
        if (msg) { showError(input, msg); return false; }
        clearError(input);
        return true;
    }

    function validateForm(form) {
        var fields       = Array.from(form.querySelectorAll('input,textarea,select'));
        var firstInvalid = null;
        var allValid     = true;
        fields.forEach(function(f) {
            if (!validateField(f)) {
                allValid = false;
                if (!firstInvalid) firstInvalid = f;
            }
        });
        if (firstInvalid) firstInvalid.focus();
        return allValid;
    }

    /* ── FORM INIT ──────────────────────────────────────────────── */
    function initForm(formId, btnId, loadingHtml) {
        var form = document.getElementById(formId);
        var btn  = document.getElementById(btnId);
        if (!form) return;

        /* Live validation on blur */
        Array.from(form.querySelectorAll('input,textarea,select')).forEach(function(f) {
            f.addEventListener('blur',  function() { validateField(f); });
            f.addEventListener('input', function() { if (!getErrorMsg(f)) clearError(f); });
        });

        /* Submit handler */
        form.addEventListener('submit', function(e) {
            if (!validateForm(form)) {
                e.preventDefault();
                return;
            }
            if (btn) {
                btn.disabled  = true;
                btn.innerHTML = loadingHtml;
            }
        });
    }

    initForm(
        'contactForm',
        'submitBtn',
        '<i class="fa-solid fa-circle-notch animate-spin text-xs" aria-hidden="true"></i> Processing Inquiry...'
    );

    initForm(
        'quoteForm',
        'quoteSubmitBtn',
        '<i class="fa-solid fa-circle-notch animate-spin text-xs" aria-hidden="true"></i> Submitting Request...'
    );

    /* ── INTERSECTION OBSERVER: lazy section reveal ─────────────── */
    if ('IntersectionObserver' in window) {
        var revealEls = document.querySelectorAll('section');
        var observer  = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity  = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.07 });

        revealEls.forEach(function(el) {
            /* Skip hero (first section) — always visible */
            if (el.id === 'home') return;
            el.style.opacity    = '0';
            el.style.transform  = 'translateY(20px)';
            el.style.transition = 'opacity .5s ease, transform .5s ease';
            observer.observe(el);
        });
    }

    /* ── HERO VIDEO: correct asset per breakpoint ───────────────── */
    /* Mobile + Tablet (below 1024px) → mobile video              */
    /* Desktop (1024px and above)     → desktop video             */
    var videoDesktop = document.querySelector('.hero-video-desktop');
    var videoMobile  = document.querySelector('.hero-video-mobile');
    var mobileQuery  = window.matchMedia('(max-width: 1023px)');
    function applyVideoVisibility() {
        var useMobile = mobileQuery.matches;
        if (videoDesktop) {
            videoDesktop.style.display = useMobile ? 'none' : 'block';
            if (!useMobile && videoDesktop.paused) {
                videoDesktop.load();
                videoDesktop.play().catch(function(){});
            } else if (useMobile && !videoDesktop.paused) {
                videoDesktop.pause();
            }
        }
        if (videoMobile) {
            videoMobile.style.display = useMobile ? 'block' : 'none';
            if (useMobile && videoMobile.paused) {
                videoMobile.load();
                videoMobile.play().catch(function(){});
            } else if (!useMobile && !videoMobile.paused) {
                videoMobile.pause();
            }
        }
    }
    applyVideoVisibility();
    if (mobileQuery.addEventListener) {
        mobileQuery.addEventListener('change', applyVideoVisibility);
    } else {
        mobileQuery.addListener(applyVideoVisibility);
    }

}());
