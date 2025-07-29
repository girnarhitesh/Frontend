import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Shield } from 'lucide-react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './singin.css'

// Main App component to wrap SignInPage with GoogleOAuthProvider
export default function App() {
  // In a real application, replace 'YOUR_GOOGLE_CLIENT_ID' with your actual Google Client ID.
  // This ID is obtained from the Google Cloud Console for your project.
  // For development purposes in a sandboxed environment, a placeholder is used.
  const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <SignInPage />
    </GoogleOAuthProvider>
  );
}

function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [authMessage, setAuthMessage] = useState('');

  // Mock backend authentication function
  const mockBackendAuth = async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock user database
    const users = [
      { email: 'admin@example.com', password: 'admin123', name: 'Admin User' },
      { email: 'user@example.com', password: 'user123', name: 'Regular User' },
      { email: 'demo@example.com', password: 'demo123', name: 'Demo User' }
    ];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      return {
        success: true,
        user: { name: user.name, email: user.email },
        token: 'mock-jwt-token-' + Date.now()
      };
    } else {
      throw new Error('Invalid email or password');
    }
  };

  // Client-side form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handles form submission
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setAuthMessage(''); // Clear previous messages

    try {
      const response = await mockBackendAuth(formData.email, formData.password);
      setAuthMessage(`Welcome back, ${response.user.name}! Authentication successful.`);

      // In a real application, you would:
      // - Store the token securely (e.g., in localStorage or http-only cookies)
      // - Redirect the user to a dashboard or home page
      // - Update global authentication state (e.g., using React Context or Redux)
      console.log('Authentication successful:', response);

    } catch (error) {
      setAuthMessage(error.message); // Display error message from mock backend
    } finally {
      setIsLoading(false); // Always stop loading, regardless of success or failure
    }
  };

  // Handles input changes and clears errors as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error message for the specific field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle Google login success
  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse);
    setAuthMessage('Google login successful! Token received.');
    // In a real app, send credentialResponse.credential to your backend for verification
  };

  // Handle Google login error
  const handleGoogleError = () => {
    console.log('Google login failed');
    setAuthMessage('Google login failed. Please try again.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 relative overflow-hidden font-inter">
      {/* Background animated blobs for visual appeal */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        {/* Main Sign-in Card */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Sign In</h1>
            <p className="text-gray-500">Welcome back! Please enter your details.</p>
          </div>

          {/* Sign-in Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 placeholder-gray-400"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-200 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 flex items-center justify-center relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Authentication Message */}
            {authMessage && (
              <div className={`p-3 rounded-lg text-sm text-center ${authMessage.includes('Welcome') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                {authMessage}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col space-y-3">
            {/* Google Login Button */}
            <div className="w-full flex items-center justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                // You can customize the button appearance using theme, size, etc.
                // For example: theme="outline" size="large" text="signin_with"
                // The GoogleLogin component renders its own button, which might not
                // perfectly match the custom styling of other social buttons.
                // If full custom styling is needed, you'd use 'render' prop
                // and a custom button, then call 'prompt' on click.
              />
            </div>

            {/* Facebook Login Button (Placeholder for now) */}
            <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-200 shadow-sm hover:shadow-md">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-200 font-medium">Sign up for free</a>
          </p>
        </div>

        {/* Optional Features Section (commented out in original, keeping it that way) */}
        {/*
        <div className="features">
          <div className="feature">
            <div className="feature-icon-wrapper">
              <Shield className="feature-icon" />
            </div>
            <p className="feature-text">Secure</p>
          </div>
          <div className="feature">
            <div className="feature-icon-wrapper">
              <User className="feature-icon" />
            </div>
            <p className="feature-text">Private</p>
          </div>
          <div className="feature">
            <div className="feature-icon-wrapper">
              <Lock className="feature-icon" />
            </div>
            <p className="feature-text">Encrypted</p>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
