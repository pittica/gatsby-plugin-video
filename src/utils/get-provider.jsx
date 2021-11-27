import providers from "./providers"

export default function getProvider(url) {
  const result = {
    url,
    provider: null,
    id: null,
  }

  providers.forEach(({ name, regex, match }) => {
    const matches = url.match(regex)

    if (matches && typeof matches[match] !== "undefined") {
      result.id = matches[match]
      result.provider = name

      return false
    }
  })

  return result
}
