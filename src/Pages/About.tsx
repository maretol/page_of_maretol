import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

function About(): ReactElement {
  return (
    <>
      <main>
        <h2>Whor are we?</h2>
        <p>This feels like an existential question, don&apos;t you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
