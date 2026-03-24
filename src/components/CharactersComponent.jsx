import { useEffect } from "react"
//redux
import { useDispatch, useSelector } from "react-redux"
import { setCharactersAction } from "../store/characterSlice"
//services
import CharacterService from "../services/CharacterService"
import PlanetService from "../services/PlanetService"

function CharactersComponent({setVisibleCrawl}){
    const dispatch = useDispatch()
    const {film} = useSelector((state)=> state.filmStore)
    const { charactersByFilm } = useSelector((state) => state.characterStore) /**/ 
    useEffect(()=>{
        if(!film) return;
        const filmId = film.episode_id
        if (charactersByFilm[filmId]) return;
        const fetchCharacters = async () => {
            try{
                const promises = film.characters.map(async (url) => {
                    const char =  await CharacterService.getCharacterService(url)
                   
                    const planet = await PlanetService.getPlanetService(char.homeworld)
                    return  {...char, planetData: planet} 
                })
                const result = await Promise.all(promises) 
                dispatch(setCharactersAction({filmId, characters: result}))
            }catch(err){
                console.log("greska prilikom fecovanja karaktera!", err)
            }
        }
        fetchCharacters()
    }, [film])

    function openCrawl(){
        setVisibleCrawl()
    }
    return(
        <div className="mt-[40px]">
            {
            film && 
                <div className="text-center">
                    <h2 className="text-[#FFD500] text-[36px] text-center font-extrabold text-shadow-lg/30">{film.title}</h2>
                    <button onClick={() => openCrawl()} 
                            className="bg-[#2a2a2a] hover:bg-[#1e1e1e] transition-colors duration-300 
                                       font-bold w-[200px] my-[15px] py-[10px] cursor-pointer rounded-xl 
                                       text-[#FFD500]">Show Opening Crawl</button>    
                </div>
            } 
        </div>
    )
}
export default CharactersComponent