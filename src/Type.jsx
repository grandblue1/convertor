import React from 'react';

const Type = ({types , link}) => {
    return (
        <div>

        {types === 'image' ? <img src={link} width="350"
                                 className="p-2" />
            : types === "video" ?
            <video src={link} width='350' className='p-2' controls > </video> :
                types === 'audio' ?
                    <audio  controls src={link}  className='p-2'> </audio> : null
        }
        </div>
    )
    ;
};

export default Type;
