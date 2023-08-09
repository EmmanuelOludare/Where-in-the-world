'use client'

import { Skeleton } from '../../../components/ui/skeleton';
import Navbar from '../../../components/navbar';
import { BsArrowLeft } from 'react-icons/bs';

const Country = ({ params }) => {
    return (
        <main className=''>
            <Navbar />
            <div className="px-8 flex flex-col gap-6">
                <div className="flex items-center justify-center gap-[10px] py-2 shadow-lg w-[110px] mt-4 cursor-pointer" onClick={() => router.back()}>
                    <BsArrowLeft /><p className="">Back</p>
                </div>
                <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:mt-12">
                    <Skeleton className="aspect-video relative lg:w-[43%] lg:h-80 h-40 w-80 bg-gray-400"></Skeleton>
                    <div className="flex flex-col justify-center gap-8 lg:gap-6">
                        <Skeleton className="h-6 w-44 bg-gray-200 mb-4"></Skeleton>
                        <div className="flex flex-col justify-center gap-12 lg:flex-row">
                            <div className="flex flex-col gap-2">
                                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                                <Skeleton className="h-4 w-36 bg-gray-200"></Skeleton>
                            </div>
                        </div>
                        <div className="">
                            <Skeleton className="h-4 w-32 bg-gray-200"></Skeleton>
                            <div className='flex gap-3 mt-3'>
                                <Skeleton className="h-8 w-12 py-2 px-5 bg-gray-200"></Skeleton>
                                <Skeleton className="h-8 w-12 py-2 px-5 bg-gray-200"></Skeleton>
                                <Skeleton className="h-8 w-12 py-2 px-5 bg-gray-200"></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}
``
export default Country