import React, { Component } from 'react';

class section extends React.Component {
  render() {
  return (
    <section>
<div className="header"></div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">     
  <ul className="sidebarMenuInner">
  <li><img src="#"></img></li>

  <li>Name</li>
  <li><a href="#services">Company</a></li>
  <li><a href="https://instagram.com/plavookac">Instagram</a></li>
  <li><a href="https://twitter.com/plavookac">Twitter</a></li>
  <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg">YouTube</a></li>
  <li><a href="https://www.linkedin.com/in/plavookac/">Linkedin</a></li>
</ul>  
<footer className="footer">
		<div className="social-links">
			<a href="#" target="_blank" className="fa fa-facebook"></a>
			<a href="#" target="_blank" className="fa fa-twitter"></a>
			<a href="#" target="_blank" className="fa fa-linkedin"></a>
			<a href="#" target="_blank" className="fa fa-pinterest-p"></a>
		</div>
		<div className="footer-text">
			<p>&copy 2019 copyright all right reserved</p>
</div>
</footer>
  </div>
  <div id='center' className="main center">
    <div className="mainInner">
      <div className="about">About me</div>
    </div>
    <div className="mainInner">
      <div className="skills">Skills</div>
    </div>
    <div className="mainInner">
      <div className="portfolio">
        Portfolio
      </div>
	</div>
  <div className="linkedin">
  <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="rokasm"><a className="LI-simple-link" href='https://lt.linkedin.com/in/rokasm?trk=profile-badge'>Rokas Marčauskas</a></div>
  </div>
    <div id="services" className="mainInner2">
			<h2>SERVICES</h2>
			<div className="my-services">
		<div className="block">
			<h4>lorem</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, 
				accusamus possimus cum laboriosam assumenda,
				 vel rerum, qui repellendus architecto rem eos non 
				 expedita magnam commodi voluptas dolores tempora error doloribus.</p>
		</div>

		<div className="block">
		<h4>lorem</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, 
				accusamus possimus cum laboriosam assumenda,
				 vel rerum, qui repellendus architecto rem eos non 
				 expedita magnam commodi voluptas dolores tempora error doloribus.</p>
		</div>

		<div className="block">
		<h4>lorem</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, 
				accusamus possimus cum laboriosam assumenda,
				 vel rerum, qui repellendus architecto rem eos non 
				 expedita magnam commodi voluptas dolores tempora error doloribus.</p>
         </div>
	</div>
				 
			</div>
      </div>
      </section>
  );
}
}

export default section;

