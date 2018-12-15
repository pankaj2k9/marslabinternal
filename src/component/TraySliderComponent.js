import React, { Component } from 'react';
import TrayComponent from './TrayComponent';
import Slider from "react-slick";


class TraySliderComponent extends Component {
    state = {
        lastItem: 0
    }
    componentDidMount() {
        if (window.matchMedia('screen and (max-width: 2800px) and (min-width: 1325px)').matches) {
            this.setState({
                lastItem: 6
            })
        } else if (window.matchMedia('screen and (max-width: 1324px) and (min-width: 768px)').matches) {
            this.setState({
                lastItem: 4
            })
        } else if (window.matchMedia('screen and (max-width: 768px) and (min-width: 480px)').matches) {
            this.setState({
                lastItem: 3
            })
        } else {
            this.setState({
                lastItem: 2
            })
        }




    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 1324,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };
        console.log(this.props.knowledgeBaseArticles);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 slider-title">
                        <div className="BlockTitle site-color">{this.props.knowledgeBaseArticles &&
                            this.props.knowledgeBaseArticles.map((singleTray, cur) => {
                                if (cur === 0) {
                                    return (
                                        <div key={singleTray._id}>
                                            {singleTray.tags.map((tag, i) => {
                                                if (i === singleTray.tags.length - 1) {
                                                    return (
                                                        tag.name + ''
                                                    )

                                                } else {
                                                    return (
                                                        tag.name + '-'
                                                    )
                                                }

                                            })}
                                        </div>
                                    )
                                } else {
                                    return null;
                                }

                            }
                            )}</div>
                    </div>
                </div>


                <Slider className="multi-slider" {...settings}>

                    {this.props.knowledgeBaseArticles &&
                        this.props.knowledgeBaseArticles.map((singleTray, cur) => (
                            <div key={singleTray._id}>
                                <TrayComponent tray={singleTray}
                                    classname={cur % this.state.lastItem === 0 ? "last-item" : 'item'} />
                            </div>

                        ))}



                </Slider>
            </div>





        );
    }

}

export default TraySliderComponent;
