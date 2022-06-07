
// function ProductPage () {
    //     return (
        //         <h1>Products Home</h1>
        //     )
        // }
import React from "react";
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {

      console.log(props);
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
            {...props}
            router={{ location, navigate, params }}
          />
      );
    }
  
    return ComponentWithRouterProp;
  }

class ProductPage extends React.Component {

    goCustomer() {
        this.router.navigate('/cus')
    }

   render() {
       return (
           <div>
               <h1>Products Home</h1>
               <button onClick={() => {this.goCustomer()}}>Go Customer</button>
           </div>
       )
   }
}

export default withRouter(ProductPage);