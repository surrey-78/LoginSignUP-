import React, { useState } from 'react';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    console.log('Signup submitted:', { email, password });
    alert('Signed Up Successfully');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <label>Re-type Password:</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    
  );
};

export default SignupComponent;
