import React, { Component } from 'react';
import SliderComponent from '../component/SliderComponent';
import TraySliderComponent from '../component/TraySliderComponent';
import { Query } from "react-apollo";
import { GET_ALL_TRAY } from '../queries';


class MainComponent extends Component {
    state = {
        page: 1,
        perPage: 1,
        tags: ["Salesforce", "SAP"],
        sortBy: ""
    }


    render() {
        const { page, perPage, categoryIds, tags, sortBy } = this.state;
        return (
            <div>
                <SliderComponent />


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
            </div>
        )
    }
}

export default MainComponent;