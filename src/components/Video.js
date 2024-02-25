import React, {useRef, useEffect} from "react";
import lozad from 'lozad';

function youtube_parser(url){
    let regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
    let match = url.match(regExp);
    return (match && match[1].length==11)? match[1] : false;
}

const Video = ({src}) => {
    const ref = useRef();

    useEffect(() => {
        lozad(ref.current).observe();
    }, []);

    return (
        <div className="video-responsive">
            <div className="video-frame">
                <iframe ref={ref} title={src} width="560" height="315" data-src={src} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        </div>
    )
}

export default Video;