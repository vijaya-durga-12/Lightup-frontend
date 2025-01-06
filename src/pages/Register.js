import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import sideImage from '../../src/assets/images/cart.jpg';

const Register = () => {
  const Navigater=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',  
    password: '',
    role: '',
  });

  const [error, setError] = useState(''); // To track errors
  const [loading, setLoading] = useState(false); // To show loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
  
    try {
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        phone_number: formData.phoneNumber, // Corrected to phone_number
      };
  
      console.log('User data being sent to the API:', newUser); // Log the data being sent
  
      const response = await fetch(
        'https://39d2-2401-4900-1cb0-3d23-787c-3e46-f9fb-fb1.ngrok-free.app/api/users/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        }
      );
  
      setLoading(false); // Set loading state to false after the request
  
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error response:', errorData); // Log the error response from the API
        setError(errorData.message || 'Failed to create account');
        return;
      }
  
      // const data = await response.json();
      alert('User registered successfully');
      Navigater('/login')
    } catch (error) { 
      setLoading(false); // Set loading state to false in case of error
      console.error('Error during registration:', error);
      setError('Registration failed, please try again later');
    }
  };
  
  const handleGoogleSignUp = () => {
    console.log('Google Sign Up clicked');
    // Google Sign Up implementation (e.g., Firebase or OAuth)
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={sideImage}  // Corrected image reference
            alt="Sign Up"
            className="img-fluid rounded"
            style={{ maxHeight: '650px' }}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div style={{ maxWidth: '400px' }}>
            <h2 className="fw-bold mb-4">Create an Account</h2>
            <p className="text-muted mb-4">Enter your details below</p>

            <form onSubmit={handleSubmit}>
              {[ 
                { type: 'text', name: 'name', placeholder: 'Name' },
                { type: 'email', name: 'email', placeholder: 'Email' },
                { type: 'text', name: 'phoneNumber', placeholder: 'Phone Number' }, // Fixed name here
                { type: 'password', name: 'password', placeholder: 'Password' },
                { type: 'text', name: 'role', placeholder: 'Role' },
              ].map((input, index) => (
                <input
                  key={index}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                  required
                  aria-label={input.placeholder}
                />
              ))}

              {error && <p className="text-danger">{error}</p>} {/* Display error message */}

              <button
                type="submit"
                className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none"
                disabled={loading} // Disable button when loading
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <button
              onClick={handleGoogleSignUp}
              className="w-full d-flex align-items-center justify-content-center mt-3 py-2 px-4 border border-gray-300 rounded-lg"
            >
              <FcGoogle className="me-2" size={20} />
              Sign Up with Google
            </button>

            <p className="text-muted mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-black">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
