import React from "react";
import { connect } from "react-redux";

class OriginalImageContainer extends React.Component {
    render() {
        return(
            <img src={this.props.originalImage}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        originalImage: state.originalImage
    }
};

export default connect(mapStateToProps, null)(OriginalImageContainer)