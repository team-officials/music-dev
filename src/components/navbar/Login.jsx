import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated for react-router-dom v6

const Login = () => {
    const [accessCode, setAccessCode] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const validAccessCode = "WRCS101012";  // Predefined access code
    const navigate = useNavigate();  // Updated to use useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');  // Clear any previous errors

        // Validate the access code
        if (accessCode !== validAccessCode) {
            setError('Invalid access code');  // Set error if the access code is incorrect
            return;
        }

        // Show loader and simulate an API call (5 seconds) before redirecting
        setLoading(true);
        setTimeout(() => {
            setLoading(false);  // Hide loader
            navigate('/Myview');  // Redirect to "viewplay" page
        }, 5000);  // 5 seconds loader
    };

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{
                        backgroundImage: 'url(https://th.bing.com/th/id/OIP.4XRcSyFKRi0XL_8paBo-igHaFY?rs=1&pid=ImgDetMain)',
                    }}
                >
                    {/* Optional image for background */}
                </div>

                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Welcome back!</h2>
                    <h1 className="text-xl text-gray-600 text-center">TO</h1>
                    <p className="text-xl text-gray-600 text-center">Alan Jackson</p>

                    {/* Divider */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">
                            Login with Access Code
                        </a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>

                    {/* Access Code Input */}
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label htmlFor="accessCode" className="block text-gray-700 text-sm font-bold mb-2">
                                Access Code
                            </label>
                            <input
                                id="accessCode"
                                type="text"
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                
                            />
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

                        {/* Loader and Login Button */}
                        {loading ? (
                            <div className="mt-4 flex justify-center">
                                <div className="loader"></div> {/* Add CSS for the loader */}
                            </div>
                        ) : (
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                >
                                    Login
                                </button>
                            </div>
                        )}
                    </form>

                    {/* Sign up link */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase"></a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
