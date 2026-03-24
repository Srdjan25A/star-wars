//hooks
import { useState } from 'react'
//components
import FilmsComponent from './components/FilmsComponent'
import HeadersComponent from './components/HeadersComponent'
import CharactersComponent from './components/CharactersComponent'
import TableComponents from "./components/TableComponents"
//Modals
import Modal from './components/Modal'
import ModalCrawl from './components/ModalCrawl'
//utils
import useFetchAllFilms from './utils/useFetchAllFilms'

function App() {
  const [visible, setVisible] = useState(false);
  const [visibleCrawl, setVisibleCrawl] = useState(false);
  const {films, isLoaded} = useFetchAllFilms()
  

  return (
    <div>
      <HeadersComponent/>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          {
            isLoaded ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-[20px]'>
                {films.map((film, index) => {
                  return  <FilmsComponent key={index} film={film}/>
                })}
              </div>
            : <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center h-full gap-6">
                    <div className="spinner"></div>
              </div>
          }
          {visible &&  <Modal onClose={() => setVisible(false)}/>}
          {visibleCrawl &&  <ModalCrawl onClose={() => setVisibleCrawl(false)}/>}
            
          <CharactersComponent setVisibleCrawl={() => setVisibleCrawl(true)}/>
          <TableComponents setVisible={() => setVisible(true)}/> 
  
        </div>
      </div>
    </div>
  )
}
export default App