import React from "react"
import PropTypes from "prop-types"

export default function PornHub({ id, width, height, title, className }) {
  return (
    <iframe
      className={className}
      width={width}
      height={height}
      title={title}
      src={`https://www.pornhub.com/embed/${id}`}
      frameBorder="0"
      allowFullScreen
    />
  )
}

PornHub.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

PornHub.defaultProps = {
  width: 560,
  height: 315,
  title: "PornHub video player",
  className: "video",
}
