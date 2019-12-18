import React from "react";
import { findDOMNode } from "react-dom";
import { withRouter } from 'react-router-dom';

const GoBack = ({ history }) => <><button onClick={() => history.goBack()} >Close</button></>;

export default withRouter(GoBack);