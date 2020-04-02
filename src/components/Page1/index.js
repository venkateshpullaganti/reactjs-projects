import React from "react";

/** @jsx jsx */
// import { cx } from "emotion";



// import { jsx } from "@emotion/core";

import { css, jsx } from "@emotion/core";

// import { css, jsx } from "@emotion/core";

import styled from '@emotion/styled'

import logo from "../../logo.svg";


const StyledBtn = styled.button`
    height:50px;
    widht:100px;
    color : green;
    background-color:grey
`


const StyledBtn2 = styled.button`
    widht:100px;
    height:100px;
    font-weight:bold;
    background:${props =>
        props.Selectedtheme.name === "light" ? "white" : "red"
    };
    color:${props =>
        props.Selectedtheme.name === "light" ? "black" : "white"
    };
`

const ThemedDiv = styled.div(
    {
        height: "100px",
        width: "100px",
        border: "1px solid pink"

    },
    props => ({ color: props.selectedTheme.color, backgroundColor: props.selectedTheme.background }))



class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTheme: "light"
        }

        const color = "cyan";
        this.themeOptions = {
            light: {
                id: 0,
                key: "light",
                name: "light theme",
                color: "black",
                background: "white"
            },
            dark: {
                id: 1,
                key: "dark",
                name: "dark theme",
                color: "white",
                background: "black"
            },
            monaki: {
                id: 2,
                key: "monaki",
                name: "monaki",
                color: "purple",
                background: "lightgrey"
            }
        }
        let themeNames = null;

    }
    changeTheme = (e) => {
        this.setState({ selectedTheme: e.target.value });
    }


    render() {
        return (
            <div className="h-screen bg-gray-800 flex justify-center items-center flex-col" >
                <img src={logo} className="App-logo" alt="logo" />
                <p className="text-white">Page 1</p>

                <div className={css`   /* using the raw css in emotion */
                height:100px;       /*this doesn't mean an inline-css */
                width:100px;
                font-size:20px;                 
                border-radius:4px;
                background-color:purple;
                &:hover{
                    color:${this.color};
                }
            `

                }>
                    emotion.
            </div>



                <div css={{
                    backgroundColor: "green",   /*css props by object styling*/
                    height: "100px",
                    width: "100px",
                    '&:hover': {
                        color: "white"
                    }

                }}>Css props - object style </div>

                <div css={css`
            background-color: yellow; /* css props by string style*/
            height:100px;
            width:100px;
            &:hover{
                color:${this.color};
            }
            `}>
                    Css props - string style.
            </div>
                <div className="flex flex-col h-20">
                    <form>
                        <StyledBtn type="button">styled component</StyledBtn>

                        <StyledBtn2 Selectedtheme={{ name: "dark" }} onClick={this.changeTheme} >themed Button</StyledBtn2>

                        <select value={this.state.selectedTheme} onChange={this.changeTheme}>
                            {
                                Object.keys(this.themeOptions).map(theme =>
                                    <option key={theme} value={theme}>{theme}</option>
                                )
                            }
                        </select>

                    </form>
                    <ThemedDiv selectedTheme={this.themeOptions[this.state.selectedTheme]} >ThemedDiv</ThemedDiv>
                </div>
            </div >

        );
    }
}

export default Page1;

