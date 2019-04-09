import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'iframe-lightbox/css/iframe-lightbox.css'
const getLightbox = () => import('iframe-lightbox')

class Lightbox extends Component {
    constructor (props) {
        super(props)
        this.sliderRef = React.createRef()
    }
    componentDidMount () {
        const sliderRef = this.sliderRef.current
        getLightbox().then(() => {
            (function (root, document) {
                'use strict'
                console.log(root)
                sliderRef.lightbox = new root.IframeLightbox(sliderRef, {
                    onCreated: function () {
                        /* show your preloader */
                    },
                    onLoaded: function () {
                        /* hide your preloader */
                    },
                    onError: function () {
                        /* hide your preloader */
                    },
                    onClosed: function () {
                        /* hide your preloader */
                    },
                    scrolling: false, /* default: false */
                    rate: 500 /* default: 500 */
                })
            })(typeof window !== 'undefined' ? window : this, document)
        })
    }

    render () {
        const { children, className, url } = this.props
        return (
            <a className={className} href={url} ref={this.sliderRef}>
            {children}
            </a>
    )
    }
}

Lightbox.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Lightbox
