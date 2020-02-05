import React from 'react';

const Writer = ({match, writers}) => {
    console.log('--->>', match.params.writerId)
    console.log('>>>',writers);
    return(
        <div className="writerSection">
            {
                writers.map(({id,name,description, image}) => {
                    return id == match.params.writerId ?
                    <div key={id}>
                        <div className="writerDescription">
                            <h1>{name}</h1>
                            <p>{description}</p>
                        </div>
                     </div> : null;
                })
            }
        </div>
    );
}
export default Writer;