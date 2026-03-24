import axios from "axios";

class CharacterService{
    static getCharacterService = (url) => axios.get(url).then(res => res.data)
}

export default CharacterService;