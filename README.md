

<div align="center">  
  <h1>nostr-event</h1>
</div>

<div align="center">  
<i>nostr-event</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nostr-components/nostr-event/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/nostr-event)](https://npmjs.com/package/nostr-event)
[![npm](https://img.shields.io/npm/dw/nostr-event.svg)](https://npmjs.com/package/nostr-event)
[![Github Stars](https://img.shields.io/github/stars/nostr-components/nostr-event.svg)](https://github.com/nostr-components/nostr-event/)

# Nostr-Event Web Component

## Description

`nostr-event` is a reusable Web Component that displays Nostr events with rich media support including images, videos and YouTube embeds. It takes an event as a JSON string, rendering it beautifully in any HTML document. 

## Features

- Displays user content including text, images, videos and YouTube links.
- Offers responsive design, adapting media size to the available space.
- Includes raw event data, giving insight into the underlying structure of Nostr events.

## Installation

To use the `nostr-event` web component, include it via a `<script>` tag:

```html
<script type="module" src="nostr-event.js"></script>
```
  
Replace "nostr-event.js" with the actual path to your JavaScript file that contains the definition for `nostr-event` web component.

## Usage

Include the `nostr-event` element in your HTML and provide an event as a JSON string via the `event` attribute:

```html
<nostr-event event='{"content":"Hello world!", "pubkey":"abc123"}'></nostr-event>
```

The `event` attribute should contain a JSON string with `content` and `pubkey` properties at a minimum.

## Example

Here is a simple HTML page that imports and uses the `nostr-event` web component:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Nostr Event</title>
</head>
<body>
    <nostr-event event='{"content":"Hello world!", "pubkey":"abc123"}'></nostr-event>
    <script type="module" src="nostr-event.js"></script>
</body>
</html>
```

## Support

For support or any questions, open an issue on this repository. 

## License

This project is open source under the [MIT license](LICENSE).