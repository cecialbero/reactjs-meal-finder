import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ msg }) => {
    return (
        <article>
            <p>{ msg }</p>
            {/* <p>No recipes found for ingredient</p> */}
        </article>
    )
}

export default Alert;

Alert.propTypes = {
    msg: PropTypes.string
}