function Header() {
    return (
        <nav className='deep-purple darken-4'>
            <div className='nav-wrapper'>
                <a className='brand-logo right'> React Films </a>
                <ul id='nav-mobile' className='left hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/a2sh3r/react-movies'>
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
