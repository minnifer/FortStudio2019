import React from "react";
import { connect } from "frontity";
import IntroSection from "./partials/introSection";

const ComponentRouter = props => {
  props.layouts.map(function(layout, index) {
    console.log(layout.acf_fc_layout);
  });
  return (
    <div>
        {props.layouts.map((layout, index) => (
        <p key={index}>{layout.acf_fc_layout}</p>
      ))}
    </div>
  );
};

export default connect(ComponentRouter);
