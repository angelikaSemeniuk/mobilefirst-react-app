import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { makeRequestByImdbId, closeOriginalImage } from "../actions/actions";

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minHeight: "300px",
        fontSize: "30px",
    }
};

Modal.setAppElement(document.getElementById("root"));

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class DisplayContent extends React.Component {

    render() {
        const regex = /^(.*?)-/;
        const listOfItems = this.props.episodes.map((item, index) => (
            <li key={index} className="listItem">
                <div className="leftColumn">
                    {item.image && item.image.medium ?
                        <img src={item.image.medium} onClick={this.props.makeRequestByImdbId.bind(this, item.imdbId)}/> :
                        <p>No image</p>
                    }
                </div>
                <div className="rightColumn">
                    <div className="rightColumnRow">
                        <p>{item.title}</p>
                        <p>{item.premiered.match(regex)[1]}</p>
                    </div>
                    <div className="rbottomRow">
                        <p>Season: {item.season}</p>
                        <p>Episode: {item.episode}</p>
                    </div>
                </div>
            </li>
        ));
        return(
            <>
                <p className="currentDate">{this.props.currentDate.getDate()} {months[this.props.currentDate.getMonth()]} {this.props.currentDate.getFullYear()}</p>
                <ul className="list">{listOfItems}</ul>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.closeOriginalImage}
                    style={modalStyle}
                >
                    {this.props.originalImage ?
                        <img src={this.props.originalImage}/> :
                        <p>No image</p>
                    }
                    <button onClick={this.props.closeOriginalImage.bind(this)}>X</button>
                </Modal>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
        selectedDay: state.selectedDay,
        originalImage: state.originalImage,
        modalIsOpen: state.modalIsOpen,
        currentDate: state.currentDate,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        makeRequestByImdbId: (id, event) => {
            event.preventDefault();
            dispatch(makeRequestByImdbId(id))
        },
        closeOriginalImage: () => {
            dispatch(closeOriginalImage());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContent);