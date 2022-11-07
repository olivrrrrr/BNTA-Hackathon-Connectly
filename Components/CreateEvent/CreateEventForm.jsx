import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

function CreateEventForm({ onCreateEventFormSubmit }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [tags, setTags] = useState([])
    const [imageURL, setImageURL] = useState("")
    const [wheelchairAccessible, setWheelchairAccessible] = useState(false)
    const [cost, setCost] = useState(0)
    const [isDrinking, setIsDrinking] = useState(false)

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value)
    }
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value)
    }
    const handleTagsChange = (event) => {
        let tagArray = event.target.value.toLowerCase().split(" ");
        setTags([...tagArray])
    }
    const handleImageUrlChange = (event) => {
        setImageURL(event.target.value)
    }
    const handleWheelChairAccessibleChange = (event) => {
        setWheelchairAccessible(event.target.value)
    }
    const handleCostChange = (event) => {
        setCost(event.target.value)
    }
    const handleIsDrinkingChange = (event) => {
        setIsDrinking(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        onCreateEventFormSubmit(title, description, startDate, endDate, tags, imageURL, wheelchairAccessible, cost, isDrinking);

        setTitle("")
        setDescription("")
        setStartDate("")
        setEndDate("")
        setTags([])
        setImageURL("")
        setWheelchairAccessible(false)
        setCost(0)
        setIsDrinking(false)
    }

    return (
        <div>
            <form>
            <fieldset>
                <label>
                    <p>Title</p>
                    <input title="title" onChange={handleTitleChange}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Description</p>
                    <input description="description" onChange={handleDescriptionChange}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Start Date</p>
                    <input startDate="startDate" onChange= {handleStartDateChange}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>End Date</p>
                    <input endDate="endDate" onChange={handleEndDateChange}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Add event tags: please leave a space between tags!</p>
                    <input tags="tags" onChange={handleTagsChange}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Image Url</p>
                    <input imageURL="imageURL" onChange={handleImageUrlChange}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Please check this box if your event is wheelchairAccessible?</p>
                    <input type="radio" wheelchairAccessible="no" value={true} onChange={handleWheelChairAccessibleChange}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Please check this box if your event is drinking focussed?</p>
                    <input type="radio" isDrinking="no" value={true} onChange={handleIsDrinkingChange}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>cost £:</p>
                    <input cost="cost" onChange={handleCostChange}/>
                </label>
            </fieldset>
            <button type="submit" onClick={handleFormSubmission}>Submit</button>
        </form>
        </div>
    )
}