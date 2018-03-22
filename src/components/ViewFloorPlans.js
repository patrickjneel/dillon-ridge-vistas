import React, { Component } from 'react';
import './view-floor-plan.css';
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    border: '4px solid #00abf0',
    height: '75%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%'
  }
};

class ViewFloorPlans extends Component {
  constructor() {
    super();
    this.state = {
      showModal1: false,
      showModal2: false
    };
    this.openModal1 = this.openModal1.bind(this)
    this.openModal2 = this.openModal2.bind(this)
    this.closeModal1 = this.closeModal1.bind(this)
    this.closeModal2 = this.closeModal2.bind(this)
  }

  openModal1() {
    this.setState({showModal1: true});
  }

  openModal2() {
    this.setState({showModal2: true});
  }

  closeModal1() {
    this.setState({showModal1: false})
  }

  closeModal2() {
    this.setState({showModal2: false})
  }

  render () {

    return (
      <div className="floor-plans">
        <h1 className="floorplan-header">Available Floor Plans</h1>
        <div className="model">
          <h2 className="floor-title">2 Bedroom - 1 Bathroom</h2>
          <img className="floor-img" 
               src={require('../assets/second.svg')}
               onClick={this.openModal1}
          />
        </div>
          <ReactModal
            isOpen={this.state.showModal1}
            onRequestClose={this.closeModal1}
            style={customStyles}
          >
            <button onClick={this.closeModal1}>Close</button>
            <div className="modal-title1">2 Bedroom - 1 Bathroom</div>
            <img className="modal-img" 
                 src={require('../assets/second.svg')} 
            />
          </ReactModal>

        <div className="model">
          <h2 className="floor-title">2 Bedroom - 2 Bathroom</h2>
          <img className="floor-img" 
               src={require('../assets/third.svg')}
               onClick={this.openModal2} 
          />
        </div>
          <ReactModal
            isOpen={this.state.showModal2}
            onRequestClose={this.closeModal2}
            style={customStyles}
          >
            <button onClick={this.closeModal2}>Close</button>
            <div className="modal-title2">2 Bedroom - 2 Bathroom</div>
            <img className="modal-img" 
               src={require('../assets/third.svg')} />
          </ReactModal>
      </div>
    );
  }
}

export default ViewFloorPlans;
