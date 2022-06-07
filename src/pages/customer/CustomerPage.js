
// function CustomerPage (props) {
//     return (
//         <h1>Customer {props.name}</h1>
//     )
// }

// export default CustomerPage
import React from "react";

class Customer extends React.Component {

    go(){
        console.log(this);
    }


    render() {
        return (
            <div>

            <h1>Customer {this.props.name}</h1>
            <button onClick={() => {this.go()}}>cl</button>
            </div>
        )
    }
}

export default Customer