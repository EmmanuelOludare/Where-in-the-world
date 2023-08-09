import { Skeleton } from '../components/ui/skeleton';
import Navbar from '../components/navbar';
import SearchCountries from '../components/search-countries';
import FilterCountries from '../components/filter-countries';

const Loading = () => {
  return (
    <main className="">
      <Navbar />
      <SearchCountries />
      <FilterCountries />
      <div className="grid lg:gap-12 gap-10 grid-cols-4 justify-center items-center py-10 lg:mx-16 md:mx-12 mx-9" >
        {[...Array(100).keys()].map((i) => (
          <div key={i} className="col-span-4 md:col-span-2 lg:col-span-1 rounded-lg self-center h-60 w-80 mb-4">
            <Skeleton className="aspect-video relative h-40 w-80 bg-gray-400"></Skeleton>
            <div className="py-7">
              <Skeleton className="h-4 w-44 bg-gray-200 mb-4"></Skeleton>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Loading

/**v<div className="my-12 animate-pulse">
        {Array.from({ length: 100 }, (i) => (
          <div
            className="text-white flex flex-col justify-center items-center my-12"
            key={i}
          >
          </div>
        ))}
      </div> */