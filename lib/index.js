import { html, Component, render } from '../js/standalone.module.js'
import '../js/nostr-ui.js'

// Event
class Event extends Component {
  constructor (props) {
    super(props)

    this.state = {
      event: props.event || {},
      content: props.content,
      pubkey: props.pubkey || ''
    }
  }

  /**
   * Renders the component.
   * @returns The rendered template.
   */
  render () {
    const { event } = this.state.event
    const content = event?.content || this.state.content
    const pubkey = event?.pubkey || this.state.pubkey

    console.log('content', content)

    const mediaPattern = /\.(jpeg|jpg|gif|png|mp4|webm|ogg)$/
    const contentPieces = content?.split(/\s+/)
    const youtubePattern = /(youtu.be\/|youtube.com\/watch\?v=)([^&]+)/

    return html`
      <div id="container">
      <div>
      ${pubkey
        ? html`<div>User <a target="_blank" href="https://nostr.social/${pubkey}">${pubkey}</a></div><hr />`
        : html``
      }

      </div>
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
        ${event
        ? html`<hr />
              Raw event data:
              <pre>
                ${JSON.stringify(event, null, 2)}
              </pre>`
        : html``
      }        
        <hr />
      </div>
    `
  }
}

customElements.define('nostr-event', class extends HTMLElement {
  connectedCallback () {
    const attrs = Array.from(this.attributes).reduce((acc, attr) => {
      acc[attr.name] = attr.value
      return acc
    }, {})
    if (Object.keys(attrs).length > 0) { // if there are any attributes present
      render(html`<${Event} ...${attrs}/>`, this)
    }
  }
})
