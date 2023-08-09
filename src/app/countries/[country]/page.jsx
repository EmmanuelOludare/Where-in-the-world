'use client'

import Navbar from '../../../components/navbar';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowLeft } from 'react-icons/bs';

const Country = ({ params }) => {
    const router = useRouter()
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR(`https://restcountries.com/v3.1/alpha/${params.country}`, fetcher);
    return (
        <main className=''>
            <Navbar />
            <div className="lg:px-16 md:px-12 px-5 flex flex-col gap-6">
                <div className="flex items-center justify-center gap-[10px] py-2 shadow-lg w-[110px] mt-4 cursor-pointer" onClick={() => router.back()}>
                    <BsArrowLeft /><p className="">Back</p>
                </div>
                {!isLoading &&
                    <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:mt-12">
                        <div className="aspect-video relative lg:w-[43%] lg:h-80">
                            <Image src={data[0].flags.png} className="object-cover" alt="Country Flag" fill />
                        </div>
                        <div className="flex flex-col justify-center gap-8 lg:gap-6">
                            <h3 className="mt-10 lg:mt-4 text-2xl">{data[0].name.common}</h3>
                            <div className="flex flex-col justify-center gap-12 lg:flex-row">
                                <div className="flex flex-col gap-1">
                                    <span className="text-md flex items-center gap-px"><p className="font-extrabold">Native Name:</p>{data[0].name.nativeName[Object.keys(data[0].name.nativeName)[0]].official}</span>
                                    <span className="text-md flex items-center gap-px"><p className="font-extrabold">Population:</p>{data[0].population.toLocaleString()}</span>
                                    <span className="text-md flex items-center gap-px"><p className="font-extrabold">Region:</p>{data[0].region}</span>
                                    <span className="text-md flex items-center gap-px"><p className="font-extrabold">Sub Region:</p>{data[0].subregion}</span>
                                    <span className="text-md flex items-center gap-px"><p className="font-extrabold">Capital:</p>{data[0].capital}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-md flex items-center gap-px"><p className="font-extrabold">Top Level Domain:</p>{data[0].tld[0]}</span>
                                    <span className="text-md flex items-center gap-px"><p className="font-extrabold">Currencies:</p>{data[0].currencies[Object.keys(data[0].currencies)[0]].name}</span>
                                    <span className="text-md flex items-center gap-px"><p className="font-extrabold">Languages:</p>{data[0].languages[Object.keys(data[0].languages)[0]]}</span>
                                </div>
                            </div>
                            <div className="">
                                <p className="">Border Countries</p>
                                <div className='flex gap-3 mt-1'>
                                    {
                                        data[0].borders ? data[0].borders.map((country, index) => {
                                            if (index < 3) {
                                                return (
                                                    <Link href={`/countries/${country.toLowerCase()}`} className=''>
                                                        <div className="py-2 px-5 shadow-lg" key={index}>{country}</div>
                                                    </Link>
                                                );
                                            }
                                        }) : '-'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}
``
export default Country