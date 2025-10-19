import React, { useState } from 'react';
import { Mail, Lock, User, Leaf } from 'lucide-react';

// Assuming you have placed 'bird.png' in your public folder or imported it
const birdImage = '/brain.png'; // ⬅️ Change this path if your image is in src/assets/

// Reusable Input Component
const AuthInput = ({ icon: Icon, type, placeholder, name, value, onChange }) => (
  <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-blue-400 transition duration-150">
    <Icon className="absolute left-3 w-5 h-5 text-gray-400" />
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full pl-11 pr-4 py-3 text-gray-800 bg-transparent outline-none"
      required
    />
  </div>
);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Login' : 'Sign Up'} attempted:`, formData);
    // TODO: Add actual API call here
  };

  const title = isLogin ? 'Welcome Back to BetterX' : 'Join BetterX Today';
  const callout = isLogin ? 'Your daily dose of calm awaits.' : 'Find your inner peace and track your mood.';
  const buttonText = isLogin ? 'Login Securely' : 'Create Account';

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB] p-4">
      
      {/* Main Container */}
      <div className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        <div className="flex items-center justify-center p-8 md:p-1">
            <div className="w-full max-w-sm">
              
              <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-700 pb-4">{title}</h1>
                <p className="text-lg text-gray-500 mb-10">{callout}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {!isLogin && (
                  <AuthInput icon={User} type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} />
                )}
                <AuthInput icon={Mail} type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />
                <AuthInput icon={Lock} type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />

                <button
                  type="submit"
                  className="w-full bg-[#65b0cf] text-white font-semibold py-3 rounded-lg hover:bg-[#51879e] transition duration-150 shadow-md mt-6"
                >
                  {buttonText}
                </button>
                
                {isLogin && (
                  <div className="text-right">
                    {/* <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                      Forgot Password?
                    </a> */}
                  </div>
                )}
              </form>

              <div className="mt-8 pt-4 border-t text-center text-gray-600">
                <p>
                  {isLogin ? "New to BetterX?" : "Already a member?"}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 font-bold text-[#4e798a] hover:underline"
                  >
                    {isLogin ? 'Create an Account' : 'Login Here'}
                  </button>
                </p>
              </div>
          </div>
        </div>

        <div 
          className="relative hidden lg:flex items-end p-8 bg-cover bg-center" 
          style={{ backgroundImage: `url(${birdImage})` }} 
        >
          {/* Overlay for text readability and branding */}
          {/* <div className="absolute inset-0 bg-blue-600 opacity-60"></div>  */}
          
          {/* <div className="relative z-10 text-white">
            <div className="flex items-center text-xl font-bold space-x-2 mb-4">
                <Leaf className="w-6 h-6" />
                <span>MindDorm</span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight">
              A space for your mind to rest and grow.
            </h2>
            <p className="mt-2 text-lg opacity-90">
              Personalized tools to reduce stress, improve sleep, and boost your mental well-being.
            </p>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default AuthPage;