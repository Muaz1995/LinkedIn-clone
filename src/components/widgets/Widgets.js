import React from 'react'
import './widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className = 'widgets__Article'>
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4> {heading} </h4>
                <p> {subtitle }</p>
            </div>
        </div> 
    )

    return (
        <div className = 'widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Papa React is back", "Top news - 9099 readers")}
            {newsArticle("Papa React is back", "Top news - 9099 readers")}
            {newsArticle("Papa React is back", "Top news - 9099 readers")}
            {newsArticle("Papa React is back", "Top news - 9099 readers")}
            {newsArticle("Coronavirus:UK updates ", "Top news - 886 readers")}
        </div>
    )
}

export default Widgets
