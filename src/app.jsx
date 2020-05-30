import React from 'react';
import Button from 'uielements/button/button.component';
import SideBar from 'components/sidebar/sidebar.component';
import logo from './logo.png';
import 'assets/css/main.css';
import './app.scss';

export default function App() {
  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-1 flex-col justify-center items-center">
        <p className="text-5xl text-gray-200">Welcome to Notes.md!</p>
        <img 
            className="m-4"
            width="250"
            src="https://glow-guides.disciplemedia.com/assets/google_login_button-6474359c9c06fef79ddc3d744342cca87e0b3ef8be1d0d7b8d71c22347c84075.png" 
            alt="Google" 
        />
        <img 
          className="m-4 bg-green-500"
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Evernote_Icon.png" 
          alt="Evernote" 
        />
        <Button buttonText="Get Started"/>
    </div>
  );
}
