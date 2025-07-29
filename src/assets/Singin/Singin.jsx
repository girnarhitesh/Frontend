import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Singin.css';

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
    <div className="signin-page-container">
      {/* Background animated blobs for visual appeal */}

      <div className="signin-content-wrapper">
        {/* Main Sign-in Card */}
        <div className="signin-card">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="signin-title">Sign In</h1>
            <p className="signin-subtitle">Welcome back! Please enter your details.</p>
          </div>

          {/* Sign-in Form */}
          <div className="form-section">
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input password-input"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="password-toggle-icon" /> : <Eye className="password-toggle-icon" />}
                </button>
              </div>
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  className="checkbox"
                />
                <span className="checkbox-label">Remember me</span>
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="submit-button"
            >
              {isLoading ? (
                <div className="loading-content">
                  <div className="spinner"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Authentication Message */}
            {authMessage && (
              <div className={`auth-message ${authMessage.includes('Welcome') ? 'success' : 'error'
                }`}>
                {authMessage}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">or continue with</span>
            <div className="divider-line"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="social-buttons">
            {/* Google Login Button */}
            <div className="w-full flex items-center justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                // The GoogleLogin component renders its own button, which might not
                // perfectly match the custom styling of other social buttons.
                // If full custom styling is needed, you'd use 'render' prop
                // and a custom button, then call 'prompt' on click.
              />
            </div>

            {/* Facebook Login Button (Placeholder for now) */}
            <button className="social-button">
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
