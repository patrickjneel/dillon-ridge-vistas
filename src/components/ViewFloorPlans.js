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

const responsiveStyles = {
  content : {
    border: '4px solid #00abf0',
    height: '40%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '88%'
  }
}

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
   return window.innerWidth < 700 ? this.setState({showModal1: false}) : this.setState({showModal1: true});
  }

  openModal2() {
    return window.innerWidth < 700 ? this.setState({showModal2: false}) : this.setState({showModal2: true});
  }

  closeModal1() {
    this.setState({showModal1: false})
  }

  closeModal2() {
    this.setState({showModal2: false})
  }

  render () {

    if(window.innerWidth <= 768) {
      return (
      <div className="floor-plans">
        <h1 className="floorplan-header">Available Floor Plans</h1>
          <h2 className="floor-title">2 Bedroom - 1 Bathroom</h2>
        <div className="model">
          <div className="left-model">
            <table>
              <div className="line-break"></div>
              <tr>
                <td>Bed</td>
                <td>2</td>
              </tr>
              <div className="line-break"></div>
              <tr>  
                <td>Bath</td>
                <td>1</td>
              </tr>
              <div className="line-break"></div>
              <tr>  
                <td>SQ.FT.</td>
                <td>985</td>
              </tr>
              <div className="line-break"></div>
              <tr>  
                <td>Rent</td>
                <td>$ 1,200</td>
              </tr>
              <div className="line-break"></div>
            </table>
          </div>
          <div className="right-model">
            <img className="floor-img" 
                 src={require('../assets/second.svg')}
                 onClick={this.openModal1}
            />
            <h4 className="img-desc">Click Image To Enlarge</h4>
          </div>
        </div>
          <ReactModal
            isOpen={this.state.showModal1}
            onRequestClose={this.closeModal1}
            style={responsiveStyles}
          >
            
            <span class="close" onClick={this.closeModal1}>&times;</span>
            <div className="modal-title1">2 Bedroom - 1 Bathroom</div>
            <img className="modal-img" 
                 src={require('../assets/second.svg')} 
            />
          </ReactModal>

        <h2 className="floor-title">2 Bedroom - 2 Bathroom</h2>
        <div className="model">
          <div className="left-model">
            <table>
              <div className="line-break"></div>
              <tr>
                <td>Bed</td>
                <td>2</td>
              </tr>
              <div className="line-break"></div>
              <tr>  
                <td>Bath</td>
                <td>2</td>
              </tr>
              <div className="line-break"></div>
              <tr>  
                <td>SQ.FT.</td>
                <td>985</td>
              </tr>
              <div className="line-break"></div>
              <tr>  
                <td>Rent</td>
                <td>$ 1,200</td>
              </tr>
              <div className="line-break"></div>
            </table>
          </div>
          <div className="right-model">
          <img className="floor-img" 
               src={require('../assets/third.svg')}
               onClick={this.openModal2} 
          />
          <h4 className="img-desc">Click Image To Enlarge</h4>
         </div>
        </div>
          <ReactModal
            isOpen={this.state.showModal2}
            onRequestClose={this.closeModal2}
            style={responsiveStyles}
          >
            <span className="close" onClick={this.closeModal2}>&times;</span>
            <div className="modal-title2">2 Bedroom - 2 Bathroom</div>
            <img className="modal-img" 
               src={require('../assets/third.svg')} />
          </ReactModal>
      </div>
    )
    } else {
      return (
        <div className="floor-plans">
          <h1 className="floorplan-header">Available Floor Plans</h1>
            <h2 className="floor-title">2 Bedroom - 1 Bathroom</h2>
          <div className="model">
            <div className="left-model">
              <table>
                <div className="line-break"></div>
                <tr>
                  <td>Bed</td>
                  <td>2</td>
                </tr>
                <div className="line-break"></div>
                <tr>  
                  <td>Bath</td>
                  <td>1</td>
                </tr>
                <div className="line-break"></div>
                <tr>  
                  <td>SQ.FT.</td>
                  <td>985</td>
                </tr>
                <div className="line-break"></div>
                <tr>  
                  <td>Rent</td>
                  <td>$ 1,200</td>
                </tr>
                <div className="line-break"></div>
              </table>
            </div>
            <div className="right-model">
              <img className="floor-img" 
                   src={require('../assets/second.svg')}
                   onClick={this.openModal1}
              />
              <h4 className="img-desc">Click Image To Enlarge</h4>
            </div>
          </div>
            <ReactModal
              isOpen={this.state.showModal1}
              onRequestClose={this.closeModal1}
              style={customStyles}
            >
              
              <span class="close" onClick={this.closeModal1}>&times;</span>
              <div className="modal-title1">2 Bedroom - 1 Bathroom</div>
              <img className="modal-img" 
                   src={require('../assets/second.svg')} 
              />
            </ReactModal>

          <h2 className="floor-title">2 Bedroom - 2 Bathroom</h2>
          <div className="model">
            <div className="left-model">
              <table>
                <div className="line-break"></div>
                <tr>
                  <td>Bed</td>
                  <td>2</td>
                </tr>
                <div className="line-break"></div>
                <tr>  
                  <td>Bath</td>
                  <td>2</td>
                </tr>
                <div className="line-break"></div>
                <tr>  
                  <td>SQ.FT.</td>
                  <td>985</td>
                </tr>
                <div className="line-break"></div>
                <tr>  
                  <td>Rent</td>
                  <td>$ 1,200</td>
                </tr>
                <div className="line-break"></div>
              </table>
            </div>
            <div className="right-model">
            <img className="floor-img" 
                 src={require('../assets/third.svg')}
                 onClick={this.openModal2} 
            />
            <h4 className="img-desc">Click Image To Enlarge</h4>
           </div>
          </div>
            <ReactModal
              isOpen={this.state.showModal2}
              onRequestClose={this.closeModal2}
              style={customStyles}
            >
              <span className="close" onClick={this.closeModal2}>&times;</span>
              <div className="modal-title2">2 Bedroom - 2 Bathroom</div>
              <img className="modal-img" 
                 src={require('../assets/third.svg')} />
            </ReactModal>
        </div>
      )
    }
  }
}

export default ViewFloorPlans;
