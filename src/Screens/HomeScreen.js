import React, { useEffect } from 'react'
import './HomeScreen.css'
import { Link } from 'react-router-dom'

function HomeScreen() {
    useEffect(() => {
        function castParallax() {
            window.addEventListener("scroll", function (e) {
                var top = this.scrollY;
                var layers = document.getElementsByClassName("parallax");
                var layer, speed, yPos;
                for (var i = 0; i < layers.length; i++) {
                    layer = layers[i];
                    speed = layer.getAttribute('data-speed');
                    yPos = -(top * speed / 100);
                    layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
                }
            });
        }
        castParallax()
    }, [])

    return (
        <div className='home-screen'>
            <div className="left-line side-line"></div>
            <div className="right-line side-line"></div>
            <img src='./main-gradient.png' className='main-gradient' alt='' />
            <section className='non-nav'>
                <section className='header-section'>
                    <div className='left-section-hd parallax' data-speed='20'>
                        <h1 className='heading'>Share your feelings <span className='socialize-accent'>Socialize</span></h1>
                        <p className='message-line'>Don’t let your feelings and memories  bury inside you, share it with the
                            whole world by posting them on Socialize.</p>
                        {/*TODO: make dynamic  👇*/}
                        {/* <div className="btn">
                            <img src="./btn-glow.svg" alt="glow" className="glonavw-btn" />
                            <Link to='/posts'>
                                <button className='blue-btn'>
                                    New Post +
                                </button>
                            </Link>
                        </div> */}
                        <div className="btn">
                            {/* <img src="./btn-glow.svg" alt="glow" className="glow-btn" /> */}
                            <Link to='/login'>
                                <button className='blue-btn'>
                                    {/* Create Account  */}
                                    New Post +
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='right-section-hd'>
                        <img src="./plane.png" alt="paper-plane" className='plane-image parallax' data-speed='20' />
                        <img src='./photo3d.png' alt='demo' className='demo-photo parallax' data-speed='40' />
                    </div>
                </section>
                <section className='card-section'>
                    <img src="./Cylinder.svg" alt="cylinder-shape" className='cylinder-image parallax' data-speed='10' />
                    <img src="./sphere-card.png" alt="sphere black and white" className='sphere-bw-card parallax' data-speed='50' />
                    <div className='card parallax' data-speed='20'>
                        <img src='./image-icon.svg' alt='photograph-icon' className='card-icon' />
                        <p className='card-detail'>Share your memories  through your photos</p>
                    </div>
                    <div className='card parallax' data-speed='30'>
                        <img src='./community.svg' alt='community-icon' className='card-icon' />
                        <p className='card-detail'>Connect with the largest community in the world</p>

                    </div>
                    <div className='card parallax' data-speed='40'>
                        <img src='./responsive.svg' alt='responsive-icon' className='card-icon' />
                        <p className='card-detail'>Enjoy the same experience on every device</p>
                    </div>
                </section>
                <section className='first-post-section'>
                    <div className="left-section-fp">
                        <img src="./Cool Shapes.png" alt="shapes" className='shapes-image' />
                    </div>
                    <div className="right-section-fp">
                        <h1 className='heading-fp'>Write your first post now</h1>
                        <div className="btn">
                            <img src="./btn-glow.svg" alt="glow" className="glow-btn" />
                            <div className="btn">
                            <img src="./btn-glow.svg" alt="glow" className="glow-btn" />
                            <Link to='/posts'>
                                <button className='blue-btn'>
                                    New Post +
                                </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <img src="./sphere-footer.png" alt="sphere black and white" className='sphere-bw parallax' data-speed='50' />
                </section>
            </section>
        </div>
    )
}

export default HomeScreen
