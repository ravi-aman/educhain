



const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="flex flex-col md:flex-row rounded-lg overflow-hidden w-full px-20 gap-5 md:gap-10 animate-fade-in">
                <div className="w-full md:w-[55%] bg-blue-600 text-white p-10 flex flex-col md:pt-30 rounded-[10px] md:rounded-[50px] text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Start your<br/> Journey with us.
                    </h1>
                    <p className="mt-3 text-lg">
                        Discover India best community of <br/>Startups and MSME
                    </p>
                </div>

                <div className="p-6 md:p-10 bg-white rounded-[10px] w-full md:w-[35%] shadow-lg">
                    <h2 className="text-2xl font-bold text-center">Create an Account</h2>
                    <p className="text-center text-gray-600 mt-2">
                        Have an Account?{" "}
                        <a href="#" className="text-blue-600 font-semibold hover:underline">
                            Sign In
                        </a>
                    </p>
                    <form className="mt-6">
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300 border-gray-300 transition-all"
                        />

                        <label className="block text-gray-700 font-medium mt-4">Password</label>
                        <input
                            type="password"
                            placeholder="Create Password"
                            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300 border-gray-300 transition-all"
                        />

                        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md mt-6 hover:bg-blue-700 transition-all duration-300 hover:scale-[1.001]">
                            Create Account
                        </button>
                    </form>

                    <p className="text-gray-600 text-sm text-center my-5">
                        By creating an account, you agree to our <br />
                        <a href="#" className="text-blue-600 font-semibold hover:underline">
                            Terms of Service
                        </a>
                    </p>
                    <div className="my-4 border-b border-gray-300"></div>
                    <p className="text-gray-600 text-center my-6">Or create an account using:</p>
                    <button className="w-full flex items-center justify-center border py-2 mt-3 rounded-md hover:bg-gray-100 transition-all duration-300 border-gray-300 ">
                        <img src="public/dashboard/google.png" alt="Google" className="w-5 h-5 mr-3" />
                        Continue with Google
                    </button>
                    <button className="w-full flex items-center justify-center border py-2 mt-3 rounded-md hover:bg-gray-100 transition-all duration-300 border-gray-300 ">
                        <img src="public/dashboard/facebook.png" alt="Facebook" className="w-5 h-5 mr-3" />
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
