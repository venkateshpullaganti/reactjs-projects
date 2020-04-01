import React from "react";


import logo from "../../logo.svg";

function Page1() {
    return (
        <div className="h-screen bg-gray-800 flex justify-center items-center flex-col">
        <img src={logo} className="App-logo " alt="logo" />
        <p className="text-white">Page 1</p>
        </div>
    );
}

export default Page1;
