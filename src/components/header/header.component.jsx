import React from 'react';
import Button from 'uielements/button/button.component';

const styles = {
    container: `
        flex flex-1 
        justify-center items-center 
        p-5 bg-gray-800 text-gray-100
        border-b-2 border-gray-300
        fixed w-screen z-40
    `,

    text: `text-4xl`
};

export default function Header(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Create Notes</h1>
        </div>
    );
}