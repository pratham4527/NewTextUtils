import React, { useState } from 'react'

function TextForm(props) {

    const [text,setText] = useState("Enter the text here");
    // text="sdgdg" //wrong way
    // setText("sfsdgdg") // correct way

    const handelupClick = () => {
        // console.log("uppercase btn is clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        // setText("uppercase clicked")
    }


    const handelloClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handelOnChange = (event) => {
        console.log("changed")
        setText(event.target.value)
    }
    
    const handelclear = () => {
        // console.log("changed")
        setText("")
    }
  
    return (
    <div>


        <h2 className={`my-3 text-${props.modeNameColor} `} >{props.heading}</h2>
        <div className="mb-3 mt-3">
        <textarea className={`form-control text-${props.modeNameColor} bg-${props.mode}`}  id="myBox"  value={text} rows="12" onChange={handelOnChange}></textarea>
        </div>

        <button className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-1`} onClick={handelupClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-1`} onClick={handelloClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'secondary'} mx-1`} onClick={handelclear}>Clear</button>

        <div className={`container text-${props.modeNameColor} `}>
            <h2>Text Summary : </h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} min required to read above passage</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

    </div>
  )
}

export default TextForm