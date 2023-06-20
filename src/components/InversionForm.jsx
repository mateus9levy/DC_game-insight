import React, { useState } from "react"
import MenuItem from '@mui/material/MenuItem';
import genres from "../utils/data/genres";
import { Select } from "@mui/material";
import recommendGames, { } from "../utils/countingInversions";
import gameData from "../utils/data/data";
import GameCard from "./gameCard";

export default function InversionForm() {
    const [genre, setGenre] = useState('')
    const [genreArr, setGenresArr] = useState([])
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')
    const [recomendados, setRecomendados] = useState([])
    const [status, setStatus] = useState(false)

    const handleChangeGenre = (event) => {
        setGenre(event.target.value)
    }

    const handleChangeYear = (event) => {
        setYear(event.target.value)
    }

    const handleChangeRating = (event) => {
        setRating(event.target.value)
    }

    const handleGenres = (genre) => {
        setGenresArr((prevGenres) => [...prevGenres, genre])
    }

    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1>Recomendações</h1>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    Escolher Gênero:
                    <Select className="ml-40" onChange={handleChangeGenre} value={genre}>
                        {genres.map((item, index) => (
                            <MenuItem key={parseInt(index)} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>

                    <button
                        onClick={() => {
                            handleGenres(genre)
                        }}
                        className="flex-none ml-40 rounded-md bg-indigo-500 px-3.5 mt-10 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Adicionar gênero
                    </button>

                    <button
                        onClick={() => {
                            setGenresArr([]) // Limpar todos os gêneros
                        }}
                        className="flex-none ml-40 rounded-md mt-3 bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Remover todos os gêneros
                    </button>

                    <div>
                        Gêneros:
                        {genreArr.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Escreva um ano entre 1948 e 2023
                            </label>
                            <div className="mt-2">
                                <input
                                    value={year}
                                    onChange={handleChangeYear}
                                    id="number"
                                    name="number"
                                    type="text"
                                    autoComplete="number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Escreva uma nota de 0 a 10
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={handleChangeRating}
                                    value={rating}
                                    id="number"
                                    name="number"
                                    type="number"
                                    autoComplete="current-number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div>
                    <button
                        onClick={() => {
                            const preferences = {
                                genre: genreArr,
                                rating: rating,
                                year: year
                            };
                            const recomendados = recommendGames(preferences, gameData)
                            if (recomendados[0]) {
                                setStatus(true)
                                setRecomendados(recomendados[0])
                                console.log(recomendados)
                            }
                        }}


                        className="flex mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Receber Recomendação
                    </button>
                </div>
                <div className="mt-5 ml-20">
                <h1 className="-mb-20 ml-7">Jogo Recomendado:</h1>
                {status ? <><GameCard gameProps={[recomendados]}/></>: <></>}
                </div>
                
            </div>
        </>
    )
}
