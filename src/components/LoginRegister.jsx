import React, { useState } from 'react';
import { profiles, religions, motherTongues } from './dropdownData';
import './Login.css';
const LoginRegister = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'Male',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    religion: religions[0].value,
    dob: '',
    motherTongue: motherTongues[0].value,
    profile: profiles[0].value,
    educationalQualifications: ''
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginRegister = (e) => {
    e.preventDefault();
    if (isLogin) {
     
    } else {
    
    }
  };

  return (
    <div className="container mt-5">
      <div className="login-register-box">
        <nav className="nav nav-pills nav-justified">
          <a
            className={`nav-link ${isLogin ? 'active' : ''}`}
            onClick={handleToggle}
            style={{backdropFilter:'red'}}
          >
            Login
          </a>
          <a
            className={`nav-link ${!isLogin ? 'active' : ''}`}
            onClick={handleToggle}
          >
            Register
          </a>
        </nav>
        <form onSubmit={handleLoginRegister} className="mt-3">
          {!isLogin && (
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Profile:</label>
                <select
                  className="form-control"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                >
                  {profiles.map((profile) => (
                    <option key={profile.value} value={profile.value}>
                      {profile.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select
                  className="form-control"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Religion:</label>
                <select
                  className="form-control"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                >
                  {religions.map((religion) => (
                    <option key={religion.value} value={religion.value}>
                      {religion.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mother Tongue:</label>
                <select
                  className="form-control"
                  name="motherTongue"
                  value={formData.motherTongue}
                  onChange={handleChange}
                >
                  {motherTongues.map((tongue) => (
                    <option key={tongue.value} value={tongue.value}>
                      {tongue.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Educational Qualifications:</label>
                <input
                  type="text"
                  className="form-control"
                  name="educationalQualifications"
                  value={formData.educationalQualifications}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          {isLogin && (
            <div className="form-group">
              <label>Email / Mobile Number:</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              {isLogin ? 'Sign In' : 'Submit'}
            </button>
            {!isLogin && (
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
