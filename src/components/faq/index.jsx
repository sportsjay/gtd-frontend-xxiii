import React from "react";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

function ContactUsForm(props) {
  if (isWidthDown("sm", props.width)) {
    return (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScK7TEjvIiq_Ly62scM52jt2XsouAdIeTTb227Hex1RbCfDQw/viewform?embedded=true"
        width="360px"
        height="400px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    );
  }

  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScK7TEjvIiq_Ly62scM52jt2XsouAdIeTTb227Hex1RbCfDQw/viewform?embedded=true"
      width="600px"
      height="400px"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  );
}
export default withWidth()(ContactUsForm);
