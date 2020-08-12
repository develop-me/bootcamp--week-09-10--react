import React, { Component } from "react";

class LameGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            start: null,
            finish: null,
        };

        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickFinish = this.handleClickFinish.bind(this);
    }

    handleClickStart() {
        this.setState({
            playing: true,
            start: +new Date(),
            finish: null,
        });
    }

    handleClickFinish() {
        this.setState({
            playing: false,
            finish: +new Date(),
        });
    }

    calculateDifference() {
        let { aim } = this.props;
        let { start, finish } = this.state;

        let actual = (finish - start) / 1000;
        let diff = actual - aim;

        return diff > 0 ? `Over by ${diff.toFixed(2)} seconds` : `Under by ${(diff * -1).toFixed(2)} seconds`;
    }

    render() {
        let { aim } = this.props;
        let { playing, start, finish } = this.state;

        return (
            <React.Fragment>
                <div className="card mb-4">
                    <h5 className="card-header">Aim</h5>
                    <p className="card-body card-text">{ aim } seconds</p>
                </div>

                { playing ? (
                    <button className="btn btn-primary mb-4" onClick={ this.handleClickFinish }>Finish</button>
                ) : (
                    <button className="btn btn-primary mb-4" onClick={ this.handleClickStart }>Start</button>
                )}

                { start && finish ? <p className="alert alert-info">{ this.calculateDifference() }</p> : null }
            </React.Fragment>
        );
    }
}

export default LameGame;
