import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    const newArticle = (heading, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets_articleleft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets_articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    };

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
            {newArticle("LinkedIn is back", "Top news - 9090 readers")}
        </div>
    );
};

export default Widgets;
