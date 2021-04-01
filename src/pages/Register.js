import React from 'react';
import { Link } from 'react-router-dom';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';

function Register() {
    return(
	<div id="register_bg">
		
		<nav id="menu" class="fake_menu"></nav>
		
		{/* <div id="preloader">
			<div data-loader="circle-side"></div>
		</div> */}
		
		<div id="login">
			<aside>
				<figure>
					<Link to="/"><img src="assets/img/logo_sticky.png" width="155" height="36" data-retina="true" alt="" class="logo_sticky"/></Link>
				</figure>
				<form autocomplete="off">
					<div class="form-group">
						<label>Your Name</label>
						<input class="form-control" type="text"/>
						<i class="ti-user"></i>
					</div>
					<div class="form-group">
						<label>Your Email</label>
						<input class="form-control" type="email"/>
						<i class="icon_mail_alt"></i>
					</div>
					<div class="form-group">
						<label>Your password</label>
						<input class="form-control" type="password" id="password1"/>
						<i class="icon_lock_alt"></i>
					</div>
					<div class="form-group">
						<label>Confirm password</label>
						<input class="form-control" type="password" id="password2"/>
						<i class="icon_lock_alt"></i>
					</div>
					<div class="form-group">
						<label>Address</label>
						<input class="form-control" type="text"/>
						<i class="icon_house"></i>
					</div>
					<div class="form-group">
						<label>Phone Number</label>
						<input class="form-control" type="text"/>
						<i class="icon_mobile"></i>
					</div>
					<div class="form-group">
						<label>Role</label>
							<div class="role-option" >
								<select>
									<option>Owner</option>
									<option>Visitors</option>
								</select>
							</div>						
					</div>
					<div id="pass-info" class="clearfix"></div>
					<a href="#0" class="btn_1 rounded full-width add_top_30">Register Now!</a>
					<div class="text-center add_top_10">Already have an acccount? <strong><Link to="/login">Sign In</Link></strong></div>
				</form>
				<div class="copy">© 2018 Panagea</div>
			</aside>
		</div>
	</div>

    );
}
    
    
export default Register;