"use client";

import { useState } from 'react';

import { SearchTeam } from "./";

const SearchBar = () => {

    const [team, setTeam] = useState('');

    const handleSearch = () => { }
    return (
        <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
            onSubmit={handleSearch}>
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <SearchTeam
                    team={team}
                    setTeam={setTeam} />
            </div>
        </form>
    )
}

export default SearchBar
