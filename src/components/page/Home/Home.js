'use client'
import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Hero from './Hero'

const Home = () => {
    const [regions, setRegions] = useState({})
    const backUrl = `https://travel-skies.work`
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${backUrl}/api/travel_skies/get_prefecture`,
                )
                console.log(response.data)
                setRegions(response.data)
            } catch (error) {
                console.error('データが取得できませんでした', error)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <Hero />
            <div>
                <h2 className="text-xl border-b-4 mb-4 ml-2 border-[#E8E824]">
                    天気を見たい都道府県を選択
                </h2>
            </div>

            <div className="bg-[#C4ECFC] bg-opacity-20 rounded-lg">
                {Object.entries(regions).map(([region, prefectures]) => (
                    <div key={region}>
                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto rounded-lg">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className=" overflow-hidden">
                                        {/* <div className="border rounded-lg overflow-hidden dark:border-neutral-700 dark:shadow-gray-900"> */}
                                        <table className="min-w-full divide-y ">
                                            <tbody className="divide-y">
                                                {/* <tbody className="divide-y divide-gray-200 dark:divide-neutral-700"> */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-large w-1/5 text-gray-800 dark:text-neutral-200">
                                                        {region}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-800 dark:text-neutral-200">
                                                        <div className="overflow-hidden">
                                                            {/* <ul className="flex flex-wrap space-x-5"> */}
                                                            <ul className="grid grid-cols-5 gap-2 lg:grid-cols-10 text-center">
                                                                {prefectures.map(
                                                                    prefecture => (
                                                                        <button
                                                                            type="button"
                                                                            className="py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                                            <li
                                                                                key={
                                                                                    prefecture
                                                                                }
                                                                                className=" flex items-center justify-center gap-2 m-0">
                                                                                <Link
                                                                                    href={`/${prefecture}`}>
                                                                                    {
                                                                                        prefecture
                                                                                    }
                                                                                </Link>
                                                                            </li>
                                                                        </button>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
