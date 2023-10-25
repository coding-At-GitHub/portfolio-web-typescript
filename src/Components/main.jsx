import React from 'react';
import './combinedCss.css';

function MainPage() {
    return (
        <div>
            <div className='portfolio' >
                <header>
                    <h1>Your Name HEllio </h1>
                    <p>Web Developer | UI/UX Designer</p>
                </header>

                <section >
                    <h2>About Me</h2>
                    <p>
                        Welcome to my portfolio! I am a web developer with a passion for creating
                        beautiful and functional websites and web applications.
                    </p>
                </section>

                <section>
                    <h2>Projects</h2>
                    <div >
                        <h3>Project 1</h3>
                        <p>Description of Project 1.</p>
                    </div>
                    <div >
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                    </div>
                    {/* Add more projects here */}
                </section>

                <section >
                    <h2>Contact Me</h2>
                    <p>
                        Feel free to reach out to me at yourname@example.com or connect with me
                        on LinkedIn, GitHub, and Twitter.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default MainPage;
