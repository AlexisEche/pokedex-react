import React from 'react';

const BoxHeight = (props) => {

    return (
            <div className="panel is-primary">
                <p className="panel-heading">{props.theHeight}</p>
                <a className="panel-block is-active" href="#">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span> {props.theHeight}
                </a>
            </div>
    );
}

export default BoxHeight;