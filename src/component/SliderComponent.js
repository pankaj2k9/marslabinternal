import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Button } from 'reactstrap';


import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Container
} from 'reactstrap';

const items = [
    {
        src: './assets/slide1.png',
        altText: 'Slide 1',
        caption: 'Slide 1',
        url: 'https://www.marlabs.com/wp-content/uploads/files/Marlabs%20Corporate%20Video.mp4'
    },
    {
        src: './assets/slide1.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        url: 'https://www.marlabs.com/wp-content/uploads/files/Marlabs%20Digital%20360.mp4'
    },
    {
        src: './assets/slide2.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3',
        url: 'https://www.marlabs.com/wp-content/uploads/files/Siby%20announced%20as%20finalist%20at%20the%20Eu0026Y%20Entrepreneur%20Of%20the%20Year%20Awards,%20NJ%202018.mp4'
    }
];

class SliderComponent extends Component {

    state = {
        activeIndex: 0,
        showVideo: false,
        videoIndex: 0

    }

    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    showVedioHandler = (e, index) => {
        e.preventDefault();
        this.setState({
            showVideo: true,
            videoIndex: index
        })

    }
    videoCloseHandler = () => {
        this.setState({
            showVideo: false
        })
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item, index) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.caption}

                >
                    <div>
                        <img src={item.src} alt={item.altText} />
                        <div className="foot">
                            <div className="info">
                                <span className="title">Dhanbad Blues - Trailer</span>
                                <span className="more">3198  |  3199 | 3200 | Crime</span>
                            </div>
                            <div className="cta" onClick={(e) => this.showVedioHandler(e, index)} >Watch Now</div>
                        </div>
                    </div>

                </CarouselItem>


            );
        });

        return (
            <Container fluid={true}>
                {this.state.showVideo &&
                    (<div>
                        <ReactPlayer width="100%" controls url={items[this.state.videoIndex].url} playing />
                        <div className="close-wrapper">
                            <Button color="danger" className="close-video" onClick={this.videoCloseHandler}> Close</Button>
                        </div>
                    </div>
                    )}

                {!this.state.showVideo && <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    className="customSlide"

                >


                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />

                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />



                </Carousel>}
            </Container>
        );
    }
}

export default SliderComponent;
