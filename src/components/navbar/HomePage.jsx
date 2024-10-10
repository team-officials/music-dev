import alanImg from "../../asset/alan-jackson-poster-template-a9d330a483af374fd5ab3449c23155ad_screen.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
    const handlePlayClick = () => {
        alert("For you to play or download this music, you will have to encrypt this music, which costs $765.23");
    };
    
    const handleDownloadClick = () => {
        alert("For you to play or download this music, you will have to encrypt this music, which costs $765.23");
    };
    

    return (
        <div className="bg-slate-100">
            <div className="m-[40px] sm:m-[20px]">
                <div className="">
                    <div className="p-3 flex gap-32">
                       

                        <div className="mb-9">
                            <h1 className="text-[40px] font-bold">Unreleased Song.</h1>
                            <img className="sm:w-9/12 sm:h-full" src={alanImg} alt="Alan Jackson" />
                        </div>

                        <div>
                            <div className="p-3 flex gap-2">
                                <span className="font-bold text-2xl">Title:</span>
                                <h1 className="mt-[6px]">
                                    Strangers that become lovers
                                </h1>
                                <div className="flex items-center mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                        <path className="text-blue-500" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mt-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-32 border border-blue-700 rounded"
                                    onClick={handlePlayClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-6">
                                <button
                                    className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-4 px-24 rounded inline-flex items-center"
                                    onClick={handleDownloadClick}
                                >
                                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                    </svg>
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
