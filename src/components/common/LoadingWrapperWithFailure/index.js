import React from "react";
import { observer } from "mobx-react";

import { API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";

import { getUserDisplayableErrorMessage } from "../../../utils/APIUtils";

import LoadingView from "./LoadingView";
import FailureView from "./FailureView";

@observer
class LoadingWrapperWithFailure extends React.Component {
    render() {
        console.log("wrapper");

        const {
            apiStatus,
            renderSuccessUI: RenderSuccessUI,
            setErrorMsg,
            apiError,
        } = this.props;
        const errorMessage = getUserDisplayableErrorMessage(apiError);

        switch (apiStatus) {
            case API_FETCHING:
                return <LoadingView />;
            case API_SUCCESS:
                return <RenderSuccessUI />;
            case API_FAILED:
                setErrorMsg(errorMessage);
                return null;
            default:
                return null;
        }
    }
}

export default LoadingWrapperWithFailure;
