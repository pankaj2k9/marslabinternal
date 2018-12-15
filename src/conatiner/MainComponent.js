import React, { Component } from 'react';
import SliderComponent from '../component/SliderComponent';
import TraySliderComponent from '../component/TraySliderComponent';
import { Query } from "react-apollo";
import { GET_ALL_TRAY } from '../queries';


class MainComponent extends Component {
    state = {
        page: 1,
        perPage: 20,
        tagSales: ["Salesforce"],
        tagSPA: ["SPA"],
        sortBy: ""
    }

    traySliderHandler = (tags) => {
        const { page, perPage, categoryIds, sortBy } = this.state;
        return (
            <Query
                query={GET_ALL_TRAY}
                variables={{ page, perPage, categoryIds, tags, sortBy }}>
                {({ loading, error, data, startPolling, stopPolling }) => {

                    if (error) return `Error!: ${error.toString()}`;

                    if (data) {
                        return (
                            <TraySliderComponent knowledgeBaseArticles={data.knowledgeBaseArticles} />
                        );
                    }


                }}
            </Query>
        )
    }


    render() {

        return (
            <div>
                <SliderComponent />
                {this.traySliderHandler(this.state.tagSales)}
                {this.traySliderHandler(this.state.tagSales)}
            </div>
        )
    }
}

export default MainComponent;