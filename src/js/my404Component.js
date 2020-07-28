import React, { Component } from "react";

class My404Component extends Component {
  render() {
    return (
      <div className="bg-warning" style={{ height: "100vw" }}>
        <section
          id="layout-404"
          className="layout-404 py-5 my-5 bg-warning h-50"
        >
          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <section className="col-8">
                <h1 className="layout-header">
                  Error 404: Requested Page is Not Found
                </h1>
                <p>
                  The page you requested is not found. Please check the URL or
                  contact the administrator. Thank you.
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default My404Component;
