class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                
                nav {
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                .scrolled {
                    background-color: rgba(26, 54, 93, 0.95) !important;
                }
                
                .scrolled .nav-link, .scrolled .logo-text {
                    color: white !important;
                }
                
                .scrolled .cta-button {
                    background-color: #d4af37 !important;
                    color: white !important;
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                }
                
                .logo-icon {
                    color: #d4af37;
                    margin-right: 0.5rem;
                }
                
                .logo-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1a365d;
                    transition: color 0.3s ease;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-link {
                    text-decoration: none;
                    color: #1a365d;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: #d4af37;
                }
                
                .nav-link:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: #d4af37;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover:after {
                    width: 100%;
                }
                
                .cta-button {
                    background-color: #1a365d;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .cta-button:hover {
                    background-color: #142a4a;
                    transform: translateY(-2px);
                }
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    z-index: 1001;
                }

                .triple-dash-icon {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    width: 24px;
                }

                .triple-dash-icon span {
                    display: block;
                    width: 100%;
                    height: 3px;
                    background-color: #1a365d;
                    transition: all 0.3s ease;
                }

                .scrolled .triple-dash-icon span {
                    background-color: white;
                }

                .mobile-menu-button.active .triple-dash-icon span:nth-child(1) {
                    transform: translateY(7px) rotate(45deg);
                }

                .mobile-menu-button.active .triple-dash-icon span:nth-child(2) {
                    opacity: 0;
                }

                .mobile-menu-button.active .triple-dash-icon span:nth-child(3) {
                    transform: translateY(-7px) rotate(-45deg);
                }
                .mobile-menu {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(26, 54, 93, 0.98);
                    padding: 2rem;
                    z-index: 1000;
                    overflow-y: auto;
                    transition: all 0.3s ease;
                    padding-top: 100px;
                }

                .mobile-menu.open {
                    display: block;
                }
                .mobile-menu .nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    align-items: center;
                    padding: 2rem;
                }

                .mobile-menu-group {
                    width: 100%;
                    text-align: center;
                }

                .mobile-menu .nav-link {
                    color: white;
                    font-size: 1.2rem;
                    padding: 0.8rem 1.5rem;
                    position: relative;
                    display: block;
                    width: 100%;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .mobile-menu .nav-link:hover {
                    background-color: rgba(212, 175, 55, 0.2);
                    color: #d4af37;
                }

                .mobile-menu .nav-link.cta-button {
                    background-color: #d4af37;
                    color: white;
                    font-weight: 600;
                    margin-top: 1rem;
                }

                .mobile-menu .nav-link.cta-button:hover {
                    background-color: #c19b30;
                    transform: translateY(-2px);
                }
.mobile-menu .nav-link:hover {
                    color: #d4af37;
                }

                .mobile-menu .nav-link:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #d4af37;
                    transition: width 0.3s ease;
                }
                .mobile-menu .nav-link:hover:after {
                    width: 100%;
                }
@media (max-width: 768px) {
                    .mobile-menu-button {
                        display: block;
                    }
                    
                    .nav-links {
                        display: none;
                    }
                }
</style>
            <nav id="mainNav">
                <div class="nav-container">
                    <a href="/" class="logo">
                        <i data-feather="home" class="logo-icon"></i>
                        <span class="logo-text">AmeenHomes</span>
                    </a>
                    <div class="nav-links">
                    <a href="/" class="nav-link">Home</a>
                    <a href="/#featured" class="nav-link">Properties</a>
                    <a href="about.html" class="nav-link">About Us</a>
                    <a href="/#testimonials" class="nav-link">Testimonials</a>
                    <a href="/#contact" class="nav-link">Contact</a>
                    <a href="/#contact" class="cta-button">Get in Touch</a>
</div>
<button class="mobile-menu-button">
                        <div class="triple-dash-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
</button>
                </div>
                <div class="mobile-menu" id="mobileMenu">
                    <div class="nav-links">
                        <div class="mobile-menu-group">
                            <a href="/" class="nav-link">Home</a>
                        </div>
                        <div class="mobile-menu-group">
                            <a href="about.html" class="nav-link">About Us</a>
                        </div>
                        <div class="mobile-menu-group">
                            <a href="/#contact" class="nav-link">Contact</a>
                        </div>
                        <div class="mobile-menu-group">
                            <a href="/#contact" class="nav-link cta-button">Get in Touch</a>
                        </div>
                    </div>
                </div>
</nav>
        `;
        // Mobile menu toggle
        const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            mobileMenuButton.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
        // Close menu when clicking anywhere in mobile menu
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuButton.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Prevent closing when clicking on links
        mobileMenu.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileMenuButton.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        // Close menu when clicking outside navbar
        document.addEventListener('click', (e) => {
            const isClickInsideNavbar = this.contains(e.target);
            const isClickInsideMobileMenu = mobileMenu.contains(e.target);
            
            if (!isClickInsideNavbar && !isClickInsideMobileMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                mobileMenuButton.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
// Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove('open');
                mobileMenuButton.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
// Add scroll behavior
        const nav = this.shadowRoot.getElementById('mainNav');
window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
        
        // Initialize Feather Icons
        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);