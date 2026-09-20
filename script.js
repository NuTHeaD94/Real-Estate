document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if (window.feather) feather.replace();

    const brandRetellWidget = () => {
        const widget = document.querySelector('#retell-widget-root > div');
        if (!widget?.shadowRoot) return false;

        if (!widget.shadowRoot.querySelector('#voicedesk-widget-theme')) {
            const style = document.createElement('style');
            style.id = 'voicedesk-widget-theme';
            style.textContent = `
                :host { --color-primary: #17201d; --color-primary-hover: #2d4038; --color-component: #17201d; --color-component-hover: #2d4038; --color-theme: #d8f36b; --font-family: 'Manrope', sans-serif; }
                button { letter-spacing: .01em; }
            `;
            widget.shadowRoot.appendChild(style);
        }

        const launcher = widget.shadowRoot.querySelector('button[aria-label="Open Assistant"]');
        const label = launcher?.querySelector('span');
        if (label) label.textContent = 'Talk to our AI';
        return true;
    };

    if (!brandRetellWidget()) {
        const observer = new MutationObserver(() => {
            if (brandRetellWidget()) observer.disconnect();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        let attempts = 0;
        const retry = window.setInterval(() => {
            attempts += 1;
            if (brandRetellWidget() || attempts > 50) window.clearInterval(retry);
        }, 100);
    }
});
