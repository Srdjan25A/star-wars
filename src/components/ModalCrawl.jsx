import { IoClose }  from "react-icons/io5";
import { useSelector } from "react-redux"
import "../styles/crawlAnimation.css"
function ModalCrawl({onClose}) {
    const {film} = useSelector((state) => state.filmStore)
     if (!film) return null;
    return(
    <div className="fixed inset-0 bg-[#1e1e1e] z-50 overflow-hidden">
      <IoClose
        size={40}
        color="white"
        className="absolute top-5 right-5 cursor-pointer z-50"
        onClick={onClose}
      />

      <div className="crawl-container">
        <div className="crawl-text text-[#FFD500] text-center font-extrabold">

          <p className="text-2xl mb-6 animate-fade-in delay-1" style={{ fontFamily: "StarJedi" }}>
            Episode {film.episode_id}
          </p>

          <h1 className="text-5xl uppercase tracking-widest mb-10 animate-fade-in delay-2" style={{ fontFamily: "StarJedi" }}>
            {film.title}
          </h1>

          <p className="text-xl text-white leading-loose w-[90%] md:w-[80%] mx-auto whitespace-pre-line animate-fade-in delay-3" style={{ fontFamily: "StarJedi" }}>
            {film.opening_crawl}
          </p>
        </div>
      </div>
    </div>
    )
}
export default ModalCrawl