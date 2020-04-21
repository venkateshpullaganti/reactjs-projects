import React from "react";
import { observer } from "mobx-react";

import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import userStore from "../../stores/UsersStore";
import NoDataView from "../common/NoDataView";

@observer
class UsersPage extends React.Component {
    componentDidMount() {
        this.doNetworkCalls();
    }

    doNetworkCalls = () => {
        userStore.getUsersAPI();
    };
    renderSuccessUi = () => {
        const { users } = userStore;

        if (users.length === 0) return <NoDataView />;
        else
            return users.map((user) => (
                <div
                    className="h-20 p-10 m-3 flex flex-col"
                    key={Math.random()}
                >
                    <p>User: {user.name} </p>
                    <p>email: {user.email}</p>
                    <p>UserName : {user.username}</p>
                </div>
            ));
    };
    render() {
        const { getUsersAPIStatus, getUsersAPIError } = userStore;
        return (
            <LoadingWrapperWithFailure
                apiStatus={getUsersAPIStatus}
                apiError={getUsersAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderSuccessUi}
            />
        );
    }
}

export default UsersPage;
