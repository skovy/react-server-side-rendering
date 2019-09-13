import React from "react";
import { dom } from "@fortawesome/fontawesome-svg-core";

/**
 * Component to render the essential HTML document information, such as scripts,
 * links, etc. The initial data can be serialized for the client to consume.
 * The content is where the client-side React app will pickup.
 *
 * @param content the initial render of the React app
 * @param initialData the initial data to stringify and send to the client
 */
const HTML = ({ content, initialData }) => (
  <html>
    <head>
      <title>Basic SSR w/ Font Awesome</title>
      <script src="/static/main.js" defer></script>
      <style>{dom.css()}</style>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
    </body>
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__INITIAL__DATA__=${JSON.stringify(initialData)}`
      }}
    />
  </html>
);

export default HTML;
