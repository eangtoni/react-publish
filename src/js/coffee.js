import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

class Coffee extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      animating: false,
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
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

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
  render() {
    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          className="w-100"
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={item.src}
        >
          <img className="w-100" src={item.src} alt={item.altText} />
          <CarouselCaption
            className="carousel-caption sm-small"
            captionText={item.captionText}
            captionHeader={item.captionTitle}
          />
        </CarouselItem>
      );
    });
    return (
      <section className="container">
        <div className="row justify-content-center">
          <Carousel
            className="col-lg-8 col-md-6 col-sm-8"
            activeIndex={this.state.activeIndex}
            next={this.next}
            previous={this.prev}
          >
            <CarouselIndicators
              items={this.state.items}
              activeIndex={this.state.activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}

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
          <section className="text-container col-lg-4  col-md-6 col-sm-8 px-5 text-justify">
            <h5 className="layout-title">Latte Art</h5>
            <p className="layout-text">
              All you need to create Latte Art are coffee and milk. Firstly, the
              milk has to be frothed. The purpose of frothing the milk is to
              form micro-foam while heating the milk.
              <br />
            </p>
          </section>
        </div>
      </section>
    );
  }
}

export default Coffee;
