import React from "react";
import preloader from '../images/preloader.svg'
const Loading = () => {
    return(
        <div style={{textAlign: 'center'}}>
            <img src={preloader} />
        </div>
    )
}
export default Loading