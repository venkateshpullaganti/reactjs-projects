/** @jsx jsx */
import React from "react";

// import { jsx } from "emotion";

// import { cx } from "emotion";

import { jsx } from "@emotion/core";

// import { css, jsx } from "@emotion/core";

import styled from "@emotion/styled";

// import logo from "../../logo.svg";
import { Provider } from "mobx-react";

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
   name: string;
   temp: string;
};

const DivStyled = styled.div`
   padding: 50px;
   border: 2px solid green;
`;

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
      );
   }
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
