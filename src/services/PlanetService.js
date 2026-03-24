import axios from "axios";

class PlanetService{
    static getPlanetService = (url) => axios.get(url).then(res => res.data)
    
}
export default PlanetService;