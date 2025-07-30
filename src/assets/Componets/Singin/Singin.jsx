import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import './Singin.css'

function Signin() {
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
      throw new Error('Invalid email or password. Please try social login.');
    }
  };

  // Mock Google authentication
  const mockGoogleAuth = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      user: { name: 'Google User', email: 'user@gmail.com' },
      token: 'google-jwt-token-' + Date.now(),
      provider: 'google'
    };
  };

  // Mock Facebook authentication
  const mockFacebookAuth = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      user: { name: 'Facebook User', email: 'user@facebook.com' },
      token: 'facebook-jwt-token-' + Date.now(),
      provider: 'facebook'
    };
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
    setAuthMessage('');

    try {
      const response = await mockBackendAuth(formData.email, formData.password);
      setAuthMessage(`Welcome back, ${response.user.name}! Authentication successful.`);
      console.log('Authentication successful:', response);

    } catch (error) {
      setAuthMessage(error.message);
    } finally {
      setIsLoading(false);
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

  // Handle Google login
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setAuthMessage('Signing in with Google...');

    try {
      const response = await mockGoogleAuth();
      setAuthMessage(`Welcome ${response.user.name}! Google authentication successful.`);
      console.log('Google authentication successful:', response);
      
      // Clear form data on successful social login
      setFormData({ email: '', password: '' });
      setErrors({});
      
    } catch (error) {
      setAuthMessage('Google authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Facebook login
  const handleFacebookLogin = async () => {
    setIsLoading(true);
    setAuthMessage('Signing in with Facebook...');

    try {
      const response = await mockFacebookAuth();
      setAuthMessage(`Welcome ${response.user.name}! Facebook authentication successful.`);
      console.log('Facebook authentication successful:', response);
      
      // Clear form data on successful social login
      setFormData({ email: '', password: '' });
      setErrors({});
      
    } catch (error) {
      setAuthMessage('Facebook authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-page-container">
      <div className="signin-content-wrapper">
        {/* Main Sign-in Card */}
        <div className="signin-card">
          {/* Header Section */}
          <div className="signin-header">
            <h1 className="signin-title">Sign In</h1>
            <p className="signin-subtitle">Welcome back! Please enter your details.</p>
          </div>

          {/* Demo Credentials Info */}
          {/* <div className="demo-info">
            <p className="demo-title">Demo Credentials:</p>
            <p className="demo-credential">admin@example.com / admin123</p>
            <p className="demo-credential">Or try social login below ↓</p>
          </div> */}

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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  disabled={isLoading}
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
                  disabled={isLoading}
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
              <div className={`auth-message ${
                authMessage.includes('Welcome') || authMessage.includes('successful')
                  ? 'success' 
                  : 'error'
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
            <button 
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="social-button google-button"
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {isLoading ? 'Loading...' : 'Google'}
            </button>

            {/* Facebook Login Button */}
            <button 
              onClick={handleFacebookLogin}
              disabled={isLoading}
              className="social-button facebook-button"
            >
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {isLoading ? 'Loading...' : 'Facebook'}
            </button>
          </div>

          {/* Sign Up Link */}
          {/* <p className="signup-link">
            Don't have an account?{' '}
            <a href="#" className="signup-link-text">Sign up for free</a>
          </p> */}
        </div>
      </div>

    
    </div>
  );
}

export default Signin;