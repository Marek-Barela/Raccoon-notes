const removeHTMLTags = (str) => {
  return str.replace(/<[^>]*>?/gm, ``)
}

export default removeHTMLTags