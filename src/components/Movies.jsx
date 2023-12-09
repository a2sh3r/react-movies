import { Movie } from './Movie';

export function Movies(props) {
    const { movies = []} = props;

    return (
        <div className='movies'>
            {movies.length ?  movies.map((movie) => (
                <Movie key={movie.imdbID} {...movie} />
            )) : <h3>Ничего не найдено</h3>}
        </div>
    );
}
