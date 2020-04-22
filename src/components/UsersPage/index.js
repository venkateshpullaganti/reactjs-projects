import React from "react";
import { observer, inject } from "mobx-react";

import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import NoDataView from "../common/NoDataView";

@inject("userStore")
@observer
class UsersPage extends React.Component {
    componentDidMount() {
        this.doNetworkCalls();
    }
    getUserStore() {
        return this.props.userStore;
    }
    doNetworkCalls = () => {
        this.getUserStore().getUsersAPI();
    };
    renderSuccessUi = () => {
        const { users } = this.getUserStore();

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
        const { getUsersAPIStatus, getUsersAPIError } = this.getUserStore();
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
