import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import cn from 'classnames';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const Img = ({className, src, alt = '', lazy = true, ...attrs}) => {
    const [isOpen, setOpen] = useState(false);
    const url = useBaseUrl(src);

    return (
        <>
            <picture
                onClick={() => setOpen(true)}
            >
                <source srcSet={`${url}.webp`} type="image/webp"/>
                <img
                    className={cn(className, 'img-responsive', 'gallery')}
                    src={url}
                    alt={alt}
                    {...attrs}
                    loading={lazy ? "lazy" : undefined}
                />
            </picture>
            {isOpen && (
                <Lightbox
                    mainSrc={url}
                    onCloseRequest={() => setOpen(false)}
                />
            )}
        </>
    )
};

export default Img;