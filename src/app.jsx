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
        <Button buttonText="Get Started"/>
    </div>
  );
}
