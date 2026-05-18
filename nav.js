document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const closeBtn = document.querySelector('.nav-close');
    const drawer = document.getElementById('site-nav-drawer');
    const backdrop = document.querySelector('.site-nav-backdrop');
    const links = document.querySelectorAll('.site-nav-link');

    if (!toggle || !drawer) {
        return;
    }

    function openNav() {
        document.body.classList.add('nav-open');
        toggle.setAttribute('aria-expanded', 'true');
        drawer.setAttribute('aria-hidden', 'false');
        if (backdrop) {
            backdrop.removeAttribute('hidden');
        }
    }

    function closeNav() {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        if (backdrop) {
            backdrop.setAttribute('hidden', '');
        }
    }

    toggle.addEventListener('click', function () {
        if (document.body.classList.contains('nav-open')) {
            closeNav();
        } else {
            openNav();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeNav);
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeNav);
    }

    links.forEach(function (link) {
        link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
            closeNav();
        }
    });
});
