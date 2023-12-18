import axios from 'axios';
import React, { useState } from 'react';
import { showErrorToast, showSuccessToast } from '../Helper/ToastHelper';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      showErrorToast('Email wajib di isi');
      return;
    }

    if (!password) {
      showErrorToast('Password wajib di isi');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('isLoggedIn', 'true');
        console.log('Login successful');
        showSuccessToast('Login Berhasil!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      showErrorToast(error.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold leading-tight tracking-wide text-slate-500 dark:text-white text-center">
                Alpha Clothes
              </h1>
              <h1 className="text-xl font-bold leading-tight tracking-wide text-slate-900 dark:text-white text-center">
                LOGIN
              </h1>
            </div>
            {/* Form Login */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="alpha@clothes.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Belum punya akun?{' '}
                <a
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    // <div
    //   style={{
    //     maxWidth: '600px',
    //     margin: 'auto',
    //     padding: '40px',
    //     border: '1px solid #ddd',
    //     borderRadius: '8px',
    //   }}
    // >
    //   {!isLoggedIn ? (
    //     <div>
    //       <h2>Login</h2>
    //       <form style={{ display: 'flex', flexDirection: 'column' }}>
    //         <label style={{ marginBottom: '8px' }}>Email:</label>
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={handleEmailChange}
    //           style={{ padding: '8px', marginBottom: '16px', borderRadius: '4px' }}
    //         />

    //         <label style={{ marginBottom: '8px' }}>Password:</label>
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={handlePasswordChange}
    //           style={{ padding: '8px', marginBottom: '16px', borderRadius: '4px' }}
    //         />

    //         <button type="button" onClick={handleLogin} style={{ marginTop: '10px' }}>
    //           Login
    //         </button>
    //       </form>
    //     </div>
    //   ) : (
    //     <div style={{ textAlign: 'center' }}>
    //       <h2>Welcome!</h2>
    //       <p style={{ fontSize: '1.2em' }}>You are now logged in.</p>

    //       <button
    //         type="button"
    //         onClick={handleLogout}
    //         style={{
    //           padding: '10px',
    //           backgroundColor: '#f44336',
    //           color: 'white',
    //           borderRadius: '4px',
    //           cursor: 'pointer',
    //           marginRight: '10px',
    //         }}
    //       >
    //         Logout
    //       </button>

    //       <button
    //         type="button"
    //         onClick={handleGoToHome}
    //         style={{
    //           padding: '10px',
    //           backgroundColor: '#2196F3',
    //           color: 'white',
    //           borderRadius: '4px',
    //           cursor: 'pointer',
    //         }}
    //       >
    //         Go to Home
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
};

export default Login;
