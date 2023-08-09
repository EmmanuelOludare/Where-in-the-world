'use client'

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const SearchCountries = () => {
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState([]);

  const searchCountry = async (e) => {

    const response = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
    const data = await response.json();
    setSearchData(data);
  };
  return (
    <div className="lg:mx-16 md:mx-12 mx-5">
      <div className="relative mt-7">
        <BsSearch className='absolute top-4 left-6' color='hsl(0, 0%, 52%)' />
        <input type="text" aria-label='Search countries' onKeyUp={searchCountry} placeholder="Search for a country..." value={searchText} onChange={e => setSearchText(e.target.value)} className="border-none rounded-[5px] shadow-lg caret-lightModeInput p-4 outline-none indent-10 w-full lg:min-w-[450px] placeholder:lightModeInput bg-white dark:bg-darkModeElements text-lightModeInput" />
      </div>
      {searchData.length > 0 && <div className="z-10 absolute flex flex-col gap-2 shadow-lg rounded-md mt-2 bg-white dark:bg-darkModeElements p-2 max-h-60 overflow-y-scroll w-80">
        {searchData.length > 0 && searchData.map((country, index) => (
          <Link href={`/countries/${country.cca3.toLowerCase()}`} className="flex justify-between items-center dark:bg-darkModeBackground bg-lightModeBackground p-2 rounded-sm" key={index}>
            <div className="flex gap-3">
              <div className="h-6 w-7 relative">
                <Image src={country.flags.png} className="object-cover" alt="Country Flag" fill />
              </div>
              <p>{country.name.common}</p>
            </div>
            <BsArrowRight />
          </Link>
        ))}
      </div>}
    </div>
  )
}

export default SearchCountries