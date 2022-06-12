import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

function Admin(): ReactElement {
  return (
    <>
      <main>
        <h2>This is admin page!</h2>
        <p>This is admin page. Have you done the login?</p>
      </main>
      <nav>
        <Link to="/">top</Link>
      </nav>
    </>
  );
}

export default Admin;
