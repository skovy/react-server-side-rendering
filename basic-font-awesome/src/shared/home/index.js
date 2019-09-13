import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false;

const Hello = props => (
  <h1>
    Hello, {props.name}! <FontAwesomeIcon icon={faCoffee} />
  </h1>
);

export default Hello;
