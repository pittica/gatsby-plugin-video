import React from "react"
import PropTypes from "prop-types"

export default function Vimeo({ id, width, height, title, className }) {
  return (
    <iframe
      className={className}
      width={width}
      height={height}
      src={`https://player.vimeo.com/video/${id}`}
      style="position:absolute;top:0;left:0;width:100%;height:100%;"
      title={title}
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    />
  )
}

Vimeo.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Vimeo.defaultProps = {
  width: "100%",
  height: "100%",
  className: "video",
  title: "Vimeo video player",
}
