import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
    
        try {
          // Prepare user data for the API in the required format
          const newUser = {
            id: Date.now(), // Generate a unique ID for the user (or let the backend handle it if applicable)
            username: formData.name,
            email: formData.email,
            user_password: formData.password,
            user_confirmpassword: formData.confirmPassword,
            user_phonenumber: formData.phoneNumber,
          };
    
          // Log user data to the console for debugging
          console.log('User data to be sent to API:', newUser);
    
          // Send data to the API
          const response = await fetch(
            'https://cbb3-2401-4900-1cb0-2f04-c9bd-c34e-bb46-6095.ngrok-free.app/register',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newUser),
            }
          );
    
          // Check if the response is OK
          if (!response.ok) {
            throw new Error('Failed to create account');
          }
    
          // Parse the response JSON if successful
          const data = await response.json();
          console.log('User registered successfully:', data);
    
          // Show success alert
          alert('User registered successfully');
        } catch (error) {
          // Handle any errors that occurred during the request
          console.error('Error during registration:', error);
          alert('Registration failed');
        }
      };
  return (
    
      <div>
      {/* Signup Form Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src="../../assets/images/apple2.avif"
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
                  { type: 'text', name: 'phoneNumber', placeholder: 'Phone Number' },
                  { type: 'password', name: 'password', placeholder: 'Password' },
                  { type: 'password', name: 'confirmPassword', placeholder: 'Confirm Password' },
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

                <button
                  type="submit"
                  className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none"
                >
                  Create Account
                </button>
              </form>

              <button
                className="w-100 d-flex align-items-center justify-content-center mt-3"
              >
                <FcGoogle className="me-2" size={20} />
                Sign Up with Google
              </button>

              <p className="text-muted mt-4">
                Already have an account?{' '}
                <Link  to="/login" className="text-black">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

     
    
    </div>
  )
}

export default Register
