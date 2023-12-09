function Header() {
    return (
        <nav className='deep-purple darken-4'>
            <div className='nav-wrapper'>
                <a href='#' className='brand-logo right'>
                    Logo
                </a>
                <ul id='nav-mobile' className='left hide-on-med-and-down'>
                    <li>
                        <a href='#'>Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
