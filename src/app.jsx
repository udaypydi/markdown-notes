import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'uielements/button/button.component';
import 'assets/css/main.css';
import './app.scss';

function App(props) {

  function createNewNotes() {
    const { history } = props;
    history.push('/new-notes');
  }
  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-1 flex-col justify-center items-center">
        <p className="text-5xl text-gray-200">Welcome To Notes.md!</p>
        <Button 
          className="mt-2" 
          buttonText="Get Started"
          onClick={createNewNotes}
        />
    </div>
  );
}

export default withRouter(App);
