import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { handleActionForDisplayContent, makeRequestByImdbId, closeOriginalImage } from "../actions/actions";

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 300,
    minHeight: 'auto',
    margin: '0 auto',
    padding: 30
};

Modal.setAppElement(document.getElementById("root"));

class DisplayContent extends React.Component {

    render() {
        const listOfItems = this.props.episodes.map((item, index) => (
            <li key={index}>
                <div>
                    <div>
                        <p>{item.title}</p>
                        {item.image && item.image.medium ?
                            <img src={item.image.medium} onClick={this.props.makeRequestByImdbId.bind(this, item.imdbId)}/> :
                            <p>No image</p>
                        }
                        <p>{item.premiered}</p>
                        <p>Season: {item.season}</p>
                        <p>Episode: {item.episode}</p>
                    </div>
                </div>
            </li>
        ));
        return(
            <div>
                <div>
                    { this.props.selectedDay &&
                    <button onClick={this.props.handleActionForDisplayContent.bind(this)}>Back to calendar</button>
                    }
                    <ul>{listOfItems}</ul>
                </div>
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
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
        selectedDay: state.selectedDay,
        originalImage: state.originalImage,
        modalIsOpen: state.modalIsOpen
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleActionForDisplayContent: () => {
            dispatch(handleActionForDisplayContent());
        },
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