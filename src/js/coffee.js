import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  Button,
  Modal,
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

class Coffee extends Component {
  //create constructor
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      animating: false,
      //image list
      items: [
        {
          src: require("../img/rosetta1.png"),
          altText: "rosetta1",
          captionTitle: "Rosetta",
          captionText: "Rosetta 1",
        },
        {
          src: require("../img/rosetta2.png"),
          altText: "rosetta2",
          captionTitle: "Rosetta",
          captionText: "Rosetta 2",
        },
        {
          src: require("../img/tulip1.png"),
          altText: "Tulip1",
          captionTitle: "Tulip",
          captionText: "Tulip 1",
        },
        {
          src: require("../img/tulip2.png"),
          altText: "Tulip2",
          captionTitle: "Tulip",
          captionText: "Tulip 2",
        },
      ],
      //modal states
      modalIsOpen: false,
      modalSource: "",
      modalAltText: "",
    };

    //function bind
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  ////////////////////////
  // Functions////////////
  ////////////////////////

  next = () => {
    if (this.state.animating) return;
    this.setState({
      activeIndex:
        this.state.activeIndex === this.state.items.length - 1
          ? 0
          : this.state.activeIndex + 1,
    });
  };

  prev = () => {
    if (this.state.animating) return;
    this.setState({
      activeIndex:
        this.state.activeIndex === 0
          ? this.state.items.length - 1
          : this.state.activeIndex - 1,
    });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({
      activeIndex: newIndex,
    });
  };

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  };

  openModal = (e) => {
    const target = e.target;
    this.setState({
      modalIsOpen: true,
      modalSource: target.src,
      modalAltText: target.alt,
    });
    console.log(this.state.modalIsOpen);
  };

  ////////////////////////
  // END of funtions//////
  ////////////////////////

  render() {
    ////////////////////////
    // Slide show //////////
    ////////////////////////

    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          className="w-100 btn"
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={item.src}
        >
          {/* Image Show */}
          <img
            className="w-100"
            src={item.src}
            alt={item.altText}
            onClick={this.openModal}
          />
          {/* Image Caption */}
          <CarouselCaption
            className="carousel-caption"
            captionText={item.captionText}
            captionHeader={item.captionTitle}
          />
        </CarouselItem>
      );
    });
    ////////////////////////
    // END of Slide show ///
    ////////////////////////

    return (
      <article id="coffee-page" className="coffee-page">
        <section className="carousel-container container py-5">
          {/* Carousel Title */}
          <h1 className="carousel-title text-center py-2 text-secondary display-2">
            My Latte Art Gallery
          </h1>

          {/* Carousel Container */}
          <div className="row justify-content-center">
            <Carousel
              className="col-lg-6 col-md-6 col-sm-8 "
              activeIndex={this.state.activeIndex}
              next={this.next}
              previous={this.prev}
            >
              {/* Image Indicators */}
              <CarouselIndicators
                className="carousel-indicator"
                items={this.state.items}
                activeIndex={this.state.activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}

              {/* Prev and Next Button */}
              <CarouselControl
                className="carousel-control"
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
              <CarouselControl
                className="carousel-control"
                direction="prev"
                directionText="Previous"
                onClickHandler={this.prev}
              />
            </Carousel>

            {/* Quote Text */}
            <section className="text-container col-lg-4 col-md-6 col-sm-8 px-5 py-2 text-justify">
              <h5 className="layout-title text-secondary font-weight-bold display-4">
                Latte Art
              </h5>
              <p className="layout-quote">
                <FaQuoteLeft className="quote-left" />
                We eat with our eyes first
                <FaQuoteRight className="quote-right" />
              </p>
            </section>
          </div>
        </section>
        {/* Page Text Content */}
        <section className="coffee-content py-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 ">
                <h4 className="layout-title text-justify">
                  What's better than a great Latte Art on your daily cup of
                  Latte or Cappuccino?
                </h4>
                <p className="layout-text text-justify">
                  There are various pattern that you could put on top of your
                  coffee. The only limit is your imagination. I have been
                  practicing Latte Art for one and a half year. It was not easy
                  but it was so fun brewing your own coffee and drawing a love,
                  flower or even swan on it.
                  <br />
                  Sometimes, I would fail and some weird shapes would appear.
                  But that does not stop me to keep on practicing and crafting
                  my own cup of Cappuccino.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Section */}
        <Modal
          id="open-modal"
          isOpen={this.state.modalIsOpen}
          toggle={this.toggleModal}
        >
          {/* Modal Image Body */}
          <img
            className="layout-modal w-100"
            src={this.state.modalSource}
            alt={this.state.modalAltText}
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
      </article>
    );
  }
}

export function CoffeeStyle() {
  let { styleName } = useParams(); //store url parameter to styleName
  return <h3 className="mt-5 py-5">{styleName}</h3>;
}

export default Coffee;
