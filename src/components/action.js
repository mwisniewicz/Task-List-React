import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasTasks}
                >What I should do?</button>
        </div>
    );
};

export default Action;