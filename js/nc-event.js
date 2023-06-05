import { html, Component, render } from '../js/standalone.module.js'
import '../js/nostr-ui.js'

function doc () {
  if (di.data.length) {
    return di.data[0]
  } else {
    return di.data
  }
}

// APP
export default class Event extends Component {
  constructor (props) {
    super(props)

    this.state = {
      event: props.event,
      data: {},
      error: null
    }
  }

  /**
   * Renders the component.
   * @returns The rendered template.
   */
  render () {
    const { content } = this.state.event
    const mediaPattern = /\.(jpeg|jpg|gif|png|mp4|webm|ogg)$/
    const contentPieces = content?.split(/\s+/)
    const youtubePattern = /(youtu.be\/|youtube.com\/watch\?v=)([^&]+)/

    return html`
      <div id="container">
        <div>User <a target="_blank" href="https://nostr.social/${this.state.event.pubkey}">${this.state.event.pubkey}</a></div>
        <hr />
        <div>
          ${contentPieces?.map(piece => {
      const isMedia = mediaPattern.test(piece)
      const isYoutube = youtubePattern.test(piece)
      if (isMedia) {
        const isImage = /\.(jpeg|jpg|gif|png)$/.test(piece)
        const isVideo = /\.(mp4|webm|ogg)$/.test(piece)
        if (isImage) {
          return html`<div><img style="max-width: 60%; max-height: 600px; height: auto; width: auto;" src=${piece} alt="User content" /></div>`
        } else if (isVideo) {
          return html`<div><video style="max-width: 60%; max-height: 600px; height: auto;" controls src=${piece}></video></div>`
        }
      } else if (isYoutube) {
        const youtubeId = piece.match(youtubePattern)[2]
        return html`<div><iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0" allowfullscreen></iframe></div>`
      }
      return html`${piece} `
    })}
        </div>
        <hr />
        Raw event data:
        <pre>
          ${JSON.stringify(this.state.event, null, 2)}
        </pre>
      </div>
    `
  }
}
