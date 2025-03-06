import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SignUp from './components/SignUp.jsx';
import './components/login.css'; 

function Page() {
  return (
    <StrictMode>
      <SignUp />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Page />);

export default Page;