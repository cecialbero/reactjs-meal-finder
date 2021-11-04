import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Toast.scss';

const Toast = ({ toast }) => {
    const { msg, type } = toast;

    return (
        <Fragment>
            { msg ?
                <div className={`toast toast-${type}`}>
                    <i className={'fas ' + (type === 'danger' ? 'fa-times-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle') } />
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