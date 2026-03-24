//redux
import { useDispatch } from "react-redux"
import { saveFilmContentAction } from "../store/filmSlice"
function FilmsComponent({film}){
    const dispatch = useDispatch()

    function handleFilms(){
        dispatch(saveFilmContentAction(film))
    }
    return(
        <div className="">
            <button className="w-[250px] h-[40px] rounded-xl bg-[#FFD500]  
                           hover:scale-103 transition-transform duration-300 
                           cursor-pointer text-[18px] text-black font-bold" onClick={handleFilms}>
               {film.title}
            </button>
        </div>
    )
}
export default FilmsComponent