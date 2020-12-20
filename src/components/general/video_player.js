import React, { Component } from 'react';


class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        console.log(props)
    }

    render() {
        return (
            <>
                <video
                    src={this.props.video}
                    preload="auto"
                    style={{ width: '100%', height: '100%'}}
                    controls
                >
                </video>
            </>
        )
    }
}

export default VideoPlayer;