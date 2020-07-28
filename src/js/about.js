import React, { Component } from "react";
import { Button, Modal } from "reactstrap";

class About extends Component {
  //constructor
  constructor() {
    super();
    this.state = {
      isOpen: false, //Modal on/off toggle
      source: "", //Modal img source
      altText: "", //Modal img alt
      imageItem: {
        source: "",
        altText: "main",
      },
    };

    //bind function
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  ///////////////////////
  // Modal Functions/////
  ///////////////////////

  //Trigger Modal
  openModal = (e) => {
    const target = e.target;
    this.setState({
      isOpen: true,
      source: target.src,
      altText: target.alt,
    });
  };

  //Toggle Modal on/off
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  ///////////////////////////
  // EN of Modal Functions//
  ///////////////////////////
  render() {
    return (
      <section id="about-page" className="about-page">
        {/* About Image */}
        <div className="layout-about container py-5 mt-2">
          <div className="row justify-content-center">
            <section className="col-10 text-center">
              <img
                className="layout-image py-5 col-8 w-50"
                src={this.state.imageItem.source}
                alt={this.state.imageItem.altText}
                onClick={this.openModal}
                style={{ cursor: "pointer" }}
              ></img>
            </section>
          </div>
        </div>
        {/* END of About Image */}

        {/* Modal Section */}
        <Modal
          id="open-modal"
          isOpen={this.state.isOpen}
          toggle={this.toggleModal}
        >
          {/* Modal Body */}
          <img
            className="layout-modal w-100"
            src={this.state.source}
            alt={this.state.alt}
          />
          {/* Modal Close Button */}
          <Button
            className="bg-danger"
            type="button"
            onClick={this.toggleModal}
          >
            Close
          </Button>
        </Modal>
        {/* END of Modal Section */}
      </section>
    );
  }
}

export default About;
