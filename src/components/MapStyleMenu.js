import React from "react";
import mapStyles from "../MapStyles.json"

const menuStyle = {
    position: "absolute",
    background: "white",
    padding: 20,
    zIndex: "2",
    top: "10vh",
    display: "flex",
};

const mapStyleNames = [
    { name: "watercolor" },
    { name: "openstreetmap" },
    { name: "toner" },
    { name: "terrain" },
];

const MapStyleMenu = (props) => {
    const map = props.mapConnection;

    const getStyle = (name) => {
        map.setStyle(mapStyles.find(style => style.name === name).content);
    };

    return (
        <>
            {map ? (
                <div style={menuStyle}>
                    {mapStyleNames.map((mapStyleNames) => (
                        <div key={mapStyleNames.name}>
                            <input
                                id={mapStyleNames.name}
                                type="radio"
                                name="rtoggle"
                                onClick={() => getStyle(mapStyleNames.name)}
                            />
                            <label>{mapStyleNames.name}</label>
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default MapStyleMenu;