// import useState hook to initialize our states and make them re-settable
import { useState } from 'react';  

function PaintingForm() {
    // create a state to keep track of ImgURL
    // const [stateName, setterMethod] = useState(initialStateValue);
    
    const [imgUrl, imgUrlSetter] = useState("");

    // console.log(`My current imgUrl state is ${imgUrl}`);

    // create a callback function that will trigger updates
    // to our imgUrl state as we make changes to our "ImgURL"
    // input
    function handleImgUrl(event) {
        // event => onChange, keystroke change
        // target => where the event takes place, <input>
        // value => what exists inside of our <input> at the
        //          time of the onChange event
        
        // passing in the input value at the time of the onChange
        // event to be our new "imgUrl" state
        imgUrlSetter(event.target.value);

        // console.log(imgUrl);
    }

    return(
        <div>
            <h1> Add a new Painting</h1>
            
            <form>
                {/* Controlled Input */}
                <input 
                    type="text" 
                    placeholder="ImgURL"
                    onChange={handleImgUrl}
                    value={imgUrl}
                /><br/>

                {/* Uncontrolled Input */}
                <input type="text" placeholder="Title"/><br/>
                
                {/* Uncontrolled Input */}
                <input type="text" placeholder="Artist Name"/><br/>

                <input type="text" placeholder="date"/><br/>
                <input type="text" placeholder="width"/><br/>
                <input type="text" placeholder="height"/><br/>

                <input type="submit" value="add new painting"/>
            </form>
        </div>
    )
}

export default PaintingForm
