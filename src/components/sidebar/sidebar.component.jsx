import React from 'react';

const styles = {
    container: `
        h-screen w-1/5 border-r-2 
        border-gray-100 fixed
    `,
};

function SideBar(props) {
    return (
        <div className={styles.container}>
            <p>Sidebar</p>
        </div>
    );
}

export default SideBar;
