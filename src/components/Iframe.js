import React from "react";

const Iframe = ({ source }) => {
    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        // basic bootstrap classes. you can change with yours.

        <iframe
            id="JotFormIFrame-92181413902956"
            title="Create Tournament"
            allowtransparency="true"
            allowFullScreen={true}
            allow="geolocation; microphone; camera"
            src={src}
            frameBorder="0"
            width="1000vw"
            scrolling="no"
        />
    );
};

export default Iframe;
