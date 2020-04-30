import React from "react";
import { RiLoader3Line } from "react-icons/ri";

import Loader from "../Icons/Loader";

import { LoadingViewContainer } from "./styledComponents";

class LoadingView extends React.Component {
    render() {
        return <RiLoader3Line className="text-green-700" />;
    }
}

export default LoadingView;
