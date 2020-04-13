/** @jsx jsx */
import React from "react";
import { observable } from "mobx";

// import { jsx } from "emotion";

// import { cx } from "emotion";



import { jsx } from "@emotion/core";



// import { css, jsx } from "@emotion/core";

import styled from '@emotion/styled'

// import logo from "../../logo.svg";
import { Provider, inject, observer } from "mobx-react";

// const Pagediv = styled.div`

//     ${tw('h-screen bg-gray-800 flex justify-center items-center flex-col')}
// `;

// const StyledBtn = styled.button`
//     height:50px;
//     widht:100px;
//     color : green;
//     background-color:grey
// `


// const StyledBtn2 = styled.button`
//     widht:100px;
//     height:100px;
//     font-weight:bold;
//     background:${props =>
//         props.Selectedtheme.name === "light" ? "white" : "red"
//     };
//     color:${props =>
//         props.Selectedtheme.name === "light" ? "black" : "white"
//     };
// `

// const ThemedDiv = styled.div(
//     {
//         height: "100px",
//         width: "100px",
//         border: "1px solid pink",
//         bordeRadius: "3px"

//     },
//     props => ({ color: props.selectedTheme.color, backgroundColor: props.selectedTheme.background }))

type Props = {
    name: string,
    temp: string
}

const DivStyled = styled.div`
    padding:50px;
    border:2px solid green;
`


// @inject("temp")
// @observer
// class A extends React.Component<Props> {

//     @observable name = "";

//     onChange = (event) => {
//         this.name = event.target.value;
//     }

//     render() {
//         console.log("A", this.props.temp);
//         return (
//             <DivStyled>
//                 <input style={{ background: "green" }} defaultValue={this.name} onChange={this.onChange} />
//                 <B name={this.name} />
//             </DivStyled>
//         )
//     }
// }


// // @inject("temp")
// class B extends React.Component<Props> {


//     render() {
//         console.log("B", this.props.temp, this.props.name);
//         return (
//             <DivStyled>

//                 <C />

//              </DivStyled>
//         )
//     }
// }

// @inject("temp")
// class C extends React.Component<Props> {


//     render() {
//         console.log("C", this.props.temp);
//         return (
//             <p>THis is C comp.</p>

//         )
//     }
// }


class Page1 extends React.Component {
    render() {
        return (
            <DivStyled>

                <Provider temp={"Venky"}>
                    {/* <A /> */}
                    <div>Page 1</div>
                </Provider>

            </DivStyled>
        )
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedTheme: "light"
    //     }


    //     this.themeOptions = {
    //         light: {
    //             id: 0,
    //             key: "light",
    //             name: "light theme",
    //             color: "black",
    //             background: "white"
    //         },
    //         dark: {
    //             id: 1,
    //             key: "dark",
    //             name: "dark theme",
    //             color: "white",
    //             background: "black"
    //         },
    //         monaki: {
    //             id: 2,
    //             key: "monaki",
    //             name: "monaki",
    //             color: "purple",
    //             background: "lightgrey"
    //         }
    //     }

    // }
    // changeTheme = (e) => {
    //     this.setState({ selectedTheme: e.target.value });
    // }




    // render() {
    //     return (
    //         <Pagediv >
    //             <img src={logo} className="App-logo" alt="logo" />
    //             <p className="text-white">Page 1</p>

    //             <div className={css`   /* using the raw css in emotion */
    //             height:100px;       /*this doesn't mean an inline-css */
    //             width:100px;
    //             font-size:20px;                 
    //             border-radius:4px;
    //             background-color:purple;
    //             &:hover{
    //                 color:${this.color};
    //             }
    //         `

    //             }>
    //                 emotion.
    //         </div>



    //             <div css={{
    //                 backgroundColor: this.themeOptions[this.state.selectedTheme].background,   /*css props by object styling*/
    //                 color: this.themeOptions[this.state.selectedTheme].color,
    //                 height: "100px",
    //                 width: "100px",
    //                 '&:hover': {
    //                     color: "white"
    //                 }

    //             }}
    //                 className="border"
    //             >Css props - object style </div>

    //             <div css={css`
    //         background-color: yellow; /* css props by string style*/
    //         height:100px;
    //         width:100px;
    //         &:hover{
    //             color:${this.color};
    //         }
    //         `}>
    //                 Css props - string style.
    //         </div>
    //             <div className="flex flex-col h-20">
    //                 <form>
    //                     <StyledBtn type="button">styled component</StyledBtn>

    //                     <StyledBtn2 Selectedtheme={{ name: "dark" }} onClick={this.changeTheme} >themed Button</StyledBtn2>

    //                     <select value={this.state.selectedTheme} onChange={this.changeTheme}>
    //                         {
    //                             Object.keys(this.themeOptions).map(theme =>
    //                                 <option key={theme} value={theme}>{theme}</option>
    //                             )
    //                         }
    //                     </select>

    //                 </form>
    //                 <ThemedDiv selectedTheme={this.themeOptions[this.state.selectedTheme]} >ThemedDiv</ThemedDiv>
    //             </div>
    //         </Pagediv>

    //     );
    // }
}

export default Page1;






// let numbers = observable([1, 2, 3])
// var sum = computed(() => numbers.reduce((a, b) => a + b, 0))

// var disposer = autorun(() => console.log(sum.get()))
// // prints '6'
// numbers.push(4)
// // prints '10'

// // disposer()
// numbers.push(5)
// // won't print anything, nor is `sum` re-evaluated
