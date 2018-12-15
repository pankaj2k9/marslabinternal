import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

const TrayComponent = (props) => {
    
    const { title, icon, content, summary, createdBy, attachmentId, publishedDate, source, status, draftJSRawContent, authors, categories } = props.tray;
    return (
        <a className={'link video-tray-item ' + props.classname} href="/" >

            <div className="image-and-details">
                <div className="metadata"></div>
                <div className="shadow-box"></div>
                <div className="image">
                    <img
                        src={icon}
                        alt={title}
                        className="image-img"
                        data-src={icon}
                    />
                    <div className="queue-bar site-color" ></div>
                </div>
                <div className="play-button site-color">
                    <i className="fa fa-caret-right"></i>
                </div>



                <div className="details">
                    <div className="title">{title}</div>
                    <div className="info">{format(publishedDate, 'dddd Do MMMM')} | 114 mins</div>
                    <div className="rated">{status}</div>
                    <div className="category">{categories && categories.map((cat) => cat.title + ' ,')}</div>
                    <div className="description">
                        {summary}
                    </div>
                    <div className="crew">
                        <div>
                            <span className="role">Director : </span>
                            <span className="people">{createdBy}</span>
                        </div>
                        <div>
                            <span className="role">Starring: </span>
                            <span className="people">
                                {authors && authors.map((author) => author.role + ' ,')}

                            </span>
                        </div>
                    </div>
                </div>
            </div>



            <div className="title-container">
                <div className="title">{title}</div>
            </div>



        </a>
    )
}
export default TrayComponent;
