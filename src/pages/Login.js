import React from 'react';
import { Link } from 'react-router-dom';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';

function Login() {
    return(

	<div id="login_bg">
		
		<nav id="menu" class="fake_menu"></nav>
		
		{/* <div id="preloader">
			<div data-loader="circle-side"></div>
		</div> */}


		<div id="login">
			<aside>
				<figure>
					<Link to="/"><img src="assets/img/logo_sticky.png" width="155" height="36" data-retina="true" alt="" class="logo_sticky"/></Link>
				</figure>
				<form>
					{/* <div class="access_social">
						<a href="#0" class="social_bt facebook">Login with Facebook</a>
						<a href="#0" class="social_bt google">Login with Google</a>
						<a href="#0" class="social_bt linkedin">Login with Linkedin</a>
					</div>
					<div class="divider"><span>Or</span></div> */}
					<div class="form-group">
						<label>Email</label>
						<input type="email" class="form-control" name="email" id="email"/>
						<i class="icon_mail_alt"></i>
					</div>
					<div class="form-group">
						<label>Password</label>
						<input type="password" class="form-control" name="password" id="password" value=""/>
						<i class="icon_lock_alt"></i>
					</div>
					<div class="clearfix add_bottom_30">
						<div class="checkboxes float-left">
							<label class="container_check">Remember me
							<input type="checkbox"/>
							<span class="checkmark"></span>
							</label>
						</div>
						<div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
					</div>
					<a href="#0" class="btn_1 rounded full-width">Login to Panagea</a>
					<div class="text-center add_top_10">New to Panagea? <strong><Link to="/register">Sign up!</Link></strong></div>
				</form>
				<div class="copy">© 2018 Panagea</div>
			</aside>
		</div>
		
	</div>

);
}
    
    
export default Login;