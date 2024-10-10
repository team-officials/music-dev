import React, { useState } from 'react';

const MusicPlayer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
    // Handle actual play/pause logic here
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="absolute right-4 top-4">
        <div onClick={toggleDarkMode} className="cursor-pointer">
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {/* Dark Mode Icon */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[#0A1122]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {/* Light Mode Icon */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </div>
      </div>
      <div className={`bg-[#F8FAFC] dark:bg-[#0A1122] w-screen h-screen flex flex-col items-center justify-center`}>
        <div className={`relative w-player flex flex-col rounded-xl shadow-player-light bg-player-light-background border border-player-light-border ${isDarkMode ? 'dark:shadow-player-dark dark:bg-player-dark-background dark:border-player-dark-border' : 'dark:backdrop-blur-xl'}`}>
          <div className="px-10 pt-10 pb-4 flex items-center z-50">
            <img src="cover_art_url" className="w-24 h-24 rounded-md mr-6 border border-bg-player-light-background dark:border-cover-dark-border" alt="Cover Art" />
            <div className="flex flex-col">
              <span className="font-sans text-lg font-medium leading-7 text-slate-900 dark:text-white">Song Name</span>
              <span className="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400">Artist Name</span>
              <span className="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400">Album Name</span>
            </div>
          </div>
          <div className="w-full flex flex-col px-10 pb-6 z-50">
            <input type="range" className="amplitude-song-slider mb-3" step=".1" />
            <div className="flex w-full justify-between">
              <span className="amplitude-current-time text-xs font-sans tracking-wide font-medium text-sky-500 dark:text-sky-300">{currentTime}</span>
              <span className="amplitude-duration-time text-xs font-sans tracking-wide font-medium text-gray-500">{duration}</span>
            </div>
          </div>
          <div className="h-control-panel px-10 rounded-b-xl bg-control-panel-light-background border-t border-gray-200 flex items-center justify-between z-50 dark:bg-control-panel-dark-background dark:border-gray-900">
            <div className="cursor-pointer amplitude-prev">
              {/* Previous Icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 7C26 5.76393 24.5889 5.05836 23.6 5.8L11.6 14.8C10.8 15.4 10.8 16.6 11.6 17.2L23.6 26.2C24.5889 26.9416 26 26.2361 26 25V7Z" fill="#94A3B8" />
              </svg>
            </div>
            <div onClick={handlePlayPause} className="cursor-pointer amplitude-play-pause w-24 h-24 rounded-full bg-white border border-play-pause-light-border shadow-xl flex items-center justify-center dark:bg-play-pause-dark-background dark:border-play-pause-dark-border">
              {isPlaying ? (
                <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="6" height="36" rx="3" fill="#94A3B8" />
                  <rect x="18" width="6" height="36" rx="3" fill="#94A3B8" />
                </svg>
              ) : (
                <svg id="play-icon" width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z" className="fill-slate-500 dark:fill-slate-400" />
                </svg>
              )}
            </div>
            <div className="cursor-pointer amplitude-next">
              {/* Next Icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7C6 5.76393 7.41115 5.05836 8.4 5.8L20.4 14.8C21.2 15.4 21.2 16.6 20.4 17.2L8.4 26.2C7.41115 26.9416 6 26.2361 6 25V7Z" fill="#94A3B8" />
              </svg>
            </div>
          </div>
          {/* Additional Content Here */}
        </div>
        <div className="flex items-center justify-center mt-10">
          <a className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 flex items-center hover:bg-sky-400/20" target="_blank" href="https://tailwindcss.com/">
            Designed With: <strong className="font-semibold">Tailwind CSS v3.0</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
