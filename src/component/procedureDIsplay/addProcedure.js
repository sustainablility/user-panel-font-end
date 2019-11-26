import React from 'react';
import addUserProcedure from '../../comunicateToServer/addUserProcedure'

class AddProcedure extends React.Component{

    async afterClick(userToken) {
        let procedureNameInputValue = document.getElementById("user-panel-addprocedure-text").value;
        let addProcedureResult = await addUserProcedure(procedureNameInputValue, userToken);
        if (addProcedureResult) {
            window.location.reload();
        }
    }

    render() {
        return (
            <div>
                <input id={"user-panel-addprocedure-text"} type={"text"}/>
                <button onClick={() => this.afterClick(this.props["userToken"])}>Add new procedure</button>
            </div>
        );
    }
}

export default AddProcedure;