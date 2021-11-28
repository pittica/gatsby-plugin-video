import React from "react"
import PropTypes from "prop-types"

export default function Dailymotion({ id, width, height, title, className }) {
  return (
    <iframe
      className={className}
      style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden"
      frameborder="0"
      type="text/html"
      src={`https://www.dailymotion.com/embed/video/${id}`}
      title={title}
      width={width}
      height={height}
      allowfullscreen
    />
  )
}

Dailymotion.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Dailymotion.defaultProps = {
  width: "100%",
  height: "100%",
  title: "Dailymotion video player",
  className: "video",
}
