class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #17201d;
                    color: white;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 4rem 2rem 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    text-decoration: none;
                }
                
                .footer-logo-icon {
                    color: #d4af37;
                    margin-right: 0.5rem;
                }
                
                .footer-logo-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                }
                
                .footer-about {
                    max-width: 300px;
                }
                
                .footer-about-text {
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .footer-social {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    color: white;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background-color: #d4af37;
                    transform: translateY(-3px);
                }
                
                .footer-heading {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                
                .footer-heading:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 40px;
                    height: 2px;
                    background-color: #d4af37;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-link-item {
                    margin-bottom: 0.75rem;
                }
                
                .footer-link {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #d4af37;
                    padding-left: 5px;
                }
                
                .contact-info {
                    margin-bottom: 0.75rem;
                    display: flex;
                    align-items: center;
                    color: rgba(255, 255, 255, 0.7);
                }
                
                .contact-icon {
                    margin-right: 0.75rem;
                    color: #d4af37;
                }
                
                .copyright {
                    text-align: center;
                    padding: 2rem 0;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer>
                <div class="footer-container">
                    <div class="footer-about">
                        <a href="/" class="footer-logo">
                            <i data-feather="radio" class="footer-logo-icon"></i>
                            <span class="footer-logo-text">VoiceDesk</span>
                        </a>
                        <p class="footer-about-text">
                            A focused demo of an AI voice assistant built to make every business call more useful.
</p>
                        <div class="footer-social">
                            <a href="#" class="social-link"><i data-feather="facebook"></i></a>
                            <a href="#" class="social-link"><i data-feather="twitter"></i></a>
                            <a href="#" class="social-link"><i data-feather="instagram"></i></a>
                            <a href="#" class="social-link"><i data-feather="linkedin"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-links-container">
                        <h3 class="footer-heading">Quick Links</h3>
                        <ul class="footer-links">
                            <li class="footer-link-item"><a href="/#top" class="footer-link">Home</a></li>
                            <li class="footer-link-item"><a href="/#capabilities" class="footer-link">Capabilities</a></li>
                            <li class="footer-link-item"><a href="/#receptionist" class="footer-link">Live demo</a></li>
</ul>
                    </div>
                    
                    <div class="footer-contact">
                        <h3 class="footer-heading">Demo notes</h3>
                        <div class="contact-info">
                            <i data-feather="headphones" class="contact-icon"></i>
                            <span>Voice-first customer experience</span>
                        </div>
                        <div class="contact-info">
                            <i data-feather="clock" class="contact-icon"></i>
                            <span>Available around the clock</span>
</div>
                        <div class="contact-info">
                            <i data-feather="shield" class="contact-icon"></i>
                            <span>Designed with privacy in mind</span>
                        </div>
                        <div class="contact-info">
                            <i data-feather="message-circle" class="contact-icon"></i>
                            <span>Natural conversations, useful actions</span>
                        </div>
                    </div>
                </div>
                
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} VoiceDesk demo. Built for better conversations.
                </div>
            </footer>
        `;
        
        // Initialize Feather Icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);