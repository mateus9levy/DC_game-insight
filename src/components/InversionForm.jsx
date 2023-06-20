import React, { useState } from "react"
import MenuItem from '@mui/material/MenuItem';
import genres from "../utils/data/genres";
import { Select } from "@mui/material";
import gameData from "../utils/data/data";
import { exec} from "../utils/countingInversions";
export default function InversionForm() {
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState(0)
    const [rating, setRating] = useState(0)
    const handleChangeGenre = (event) => {
        setGenre(event.target.value)
    }
    const handleChangeYear = (event) => {
        setYear(event.target.value)
    }
    const handleChangeRating = (event) => {
        setRating(event.target.value)
    }


    return (

        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h4>Recomendações</h4>

                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    Escolher Genero:
                    <Select
                        onChange={handleChangeGenre}
                        value={genre}
                    >
                        {genres.map((item, index) =>
                            <MenuItem key={parseInt(index)} value={parseInt(index)}>{item}</MenuItem>
                        )}
                    </Select>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                Escreva um ano entre 1948 e 2023
                            </label>
                            <div className="mt-2">
                                <input
                                    value={year}
                                    onChange={handleChangeYear}
                                    id="number"
                                    name="number"
                                    type="number"
                                    autoComplete="number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
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
                            const preferenciasUsuario = {
                                genero: genre,
                                classificacaoMinima: rating,
                                anoPreferido: year
                            };
                            
                                exec()
                        }}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Receber Recomendação
                    </button>
                </div>
            </div>
        </>
    )
}
