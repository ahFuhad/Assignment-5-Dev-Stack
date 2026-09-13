import logo from "../assets/logo-text.png";

function Footer() {
    return (
        <footer>
        {/* left side */}
            <div>
                {/* Logo */}
                <img src={logo} alt="DevStack Logo" />

                {/* Paragraph */}
                <p>
                    Curated tools, technologies, and resources for developers building
                    modern software
                </p>

                {/* Sosial Media Link */}
                <a href="#">GitHub</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>

        {/* right side */}
            <div>
                <div>
                    <h6>PRODUCT</h6>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
                <div>
                    <h6>COMPANY</h6>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Carrers</a></li>
                    </ul>
                </div>
                <div>
                    <h6>LEGAL</h6>
                    <ul>
                        <li><a href="#">Carrers</a></li>
                        <li><a href="#">Term of Service</a></li>
                    </ul>
                </div>
            </div>
            {/* Lower Footer */}
            <div>
                <p>
                    © 2026 Dev Stack. All rights reserved.
                </p>
                <div>
                    <a href="#">Privecy</a>
                    <a href="#">Term</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
