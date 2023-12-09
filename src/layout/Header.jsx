
function Header() {
    return (
        <nav className='deep-purple darken-4'>
            <div className='nav-wrapper'>
                <img  src="#" className='brand-logo right' alt='React Films'/>
                <ul id='nav-mobile' className='left hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/a2sh3r/react-movies'>Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
