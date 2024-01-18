import { useState } from "react";

// enn saare params ki jaghe props bhi pass krr skte hai
function Card({id, name, info, image, price, removeTour}) { 
    // initialised readmore variable with a bool value false mtlb ki readmore pe click nhi hua hai
    const[readmore,setReadmore] = useState(false);

    // description variable mei info ka substring nikaal rkha till 200 characters,agr readmore ki value true hai mtlb clicked hai toh pura info dikahana hai else 200 char tk 
    const description = readmore ? info : `${info.substring(0,200)}....`;

    // yeh function click pe readmore ki bool value ko toggle krega i.e if true->false and vice versa
    function readmoreHandler() {
        setReadmore(!readmore);
    }



    return(
        <div className="card">
            {/* image */}
            <img src={image} className="image"></img>

            <div className="tour-info">
                {/* price and name */}
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                {/* description */}
                <div className="description">
                    {description}
                    {/* yeh read more wala text hai jiski value starting mei flase krr rkhi thi */}
                    <span className="read-more" onClick={readmoreHandler}>
                        {/* ternary operator use krk check kiya hai agr readmore true hai toh show less krna hai and ulta in dusra case  */}
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>
            
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Intrested
            </button>
        </div>
    );
}

export default Card;