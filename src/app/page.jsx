'use client'

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Navbar from '../components/navbar';
import SearchCountries from '../components/search-countries';
import FilterCountries from '../components/filter-countries';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [url, setUrl] = useState('https://restcountries.com/v3.1/all');
  const [countriesList, setCountriesList] = useState([]);
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);
  useEffect(() => {
    if (data) {
      setCountriesList(data);
    }
  }, [data]);
  const searchFilter = (countries) => {
    setCountriesList(countries);
  };

  return (
    <main className="">
      <Navbar />
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
        <SearchCountries />
        <FilterCountries searchFilter={searchFilter} />
      </div>
      <div className="grid lg:gap-12 gap-10 grid-cols-4 justify-center items-center py-10 lg:mx-16 md:mx-12 mx-9" >
        {countriesList.map((country, index) => (
          <Link key={index} className="col-span-4 md:col-span-2 lg:col-span-1 rounded-lg self-center shadow-md bg-white dark:bg-darkModeElements no-underline text-lightModeText dark:text-white" href={`/countries/${country.cca3.toLowerCase()}`}>
            <div className="">
              <div className="aspect-video relative">
                <Image src={country.flags.png} className="object-cover rounded-t-lg" alt="Country Flag" fill />
              </div>
              <div className="p-7">
                <h3 className="mb-4 font-extrabold">{country.name.common}</h3>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-1"><p className="font-extrabold">Population:</p>{country.population.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><p className="font-extrabold">Region:</p>{country.region}</span>
                  <span className="flex items-center gap-1"><p className="font-extrabold">Capital:</p>{country.capital}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}