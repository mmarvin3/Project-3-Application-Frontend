import { useState } from "react";

import { useState } from "react";
const Show = (props) => {

    const idf = props.match.params.id;
    const french = props.french.find(p => p._id === idf)

    const ids = props.match.params.id;
    const spanish = props.spanish.find(p => p._id === ids)

    const idi = props.match.params.id;
    const italian = props.italian.find(p => p._id === idi)


    // useState for onClick
    const [flip, setFlip] = useState(false)

    if (french !== spanish && french !== italian) {
        return (
            <div >
                <div className={`showCard ${flip ? "flip" : ""}`}>

                    <div className="front" onClick={() => setFlip(!flip)}>
                        <h3> {french.mater}</h3>
                    </div>

                    <div className="back" onClick={() => setFlip(!flip)}>
                        <h3> {french.translation}</h3>
                        <img src={french.image} alt={french.translation} />
                    </div>

                </div>
            </div>)
    } else if (spanish !== french && spanish !== italian) {
        return (
            <div>

                <div className={`showCard ${flip ? "flip" : ""}`}>

                    <div className="front" onClick={() => setFlip(!flip)}>
                        <h3> {spanish.mater}</h3>
                    </div>
                    <div className="back" onClick={() => setFlip(!flip)}>
                        <h3> {spanish.translation}</h3>
                        <img src={spanish.image} alt={spanish.translation}/>
                    </div>
                </div>
            </div>

        )
    } else {
        return (
            <div>

                <div className={`showCard ${flip ? "flip" : ""}`}>

                    <div className="front" onClick={() => setFlip(!flip)}>
                        <h3> {italian.mater}</h3>
                    </div>
                    <div className="back" onClick={() => setFlip(!flip)}>
                        <h3> {italian.translation}</h3>
                        <img src={italian.image} alt={italian.translation} />
                    </div>
                </div>

            </div>
        )
    }

}

export default Show;

