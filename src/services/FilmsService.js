import axios from "axios";

class FilmsService{
    static getAllFilmsService = () => axios.get('https://swapi.dev/api/films')
}

export default FilmsService;