import React from "react"
import PropTypes from "prop-types"

import Dailymotion from "./providers/dailymotion"
import PornHub from "./providers/pornhub"
import YouTube from "./providers/youtube"
import Vimeo from "./providers/vimeo"

import getProvider from "../utils/get-provider"

export default function Switcher({ url, width, height, title, className }) {
  const { id, provider } = getProvider(url)

  switch (provider) {
    case "Dailymotion":
      return (
        <Dailymotion
          id={id}
          width={width}
          height={height}
          className={className}
          title={title}
        />
      )
    case "PornHub":
      return (
        <PornHub
          id={id}
          width={width}
          height={height}
          className={className}
          title={title}
        />
      )
    case "YouTube":
      return (
        <YouTube
          id={id}
          width={width}
          height={height}
          className={className}
          title={title}
        />
      )
    case "Vimeo":
      return (
        <Vimeo
          id={id}
          width={width}
          height={height}
          className={className}
          title={title}
        />
      )
    default:
      return (
        <a href={url} title={title} className={className}>
          {url}
        </a>
      )
  }
}

Switcher.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Switcher.defaultProps = {
  className: "video",
}
