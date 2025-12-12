import React, { Component } from "react";

class Customers extends Component {
  _isMounted = false;
  state = {
    display: false,
  };

  render() {
    return (
      <section className="customer_section ptb-100">
        <div className="container">
          <div className="section-title ">
            <h2 className="customer_title">Our Trusted Customers</h2>
          </div>

          <div className="customer_logos">
            <img src="/images/logos/zoho.svg" alt="image" />
            <img src="/images/logos/oracle.svg" alt="image" />
            <img src="/images/logos/zoho.svg" alt="image" />
            <img src="/images/logos/oracle.svg" alt="image" />
            <img src="/images/logos/zoho.svg" alt="image" />
            <img src="/images/logos/oracle.svg" alt="image" />
          </div>
        </div>
      </section>
    );
  }
}

export default Customers;
