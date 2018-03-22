import React, { Component } from 'react';
import './view-floor-plan.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%'
  }
};

class ViewFloorPlans extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {

    return (
      <div className="floor-plans">
        <h1 className="floorplan-header">Available Floor Plans</h1>
        <div className="model">
          <h2 className="floor-title">2 Bedroom - 1 Bathroom</h2>
          <img className="floor-img" 
               src={require('../assets/second.svg')}
               onClick={this.openModal}
          />
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="ROOOMMMM"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}></h2>
            <button onClick={this.closeModal}>close</button>
            <div>2 Bedroom - 1 Bathroom</div>
            <img className="modal-img" 
               src={require('../assets/second.svg')} />
          </Modal>
        </div>
        <div className="model">
          <h2 className="floor-title">2 Bedroom - 2 Bathroom</h2>
          <img className="floor-img" src={require('../assets/third.svg')} />
        </div>
      </div>
    );
  }
}

export default ViewFloorPlans;
