import React from "react"
import PropTypes from "prop-types"

export default function YouTube({ id, width, height, title, className }) {
  return (
    <iframe
      className={className}
      width={width}
      height={height}
      title={title}
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

YouTube.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

YouTube.defaultProps = {
  width: 560,
  height: 315,
  title: "YouTube video player",
  className: "video",
}
