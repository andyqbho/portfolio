export default function Navbar(){
    return( 
        <nav className="nav">
            <a href="/" className="site-title">Andy's Portfolio</a>
            <ul>
                <li>
                    <a href="about">About</a>
                </li>
                <li>
                    <a href="timeline">Timeline</a>
                </li>
                <li>
                    <a href="projects">Projects</a>
                </li>
                <li>
                    <a href="resume">Resume</a>
                </li>
            </ul>
        </nav>
    )
}