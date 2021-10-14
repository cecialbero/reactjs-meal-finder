import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Toast.scss';

const Toast = ({ toast }) => {
    const { msg, type } = toast;

    return (
        <Fragment>
            { msg ?
                <div className={`toast toast-${type}`}>
                    <i className={'fas fa-exclamation-triangle'} />
                    <p>{ msg }</p>
                </div>
                :

                ''
            }
        </Fragment>
    )
}

Toast.propTypes = {
    toast: PropTypes.object
}

export default Toast