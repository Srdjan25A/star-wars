//react-icons
import { FaEye } from "react-icons/fa";
//mui-table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
//redux
import { useDispatch, useSelector } from "react-redux";
import { setPlanetAction } from "../store/planetSlice";
import { useState } from "react";
//mui-tooltip
import Tooltip from "@mui/material/Tooltip";
//styles
import "../styles/table.css"

function TableComponents({setVisible}){
    const {film} = useSelector((state) => state.filmStore)
    const dispatch = useDispatch()
    //search input
    const [search, setSearch] = useState("")
    //charactersByFilm
    const { charactersByFilm } = useSelector((state) => state.characterStore)
    const characters = film ? charactersByFilm[film.episode_id] || [] : []
    //console.log("charactersByFilm:", charactersByFilm[4])
   /* console.log("characters", characters)*/
    //sort-name
    const [orderBy, setOrderBy] = useState('name')
    const [order, setOrder] = useState('asc')
    
    
    const filteredCharacters = characters.filter( (char) => 
        char.name.toLowerCase().includes(search.toLowerCase())
    )

    function handlePlanet(planetData){
        dispatch(setPlanetAction(planetData.onePlanet))
        setVisible()
    }
    /*
    console.log("characters:", characters);
    console.log("filtered:", filteredCharacters);
    console.log("search:", search);*/
    
    const sortedCharacters = [...filteredCharacters].sort((a, b) => {
        if (orderBy === 'name') {
        return order === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        }
        return 0
    })
    function handleSort(property) {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    return(
            <div className="container mb-[100px]">
                {film && <div className="flex flex-col items-center gap-[20px]">   
                    <input value={search} onChange={(e) => setSearch(e.target.value)} 
                            className="bg-[#2a2a2a] w-[200px] py-[10px] 
                                       px-[8px] placeholder:text-[#ffd500] 
                                       text-[#ffd500] rounded-xl" 
                                       type="text" placeholder="Search by name..."></input>
                    <div className="w-[80%] md:w-[600px] overflow-x-auto custom-scroll rounded-xl shadow-lg p-[2px] bg-[#1e1e1e]">
                            <TableContainer component={Paper} className="custom-scroll" sx={{backgroundColor: '#1e1e1e', borderRadius: '12px'}} style={{ color: 'gray', maxHeight: 400, overflowY: 'auto'}}>
                                <Table sx={{
                                     '& .MuiTableCell-root': {
                                        fontFamily: 'StarJedi',
                                        color: '#fff',
                                        borderColor: '#333',
                                        },
                                        '& .MuiTableHead-root': {
                                        backgroundColor: '#2a2a2a',
                                        },
                                 }} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <TableSortLabel
                                                    active={orderBy === 'name'}
                                                    direction={orderBy === 'name' ? order : 'asc'}
                                                    onClick={() => handleSort('name')}
                                                    sx={{ color: '#fff !important' }}
                                            >
                                                Name
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell align="center">Height</TableCell>
                                        <TableCell align="center">Gender</TableCell>
                                        <TableCell align="center">Homeworld</TableCell>
                                        <TableCell align="center">Eye color</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {characters.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan="5" align="center">
                                                  <div className="flex flex-col items-center justify-center h-[80px]">
                                                    <div className="spinner"></div>
                                                  </div>
                                                </TableCell>
                                            </TableRow>
                                        ): filteredCharacters.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan="5" align="center">
                                                    No characters found...
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            sortedCharacters.map((row, index) => (
                                                <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center">{row.height}</TableCell>
                                                <TableCell align="center">{row.gender}</TableCell>
                                                <TableCell align="center">
                                                    <button 
                                                        className="w-[140px] cursor-pointer bg-[#FFD500] hover:bg-[#FFC000] transition-colors duration-300 text-black font-semibold py-2 px-4 rounded-xl" 
                                                        onClick={() => handlePlanet({onePlanet: row.planetData})}>{row.planetData.name}</button>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Tooltip title={`${row.eye_color}`} placement="top" arrow>
                                                        <FaEye color={row.eye_color} size={40}/>    
                                                    </Tooltip>
                                                </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </div>
                </div>
                }
            </div>
    )
}

export default TableComponents