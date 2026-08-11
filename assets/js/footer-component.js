class CustomFooter extends HTMLElement {
    connectedCallback() {
        // Para domínio próprio (focusinfraestrutura.com.br), mantemos a base vazia
        const base = "";

        this.innerHTML = `
        <footer class="footer">
            <div class="footer-container">
                
                <!-- Coluna 1: Branding e Redes Sociais -->
                <div class="footer-column branding-col">
                    <div class="footer-logo">
                        <img src="${base}/assets/images/logo-focus.png" alt="Logo Focus Infraestrutura">
                    </div>
                    <p class="footer-about">
                        Soluções sólidas e inovadoras em engenharia e infraestrutura em todo o território nacional. Projetando e construindo o futuro de grandes negócios.
                    </p>
                    
                    <div class="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Coluna 2: Navegação com URLs absolutas limpas -->
                <div class="footer-column">
                    <h3>Navegação</h3>
                    <ul class="footer-links">
                        <li><a href="${base}/">Home</a></li>
                        <li><a href="${base}/quem-somos/">Quem Somos</a></li>
                        <li><a href="${base}/servicos/">Serviços</a></li>
                        <li><a href="${base}/noticias/">Notícias</a></li>
                        <li><a href="${base}/contato/">Contato</a></li>
                    </ul>
                </div>

                <!-- Coluna 3: Canais de Contato -->
                <div class="footer-column">
                    <h3>Canais de Contato</h3>
                    <ul class="footer-contact-info">
                        <li>
                            <strong>Telefone:</strong>
                            <a href="tel:63992245975">(63) 99224-5975</a>
                        </li>
                        <li>
                            <strong>E-mail:</strong>
                            <a href="mailto:contato@focusinfraestrutura.com.br">contato@focusinfraestrutura.com.br</a>
                        </li>
                    </ul>
                </div>

                <!-- Coluna 4: Endereço -->
                <div class="footer-column">
                    <h3>Onde Estamos</h3>
                    <p class="footer-address">
                        Av. Joaquim Teotônio Segurado, Q. ACSU-SO 10,<br><br>
                        Shopping da Cidade, Conj. 01, Lote 06, Loja 21<br><br>
                        Palmas - TO | 77.001-004
                    </p>
                </div>

            </div>

            <div class="footer-bottom">
                <div class="footer-bottom-container">
                    <p>&copy; 2026 Focus Infraestrutura. Todos os direitos reservados.</p>
                    
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);