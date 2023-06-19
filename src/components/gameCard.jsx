import React from "react";

const GameCard = ({ gameProps }) => {
    const props = gameProps
    return (
        <>
            <ul role="list" className="grid  mt-40 gap-y-12 sm:grid-cols-2  sm:gap-y-16 xl:col-span-2">
                {props.map((game) => (
                    <li key={game.name}>
                        <div className="flex items-center sm:ml-6 gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={game.image} alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{game.name}</h3>
                                <h5 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{game.year}</h5>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">{game.genre}</p>
                                <p className="text-sm font-semibold leading-6 text-amber-400">{game.rating}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GameCard