//react-icons
import { IoClose }  from "react-icons/io5";
//redux
import { useSelector } from "react-redux"
function Modal({onClose}) {
    const {planet} = useSelector((state) => state.planetStore)
     if (!planet) return null;
    return(
        
        <div className="fixed inset-0 bg-black/40 z-50 modal-container flex items-center justify-center">
            <div className="modal w-[300px] bg-[#1e1e1e] p-[20px] rounded-xl shadow-xxl">
                <div className="modal-header flex items-center justify-between mb-[10px]">
                    <h2 className="text-white font-bold">PLANET DETAILS</h2>
                    <IoClose color={'white'} size={25} className="cursor-pointer" onClick= {onClose}/>
                </div>
                <hr style={{ color: '#333' }}></hr>
                <div className="modal-content mt-[10px] mb-[10px]">
                    <p className="text-white font-bold">{planet.name}</p>
                    <p className="text-white">Gravity: {planet.gravity}</p>
                    <p className="text-white">Climate: {planet.climate}</p>
                    <p className="text-white">Terrain: {planet.terrain}</p>
                    <p className="text-white">Population: {planet.population}</p>
                </div>
                <hr style={{ color: '#333' }}></hr>
                <div className="modal-footer mt-[10px] flex justify-end">
                    <button className="bg-[#FFD500] shadow-xl hover:bg-[#FFC000] transition-transform duration-300 text-black font-semibold py-2 px-4 rounded-lg cursor-pointer"  onClick= {onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default Modal