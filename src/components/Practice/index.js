import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, autorun, action } from "mobx";

@observer
class Practice extends Component {
   @observable map = new Map();
   constructor(props) {
      super(props);
      this.map.set(1, {
         name: "venky",
         address: {
            city: "mpl",
            state: "AP",
            country: "India",
         },
      });
   }
   ChangeAdd = () => {
      this.map.set(1, {
         name: "Venky ",
         address: {
            city: "mpl",
            state: "AP",
            country: "India",
         },
      });
      this.map.set(2, {
         name: "raghu ",
         address: {
            city: "plnr",
            state: "AP",
            country: "India",
         },
      });
      this.map.set(3, {
         name: "ganesh ",
         address: {
            city: "mpl",
            state: "AP",
            country: "India",
         },
      });
      console.log(this.map);
      console.log(this.map.values());
   };
   render() {
      console.log("render called");
      const { name } = this.map.get(1);
      // console.log(person);

      return (
         <div className="flex flex-col">
            <button onClick={this.ChangeAdd}>btn</button>
            <p>
               {name}
               {/* {person.address.city}
               {person.address.state}
               {person.address.country} */}
            </p>
            <div style={{ width: "400px", border: "1px solid green" }}>
               Item1
            </div>
            <div style={{ width: "400px", border: "1px solid green" }}>
               Item2
            </div>
         </div>
      );
   }
}

export default Practice;
