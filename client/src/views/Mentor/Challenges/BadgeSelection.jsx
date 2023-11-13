//Import stuff
import React, { useEffect, useRef, useState, useReducer } from 'react';
import Badge1 from "../../../Images/Badge1.jpg";
import Badge2 from "../../../Images/Badge2.jpg";

//Function component to select/view badges
function BadgeSelection ({onBadgeSelect})
{
    //State variable to keep track of current badge using ID
    const [currentBadgeID, setBadgeID] = useState(0);
    //Array of badge images - will add more later as I draw them
    const badgeImages = [Badge1, Badge2];

    //Style for the badge carousel
    const sliderStyles = {
        height: "300px",
        position: "relative",
    }

    //Style to display each badge
    const badgeStyles = {
        width: "300px",
        height: "300px",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        //Set badge image based on the current badge ID
        backgroundImage: `url(${badgeImages[currentBadgeID]})`,
        zIndex: 10,

    }

    //Left arrow style to navigate from each badge
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        left: "16px",
        fontSize: '45px',
        color: "black",
        zIndex: 1000,
        cursor: "pointer",

    }

    //Right arrow style to navigate from each badge
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        right: "32px",
        fontSize: '45px',
        color: 'black',
        zIndex: 1000,
        cursor: "pointer",

    }

    //Function to navigate to previous badge
    const goToPrevious = () => {
        const isFirstBadge = currentBadgeID === 0;
        const newIndex = isFirstBadge ? badgeImages.length - 1 : currentBadgeID - 1;
        setBadgeID(newIndex);
    }

    //Function to navigate to next badge
    const goToNext = () => {
        const isLastBadge = currentBadgeID === badgeImages.length - 1;
        const newIndex = isLastBadge ? 0 : currentBadgeID + 1;
        setBadgeID(newIndex);
    }

    //Function to select current badge, and pass to parent component, to use
    const selectBadge = () => {
        //Console log to show button is working
        console.log("Button pressed");
        onBadgeSelect(currentBadgeID);
    }

    //Make button appear over other things
    const buttonStyle = {
        zIndex: 2000,


    }
    //Fixing sonarcloud bug
    const keyboardListener = (event) => {
        //Left and right arrows
        if (event.key === 'leftArrow')
        {
            goToPrevious();
        }
        else if (event.key === 'rightArrow')
        {
            goToNext();
        }
    }

    //Render the badge selection on page
    //*Needed to change the way of displaying arrows, use unicode
    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious} onKeyDown={keyboardListener}>&#9664;</div>
            <div>
                <div style={badgeStyles}></div>
            </div>
            <div style={rightArrowStyles} onClick={goToNext} onKeyDown={keyboardListener}>&#9654;</div>
            <div>
                <button onClick={selectBadge}>Select the badge</button>
            </div>
        </div>


    )

}

export default BadgeSelection;

