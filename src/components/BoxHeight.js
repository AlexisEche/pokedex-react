import React from 'react';

const BoxHeight = (props) => {

    return (
        <>
            <div class="panel is-primary">
                <p class="panel-heading">{props.theHeight}</p>
                <a class="panel-block is-active" href="#">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span> {props.theHeight}
                </a>
            </div>
        </>
    );
}

export default BoxHeight;