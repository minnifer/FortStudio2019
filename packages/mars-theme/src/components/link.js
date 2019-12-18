import React from "react";
import { connect } from "frontity";

const Link = ({
  state,
  actions,
  link,
  className,
  children,
  target,
  "aria-current": ariaCurrent
}) => {
  const onClick = event => {
    // Do nothing if it's an external link
    if (link.startsWith("http")  || link.startsWith("tel") || link.startsWith("mailto") ) return;

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);

    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };

  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      target={target}
    >
      {children}
    </a>
  );
};

export default connect(Link);
