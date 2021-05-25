import React from "react";
import { connect } from "react-redux";

class StarWars extends React.Component {
  render() {
console.log(this.props)

    return (
      <div>
        <button>Get Star Wars Characters</button>
      </div>
    );
  }
}

// We do this to get data from REDUX State into  our componet as props
// propName ---> prop Value from the Redux State
const mapStateToProps = (state) => {
  return { listCharacter: state.UserInfo.listCharacter };
  
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWars);
