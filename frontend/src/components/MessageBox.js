import Alert from 'react-bootstrap/alert';
import React from 'react';
export default function MessageBoxgBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
