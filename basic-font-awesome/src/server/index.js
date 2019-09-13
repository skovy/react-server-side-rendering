import React from "react";
import express from "express";
import path from "path";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { config } from '@fortawesome/fontawesome-svg-core'

import Home from "../shared/home";
import HTML from "./html";

config.autoAddCss = false;

const app = express();

// Server all of the static assets produced by webpack.
app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (_, res) => {
  const initialData = "there";

  // Render the component to it's initial HTML. This will return an HTML string.
  // The markup will be sent on the initial request for faster page loads and
  // allow search engines to crawl the page for SEO purposes. On the client,
  // React will preserve it and only attach event handlers, allowing for a very
  // performant first-load experience.
  const content = renderToString(<Home name={initialData} />);

  // Create the basic HTML document with our rendered content and send along
  // the initial data so the client can pickup where the server left off.
  const markup = <HTML content={content} initialData={initialData} />;

  // Similar to `renderToString`, except this doesn’t create extra DOM
  // attributes that React uses internally, such as `data-reactroot`.
  const html = `<!doctype html>${renderToStaticMarkup(markup)}`;

  res.send(html);
});

app.listen(3000);
