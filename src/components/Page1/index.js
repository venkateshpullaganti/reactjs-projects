import React from "react";
import { css, cx } from "emotion";



import logo from "../../logo.svg";


function Page1() {
    const color = "cyan";
    return (
        <div className="h-screen bg-gray-800 flex justify-center items-center flex-col">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="text-white">Page 1</p>
            <div className={css`
                height:100px;
                width:100px;
                font-size:20px;
                border-radius:4px;
                background-color:purple;
                &:hover{
                    color:${color};
                }
            `
            }>
                emotion.
            </div>
        </div >

    );
}

export default Page1;
