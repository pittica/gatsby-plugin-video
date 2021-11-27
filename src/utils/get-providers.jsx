export default [
  {
    name: "YouTube",
    regex:
      /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
    match: 1,
  },
  {
    name: "Vimeo",
    regex:
      /^(?:https?:\/\/)?(?:www\.|player\.)?(?:vimeo\.com\/)?(?:video\/)?(\d+)/,
    match: 1,
  },
  {
    name: "Dailymotion",
    regex:
      /^(?:https?:\/\/)?(?:www\.)?(?:dai\.ly\/|dailymotion\.com\/(?:embed\/video\/|video\/))(\w+)(?:\S+)?$/,
    match: 1,
  },
  {
    name: "PornHub",
    regex:
      /^(?:https?:\/\/)?(?:\w+\.)?(?:pornhub.com\/(?:embed\/|view_video\.php\?viewkey=))(\w+)(?:\S+)?$/,
    match: 1,
  },
]
