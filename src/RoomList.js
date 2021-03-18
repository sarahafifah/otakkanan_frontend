import React from 'react';
import { Link } from 'react-router-dom';

function RoomList() {
    return(
    <div>
    <div id="page">		
        <header class="header menu_fixed">
            <div id="preloader"><div data-loader="circle-side"></div></div>
            <div id="logo">
                <a href="index.html">
                    <img src="assets/img/logo.svg" width="150" height="36" alt="" class="logo_normal"/>
                    <img src="assets/img/logo_sticky.svg" width="150" height="36" alt="" class="logo_sticky"/>
                </a>
            </div>
            
            <a href="#menu" class="btn_mobile">
                <div class="hamburger hamburger--spin" id="hamburger">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </a>
            <nav id="menu" class="main-menu">
                <ul>
                    <li><span><Link to="/">Home</Link></span></li>
                    <li><span><Link to="list">Room</Link></span></li>
                    <li><span><Link to="/about">About</Link></span></li>
                    <li><span><a href="#0">Sign In</a></span></li>
                    <li><span><a href="#0">Sign Up</a></span></li>
                </ul>
            </nav>
    
        </header>
        
        
        <div>
            
            <section class="hero_in hotels">
                <div class="wrapper">
                    <div class="container">
                        <h1 class="fadeInUp"><span></span>Paris hotels list</h1>
                    </div>
                </div>
            </section>
            
            
            <div class="filters_listing sticky_horizontal">
                <div class="container">
                    <ul class="clearfix">
                        <li>
                            <div class="switch-field">
                                <input type="radio" id="all" name="listing_filter" value="all"/>
                                <label for="all">All</label>
                                <input type="radio" id="popular" name="listing_filter" value="popular"/>
                                <label for="popular">Popular</label>
                                <input type="radio" id="latest" name="listing_filter" value="latest"/>
                                <label for="latest">Latest</label>
                            </div>
                        </li>
                        <li>
                            <div class="layout_view">
                                <a href="hotels-grid-isotope.html"><i class="icon-th"></i></a>
                                <a href="#0" class="active"><i class="icon-th-list"></i></a>
                            </div>
                        </li>
                        <li>
                            <a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            
            
            <div class="collapse" id="collapseMap">
                <div id="map" class="map"></div>
            </div>
           
    
            <div class="container margin_60_35">
                <div class="box_list">
                    <div class="row no-gutters">
                        <div class="col-lg-5">
                            <figure>
                                <small>Parirs Centre</small>
                                <Link to="/detail"><img src="assets/img/hotel_1.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></Link>
                            </figure>
                        </div>
                        <div class="col-lg-7">
                            <div class="wrapper">
                                <a href="#0" class="wish_bt"></a>
                                &nbsp;
                                <h3><Link to="/detail">Park Hyatt Hotel</Link></h3>
                                <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
                                <span class="price">From <strong>$54</strong> /per hour</span>
                            </div>
                            <ul>
                                <li>Booking Status: <strong>BOOKED</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="box_list">
                    <div class="row no-gutters">
                        <div class="col-lg-5">
                            <figure>
                                <small>Parirs Centre</small>
                                <Link to="/detail"><img src="assets/img/hotel_2.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></Link>
                            </figure>
                        </div>
                        <div class="col-lg-7">
                            <div class="wrapper">
                                <a href="#0" class="wish_bt"></a>
                                &nbsp;
                                <h3><Link to="/detail">Mariott Hotel</Link></h3>
                                <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
                                <span class="price">From <strong>$124</strong> /per hour</span>
                            </div>
                            <ul>
                                <li>Booking Status: <strong>UNRESERVE</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="box_list">
                    <div class="row no-gutters">
                        <div class="col-lg-5">
                            <figure>
                                <small>Parirs Centre</small>
                                <Link to="/detail"><img src="assets/img/hotel_3.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></Link>
                            </figure>
                        </div>
                        <div class="col-lg-7">
                            <div class="wrapper">
                                <a href="#0" class="wish_bt"></a>
                                &nbsp;
                                <h3><Link to="/detail">Lumiere Hotel</Link></h3>
                                <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
                                <span class="price">From <strong>$45</strong> /per hour</span>
                            </div>
                            <ul>
                                <li>Booking Status: <strong>BOOKED</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="box_list">
                    <div class="row no-gutters">
                        <div class="col-lg-5">
                            <figure>
                                <small>Parirs Centre</small>
                                <Link to="/detail"><img src="assets/img/hotel_4.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></Link>
                            </figure>
                        </div>
                        <div class="col-lg-7">
                            <div class="wrapper">
                                <a href="#0" class="wish_bt"></a>
                                &nbsp;
                                <h3><Link to="/detail">Louvre Hotel</Link></h3>
                                <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
                                <span class="price">From <strong>$25</strong> /per hour</span>
                            </div>
                            <ul>
                                <li>Booking Status: <strong>UNRESERVE</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="box_list">
                    <div class="row no-gutters">
                        <div class="col-lg-5">
                            <figure>
                                <small>Parirs Centre</small>
                                <Link to="/detail"><img src="assets/img/hotel_5.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></Link>
                            </figure>
                        </div>
                        <div class="col-lg-7">
                            <div class="wrapper">
                                <a href="#0" class="wish_bt"></a>
                                &nbsp;
                                <h3><Link to="/detail">Concorde Hotel</Link></h3>
                                <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
                                <span class="price">From <strong>$65</strong> /per hour</span>
                            </div>
                            <ul>
                                <li>Booking Status: <strong>BOOKED</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                
                <p class="text-center add_top_60"><a href="#0" class="btn_1 rounded">Load more</a></p>
            
            </div>
            
            <div class="bg_color_1">
                <div class="container margin_60_35">
                    <div class="row">
                        <div class="col-md-4">
                            <a href="#0" class="boxed_list">
                                <i class="pe-7s-help2"></i>
                                <h4>Need Help? Contact us</h4>
                                <p>Cum appareat maiestatis interpretaris et, et sit.</p>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="#0" class="boxed_list">
                                <i class="pe-7s-wallet"></i>
                                <h4>Payments and Refunds</h4>
                                <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="#0" class="boxed_list">
                                <i class="pe-7s-note2"></i>
                                <h4>Quality Standards</h4>
                                <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
        
        <footer>
            <div class="container margin_60_35">
                <div class="row">
                    <div class="col-lg-5 col-md-12 p-r-5">
                        <p><img src="assets/img/logo.svg" width="150" height="36" alt=""/></p>
                        <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
                        <div class="follow_us">
                            <ul>
                                <li>Follow us</li>
                                <li><a href="#0"><i class="ti-facebook"></i></a></li>
                                <li><a href="#0"><i class="ti-twitter-alt"></i></a></li>
                                <li><a href="#0"><i class="ti-google"></i></a></li>
                                <li><a href="#0"><i class="ti-pinterest"></i></a></li>
                                <li><a href="#0"><i class="ti-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 ml-lg-auto">
                        <h5>Useful links</h5>
                        <ul class="links">
                            <li><Link to="/about">About</Link></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5>Contact with Us</h5>
                        <ul class="contacts">
                            <li><a href="tel://61280932400"><i class="ti-mobile"></i> + 61 23 8093 3400</a></li>
                            <li><a href="mailto:info@Panagea.com"><i class="ti-email"></i> info@Panagea.com</a></li>
                        </ul>
                        <div id="newsletter">
                        <h6>Newsletter</h6>
                        <div id="message-newsletter"></div>
                        <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                            <div class="form-group">
                                <input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="Your email"/>
                                <input type="submit" value="Submit" id="submit-newsletter"/>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                
                <hr/>
                <div class="row">
                    <div class="col-lg-6">
                        <ul id="footer-selector">
                            <li>
                                <div class="styled-select" id="lang-selector">
                                    <select>
                                        <option value="English" selected>English</option>
                                        <option value="French">French</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Russian">Russian</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div class="styled-select" id="currency-selector">
                                    <select>
                                        <option value="US Dollars" selected>US Dollars</option>
                                        <option value="Euro">Euro</option>
                                    </select>
                                </div>
                            </li>
                            <li><img src="assets/img/cards_all.svg" alt=""/></li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul id="additional_links">
                            <li><a href="#0">Terms and conditions</a></li>
                            <li><a href="#0">Privacy</a></li>
                            <li><span>© 2019 Panagea</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        
        </div>
        
        
        
        <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
                <h3>Sign In</h3>
            </div>
            <form>
                <div class="sign-in-wrapper">
                    <a href="#0" class="social_bt facebook">Login with Facebook</a>
                    <a href="#0" class="social_bt google">Login with Google</a>
                    <div class="divider"><span>Or</span></div>
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
                    <div class="clearfix add_bottom_15">
                        <div class="checkboxes float-left">
                            <label class="container_check">Remember me
                              <input type="checkbox"/>
                              <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                    </div>
                    <div class="text-center"><input type="submit" value="Log In" class="btn_1 full-width"/></div>
                    <div class="text-center">
                        Don’t have an account? <a href="register.html">Sign up</a>
                    </div>
                    <div id="forgot_pw">
                        <div class="form-group">
                            <label>Please confirm login email below</label>
                            <input type="email" class="form-control" name="email_forgot" id="email_forgot"/>
                            <i class="icon_mail_alt"></i>
                        </div>
                        <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                        <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"/></div>
                    </div>
                </div>
            </form>
        
        </div>
        
        
        <div id="toTop"></div>
    
    </div>

    );
}
    
    
export default RoomList;