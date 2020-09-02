import React, { Component } from 'react';

const lightBoxStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
};

class LightBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lightBox: false,
        };

        this.handleHide = this.handleHide.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    // listen on the window for any clicks
    componentDidMount() {
        window.addEventListener("click", this.handleHide);
    }

    // remove window event listener when
    // component is removed
    componentWillUnmount() {
        window.removeEventListener("click", this.handleHide);
    }

    handleHide() {
        this.setState({ lightBox: false });
    }

    handleShow(e) {
        // don't want to trigger window event
        // will immediately set back to false
        e.stopPropagation();
        this.setState({ lightBox: true });
    }

    render() {
        const { lightBox } = this.state;
        const { src } = this.props;

        return (
            <div style={ lightBox ? lightBoxStyle : {} }>
                <img
                    className="img-thumbnail"
                    onClick={ this.handleShow }
                    style={ {
                        width: lightBox ? "" : 400,
                        margin: "0 auto",
                        zIndex: 2,
                    } }
                    src={ src }
                    alt=''
                />
            </div>
        );
    }
}

export default LightBox;