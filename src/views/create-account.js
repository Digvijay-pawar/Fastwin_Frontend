import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './create-account.css'

import authClient from '../api-client/auth-client'

const CreateAccount = (props) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [otp, setOtp] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const data = await authClient.register({ mobileNumber, password });
      console.log('Registration successful', data);
      // Handle successful registration (e.g., update state, redirect, etc.)
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Handle registration failure (e.g., display an error message)
    }
  };
  return (
    <div className="create-account-container">
      <Helmet>
        <title>Create-Account</title>
        <meta
          property="og:title"
          content="Create-Account - Anguished Loving Salmon"
        />
      </Helmet>
      <div className="create-account-container1">
        <div className="create-account-container2">
          <span className="create-account-text">Create Account</span>
          <svg viewBox="0 0 1024 1024" className="create-account-icon">
            <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
          </svg>
        </div>
        <span className="create-account-text1">
          <span className="create-account-text2">Create Account</span>
          <br></br>
        </span>
        <div className="create-account-container3">
          <div className="create-account-container4">
            <form className="create-account-form" onSubmit={handleRegister}>
              <ul className="create-account-ul list">
                <li className="list-item"></li>
                <li className="create-account-li list-item">
                  <input
                    type="text"
                    placeholder="mobileNumber"
                    className="create-account-textinput input"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Login Password"
                    className="create-account-textinput1 input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="create-account-textinput2 input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Invite Code"
                    className="create-account-textinput3 input"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="OTP"
                    className="create-account-textinput4 input"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}

                  />
                  <button
                    type="button"
                    className="create-account-button button"
                  >
                    OTP
                  </button>
                </li>
                <li className="create-account-li1 list-item">
                  <button
                    type="submit"
                    className="create-account-button1 button"
                  >
                    Create Account
                  </button>
                </li>
                <li className="create-account-li2 list-item">
                  <Link to="/" className="create-account-navlink button">
                    <span>
                      <span>Login</span>
                      <br></br>
                    </span>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
