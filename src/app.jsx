import React, { useState } from 'react';
import Button from 'uielements/button/button.component';
import Editor from 'for-editor'
import 'assets/css/main.css';
import './app.scss';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-1 flex-col justify-center items-center">
        <p className="text-5xl text-gray-200">Welcome to Notes.md!</p>
        <Editor 
          value={value}
          onChange={val => setValue(val)}
          placeholder="Add Notes"
          language="en"
        />
        <Button buttonText="Get Started"/>
    </div>
  );
}
