import React from "react";
import { connect } from "frontity";
import IntroSection from "./partials/introSection";
import ClientIntro from "./partials/clientIntro";
import ClientGrid from "./partials/clientGrid";
import Testimonial from "./partials/testimonial";

const ComponentRouter = (props) => {
  return (
    <div>
        {props.layouts.map((layout, index) => (
          renderLayout(layout, index)
      ))}
    </div>
  );
};

var renderLayout = (layout, index) => {
  if (layout.acf_fc_layout === "intro_section") {    
    return <IntroSection key={index} layout={layout} />;    
  } 
  if (layout.acf_fc_layout === "client_intro") {    
    return <ClientIntro key={index} layout={layout} />;    
  } 
  if (layout.acf_fc_layout === "client_grid") {    
    return <ClientGrid key={index} layout={layout} />;    
  } 
  if (layout.acf_fc_layout === "testimonial") {    
    return <Testimonial key={index} layout={layout} />;    
  } 
  else{
    return '';
  }
}

export default connect(ComponentRouter);
