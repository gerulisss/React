import React, { Component } from 'react';


class header extends React.Component {
  render() {
  return (
 <header>
<nav className="navbar">
        <div className="row">
            <div className="logo-text">
            <a className="headers_links first_logo" href="index.html">PROJECT</a>
            </div>
            <nav className="nav-right">
                <a className="headers_links" href="#home">Home</a>
                <a className="headers_links" href="#about">About</a>
                <a className="headers_links" href="#services">Services</a>
                <a className="headers_links">Info</a>   
                <a className="headers_links">Contact</a>   
                
            </nav>
        </div>
    </nav>    
</header>
  );
}
}

export default header;
