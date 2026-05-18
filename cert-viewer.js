document.addEventListener('DOMContentLoaded', function () {
    var CERTIFICATES = {
        'cert-microsoft-word.pdf': 'Microsoft Word',
        'cert-microsoft-excel.pdf': 'Microsoft Excel',
        'cert-microsoft-powerpoint.pdf': 'Microsoft PowerPoint',
        'cert-adobe-dreamweaver.pdf': 'Adobe Dreamweaver',
        'cert-ic3.pdf': 'Internet Core Competency Certification (IC3)',
        'cert-tamu-capstone-award.pdf': 'TAMU Capstone Design Innovation Award'
    };

    var params = new URLSearchParams(window.location.search);
    var pdf = params.get('pdf');

    var titleEl = document.getElementById('cert-viewer-title');
    var sectionEl = document.getElementById('cert-viewer-section');
    var objectEl = document.getElementById('cert-pdf-object');
    var iframeEl = document.getElementById('cert-pdf-iframe');
    var messageEl = document.getElementById('cert-viewer-message');
    var downloadWrap = document.getElementById('cert-viewer-download');
    var downloadLink = document.getElementById('cert-download-link');

    if (!pdf || !Object.prototype.hasOwnProperty.call(CERTIFICATES, pdf)) {
        document.title = 'Certificate Not Found';
        if (titleEl) {
            titleEl.textContent = 'Certificate Not Found';
        }
        if (messageEl) {
            messageEl.textContent = 'No valid certificate was specified. Please choose a certificate from the list.';
        }
        if (downloadWrap) {
            downloadWrap.hidden = true;
        }
        return;
    }

    var displayTitle = CERTIFICATES[pdf];
    document.title = displayTitle + ' — Cole Rollin Pearson';

    if (titleEl) {
        titleEl.textContent = displayTitle;
    }

    if (objectEl) {
        objectEl.setAttribute('data', pdf);
    }
    if (iframeEl) {
        iframeEl.setAttribute('src', pdf);
        iframeEl.setAttribute('title', displayTitle + ' PDF');
    }
    if (sectionEl) {
        sectionEl.hidden = false;
    }
    if (messageEl) {
        messageEl.textContent = 'If the PDF does not display, download it directly:';
    }
    if (downloadLink) {
        downloadLink.href = pdf;
        downloadLink.download = pdf;
        downloadLink.textContent = 'Download ' + pdf;
    }
    if (downloadWrap) {
        downloadWrap.hidden = false;
    }
});
