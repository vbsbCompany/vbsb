import React from "react";

function Map({ uri }) {
  return (
    <iframe
      src={uri}
      width="100%"
      height="450"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Map;
