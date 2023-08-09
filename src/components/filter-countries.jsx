'use client'

import { useState, useEffect } from 'react';


const FilterCountries = ({ searchFilter }) => {
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    const filterByRegion = async () => {
      if (selectValue) {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/region/${selectValue}`);
          const data = await response.json();
          searchFilter(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };
    filterByRegion();
  }, [selectValue]);

  const handleRegionChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="lg:mx-16 md:mx-12 mx-5">
      <div className="mt-7">
        <select onChange={handleRegionChange} className="border-none rounded-[5px] shadow-lg px-3 py-4 outline-none placeholder:lightModeInput bg-white dark:bg-darkModeElements text-lightModeInput" >
          <option disabled>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default FilterCountries