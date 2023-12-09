function Footer() {
    return (
        <footer className='page-footer deep-purple darken-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright a2sh3r's 2x2 4x4
                    <a className='grey-text text-lighten-4 right' href='https://github.com/a2sh3r/react-movies'>
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
