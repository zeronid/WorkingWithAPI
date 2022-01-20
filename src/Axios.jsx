import React, { useState, useEffect, useRef } from 'react'
import { getAvatar } from './AvatarApi'
import { cardStyle, containerStyle } from './Styles'
import { getData, postData, updateRequest} from './PlaceholderAPI'
import { BigHead } from '@bigheads/core'


function Axios() {
    //local
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(-1);
    const [iconFeatures,setIconFeatures] = useState()
    const editFieldRef = useRef()
    const editTitleRef = useRef()
    const editBodyRef = useRef()

    let input = ['title', 'body']
    let inputRefs = [ editTitleRef, editBodyRef ]

    useEffect(() => {
        getAvatar(setIconFeatures)
        getData(setData)
    }, [])

    const changeData = (e, res) => {
        let gg = [...data]
        gg[e.id - 1].body = res.data.body
        setData(gg)
    }

    const editClicked = (e) => {
        setEdit(e.id)
    }

    const handlePutRequest = (e) => {
        updateRequest(e, changeData, editFieldRef.current.value, setEdit)
    }

    const handlePostData = () => {
        let dataCopy = data;
        for(let i=0; i < data.length; i++){
            dataCopy[i].id++
        }
        setData(dataCopy)
        postData({ title: editTitleRef.current.value, body: editBodyRef.current.value, userId: 1 }, setData)
    }

    return (
        <div className="App" style={containerStyle}>
            {input.map( (a, i) =>
                <>
                    <label>{a}</label>
                    <input ref={inputRefs[i]} ></input>
                </>
            )}
            <button onClick={() => handlePostData()} style={{margin:20}}>POST!</button>
            {iconFeatures && data.map(e =>
                <div style={cardStyle}>
                    <h6>{e.title}</h6>
                    {edit === e.id? <textarea ref={editFieldRef} defaultValue={e.body} rows="4" cols="30"></textarea> : <p>{e.body}</p> }
                    <BigHead
                        accessory = {iconFeatures.accessory[( e.userId -1 ) % iconFeatures.accessory.length]}
                        body = {iconFeatures.body[( e.userId -1 ) % iconFeatures.body.length]}
                        circleColor="blue"
                        clothing={iconFeatures.clothing[( e.userId -1 ) % iconFeatures.clothing.length]}
                        clothingColor={iconFeatures.clothingColor[( e.userId -1 ) % iconFeatures.clothingColor.length]}
                        eyebrows={iconFeatures.eyebrows[( e.userId -1 ) % iconFeatures.eyebrows.length]}
                        eyes={iconFeatures.eyes[( e.userId -1 ) % iconFeatures.eyes.length]}
                        facialHair={iconFeatures.facialHair[( e.userId -1 ) % iconFeatures.facialHair.length]}
                        graphic={iconFeatures.graphic[( e.userId -1 ) % iconFeatures.graphic.length]}
                        hair={iconFeatures.hair[( e.userId -1 ) % iconFeatures.hair.length]}
                        hairColor={iconFeatures.hairColor[( e.userId -1 ) % iconFeatures.hairColor.length]}
                        hat={iconFeatures.hat[( e.userId -1 ) % iconFeatures.hat.length]}
                        hatColor={iconFeatures.hatColor[( e.userId -1 ) % iconFeatures.hatColor.length]}
                        lashes={iconFeatures.lashes[( e.userId -1 ) % iconFeatures.lashes.length]}
                        lipColor={iconFeatures.lipColor[( e.userId -1 ) % iconFeatures.lipColor.length]}
                        mask={iconFeatures.mask[( e.userId -1 ) % iconFeatures.mask.length]}
                        faceMask={iconFeatures.faceMask[( e.userId -1 ) % iconFeatures.faceMask.length]}
                        mouth={iconFeatures.mouth[( e.userId -1 ) % iconFeatures.mouth.length]}
                        skinTone={iconFeatures.skinTone[( e.userId -1 ) % iconFeatures.skinTone.length]}
                    />
                    <p>{e.userId}</p>
                    {edit === e.id? <button onClick={ () => handlePutRequest(e)}>Update</button> : <button onClick={ () => editClicked(e)}>EDIT</button>}
                </div>
            )}
        </div>
    )
}
export default Axios
