* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --secondary: #8b5cf6;
    --dark: #0f172a;
    --dark-light: #1e293b;
    --text: #e2e8f0;
    --text-dim: #94a3b8;
    --success: #10b981;
    --border: #334155;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: var(--dark);
    color: var(--text);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navbar */
.navbar {
    background: var(--dark-light);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(10px);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
}

.logo img {
    width: 32px;
    height: 32px;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--primary);
}

/* Hero */
.hero {
    padding: 6rem 0;
    text-align: center;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero p {
    font-size: 1.3rem;
    color: var(--text-dim);
    margin-bottom: 2rem;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
}

.btn {
    padding: 0.8rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

.btn-secondary {
    background: var(--dark-light);
    color: var(--text);
    border: 1px solid var(--border);
}

.btn-secondary:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
}

.btn-large {
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
}

.btn-icon {
    width: 20px;
    height: 20px;
}

.stats {
    display: flex;
    gap: 3rem;
    justify-content: center;
    margin-top: 3rem;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary);
}

.stat-label {
    color: var(--text-dim);
    font-size: 0.9rem;
}

/* Features */
.features {
    padding: 5rem 0;
    background: var(--dark-light);
}

.features h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: var(--dark);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--border);
    transition: all 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.feature-card p {
    color: var(--text-dim);
}

/* Download */
.download {
    padding: 5rem 0;
}

.download h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.download-card {
    background: var(--dark-light);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.download-info h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.download-info p {
    color: var(--text-dim);
    margin-bottom: 1.5rem;
}

.download-features {
    list-style: none;
}

.download-features li {
    padding: 0.5rem 0;
    color: var(--text-dim);
}

.download-buttons {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.download-note {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--text-dim);
}

.version-number {
    font-weight: bold;
    color: var(--success);
}

.download-size, .download-count {
    display: inline-block;
}

/* FAQ */
.faq {
    padding: 5rem 0;
    background: var(--dark-light);
}

.faq h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: var(--dark);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--border);
    margin-bottom: 1.5rem;
}

.faq-item h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.faq-item p {
    color: var(--text-dim);
}

/* Support */
.support {
    padding: 5rem 0;
    text-align: center;
}

.support h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.support p {
    color: var(--text-dim);
    margin-bottom: 2rem;
}

.support-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

/* Footer */
footer {
    background: var(--dark-light);
    padding: 3rem 0;
    text-align: center;
    border-top: 1px solid var(--border);
}

footer p {
    color: var(--text-dim);
    margin-bottom: 0.5rem;
}

footer a {
    color: var(--primary);
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

.footer-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .stats {
        gap: 1.5rem;
    }
    
    .download-card {
        grid-template-columns: 1fr;
    }
    
    .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
    }
    
    .support-buttons {
        flex-direction: column;
    }
}

