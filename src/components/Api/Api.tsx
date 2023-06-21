import { SetStateAction, useEffect, useState } from "react";

interface Film {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    }

export function DataFetch(){
    const [searchQuery, setSearchQuery] = useState('');
    const [films, setFilms] = useState<Film[]>([])

    const fetchFilmData = () => {
        fetch(`http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=${searchQuery}`)
        .then(response => response.json())
        .then((json: { results: Film[] }) => setFilms(json.results))
        .catch(error => console.error(error));
    }
    useEffect(() => {
        fetchFilmData()
    }, [])

    const handleChangeElement = (evt: { target: { value: SetStateAction<string>; }; }) => {
        setSearchQuery(evt.target.value);
    }

    const handleSearchSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        fetchFilmData();
    }
    return (
        <div>
            <h1>Recherche de film</h1>
            <form onSubmit={handleSearchSubmit}>
                <input  type="text" value={searchQuery} onChange={handleChangeElement}/>
                <button type="submit">Recherche</button>
            </form>
            {films.map(film => (
                <div key={film.id}>
                    <h2>{film.title}</h2>
                    <img src={`http://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                    <p>{film.overview}</p>
                </div>
            ))}


        </div>
    )
}