import alanImg from "../../asset/alan-jackson-poster-template-a9d330a483af374fd5ab3449c23155ad_screen.jpg";
import { FaFolder } from 'react-icons/fa';
const HomePage = () => {

    const handlePlayClick = () => {
        alert("For you to play or download this music, you will have to encrypt this music, which costs $765.23");
    };

    const handleDownloadClick = () => {
        alert("For you to play or download this music, you will have to encrypt this music, which costs $765.23");
    };

    return (
        <>
            <div className='h-[100%] lg:h-screen bg-slate-800 pt-3'>
                <div class="container mx-auto text-center flex justify-center mt-[50px] ">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="p-6 rounded-lg shadow-md flex justify-center items-center ">
                            <img
                                className="rounded-full w-52 h-52 md:w-48 md:h-48"
                                src={alanImg}
                                alt="Alan's Image"
                            />
                        </div>

                        <div class=" pt-5 p-6 rounded-lg shadow-md">
                            <div className=" place-self-center lg:col-span-7 flex-1">
                                <div className="p-3 flex gap-2">
                                    <span className="font-bold text-2xl text-white">Title:</span>
                                    <h1 className="mt-[6px] text-white">Strangers that Become Lovers</h1>
                                    <div className="flex items-center mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                            <path className="text-blue-500" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-4">
                                    <a
                                        onClick={handlePlayClick}
                                        href="#"
                                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                    >
                                        Play
                                    </a>

                                    <a
                                        onClick={handleDownloadClick}
                                        href="#"
                                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div class=" pt-5 p-6 rounded-lg shadow-md">
                            <div className=" place-self-center lg:col-span-7 flex-1">
                                <div className="p-3 flex gap-2">
                                    <span className="font-bold text-2xl text-white">Title:</span>
                                    <h1 className="mt-[6px] text-white">Love Heals Broken Heart</h1>
                                    <div className="flex items-center mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                            <path className="text-blue-500" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-4">
                                    <a
                                        onClick={handlePlayClick}
                                        href="#"
                                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                    >
                                        Play
                                    </a>

                                    <a
                                        onClick={handleDownloadClick}
                                        href="#"
                                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-100 border-t border-b mt-3 lg:mt-24 border-blue-500 text-blue-700 px-4 py-3" role="alert">
                    <p class="font-bold">Complete albums by Alan Jackson.</p>
                    <p class="text-sm">Cost: $3000.00 </p>
                    <FaFolder size={50} color="blue" />
                </div>
            </div>
        </>
    )
}

export default HomePage
