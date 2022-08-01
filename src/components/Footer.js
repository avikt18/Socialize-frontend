import React from 'react'

function Footer() {
    return (
        <section className="footer">
            <div className="footer-content">
                <div>
                    <h3 className="creator-name">Avi Kumrawat &copy;</h3>
                </div>
                <div className='social-handles'>
                    <a href="https://github.com/avikt18" target="_blank" rel="noopener noreferrer" className="social-icons">
                        <img src="./github.svg" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/avi-kumrawat/" target="_blank" rel="noopener noreferrer" className="social-icons">
                        <img src="./linkedin.svg" alt="linkedIn" />
                    </a>
                    <a href="https://www.instagram.com/avi__kt/" target="_blank" rel="noopener noreferrer" className="social-icons">
                        <img src="./instagram.svg" alt="instagram" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer