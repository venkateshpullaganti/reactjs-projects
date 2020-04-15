import { observable } from "mobx";

type cellObj = {
    id: string,
    isHidden: boolean
}
class CellModel {
    id: string;
    @observable isHidden: boolean;
    constructor(props: cellObj) {
        this.id = props.id;
        this.isHidden = props.isHidden;
    }

    // @action
    // onClick = () => {
    //     this.isHidden = true;
    // }
}
export default CellModel;
