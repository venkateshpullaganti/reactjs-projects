import React, { Component } from "react";
import { observable, autorun, action, reaction, set, get } from "mobx";
import { observer } from "mobx-react";
import { enableLogging } from "mobx-logger";

const config = {
   predicate: () => true,
   action: true,
   reaction: true,
   transaction: true,
   compute: true,
};

enableLogging(config);

@observer
class Practice extends Component {
   count = 0;
   isCountChanged = false;
   @observable arr = [1, 2, 3, 4, 5];

   @action
   onChangeCount = () => {
      this.count += 1;
      this.isCountChanged = !this.isCountChanged;

      this.arr[0] = 5;

      // console.log("before settimeout");

      // const promise = new Promise((resolve) => {
      //    console.log("before resolve log");
      //    resolve("success");
      //    console.log("after resolve log");
      // });

      // console.log("after promise");

      // promise.then(() => {
      //    console.log("before in then");
      //    this.isCountChanged = !this.isCountChanged;
      //    console.log("after in then");
      // });
      // setTimeout(() => {
      //    console.log("in time out");
      //    this.count = 34;
      // }, 1000);

      console.log("after then ");
      this.update();
   };

   update = () => {
      console.log("in update");

      this.count += -11;
      console.log("update", this.count);

      this.isCountChanged = !this.isCountChanged;
      this.update2();
   };
   update2 = () => {
      console.log("in update2");

      this.count += 1;

      this.isCountChanged = !this.isCountChanged;
   };

   disposer = autorun(() => {
      console.log("autorun", this.count);
   });

   // disposer = autorun(() => {
   //    console.log(`auto run ==> count:${this.count}   ${this.isCountChanged}`);
   // });

   // @action
   // changeCount = (m) => {
   //    this.count = 2;
   // };
   // @action
   // updateChangedCount = () => {
   //    console.log("update counter  from then callback");
   //    this.isCountChanged = !this.isCountChanged;
   // };

   // setTimeout(() => {
   //    this.isCountChanged = !this.isCountChanged;
   //    this.count = this.count / 4;
   // }, 0);

   render() {
      console.log("render", this.arr[0]);
      return (
         <div className="m-32">
            <p>Count : {this.count}</p>
            <p>{this.isCountChanged ? "Count Changed" : "Count Changed"}</p>
            <button onClick={this.onChangeCount}>Change Count</button>
            {/* <Child  changeCount={this.changeCount} /> */}
         </div>
      );
   }
}

// @observer
// class Child extends Component {
//    @observable c = 1;

//    @action.bound
//    onChange() {
//       this.c = 2;
//    }
//    render() {
//       return (
//          <div>
//             {this.props.count}
//             {this.c}
//             <button onClick={this.onChange}>Change</button>
//          </div>
//       );
//    }
// }

export default Practice;

// class Practice {
//    @observable count = 44;
//    @observable isCountChanged = false;

//    @action.bound
//    onChangeCount = () => {
//       setTimeout(() => {
//          this.isCountChanged = !this.isCountChanged;
//          this.count = this.count / 4;
//       }, 0);
//    };
//    disposer = autorun(() => {
//       console.log(`auto run ==> count:${this.count}   ${this.isCountChanged}`);
//    });
// }

// export default Practice;

// let practice = new Practice();
// practice.onChangeCount();
