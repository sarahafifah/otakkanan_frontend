import React from 'react';
import { Link } from 'react-router-dom';

function RoomDetail() {    
    return(
    <div class="datepicker_mobile_full">
        <div id="page" class="theia-exception">
            
        <header class="header menu_fixed">
            {/* <div id="preloader"><div data-loader="circle-side"></div></div> */}
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
            <section class="hero_in hotels_detail">
                <div class="wrapper">
                    <div class="container">
                        <h1 class="fadeInUp"><span></span>Hotel detail page</h1>
                    </div>
                    <span class="magnific-gallery">
                        <a href="img/gallery/hotel_list_1.jpg" class="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
                        <a href="img/gallery/hotel_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                        <a href="img/gallery/hotel_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                    </span>
                </div>
            </section>
            

            <div class="bg_color_1">
                <nav class="secondary_nav sticky_horizontal">
                    <div class="container">
                        <ul class="clearfix">
                            <li><a href="#description" class="active">Description</a></li>
                            <li><a href="#sidebar">Booking</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="container margin_60_35">
                    <div class="row">
                        <div class="col-lg-8">
                            <section id="description">
                                <h2>Description</h2>
                                <p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul class="bullets">
                                            <li>Dolorem mediocritatem</li>
                                            <li>Mea appareat</li>
                                            <li>Prima causae</li>
                                            <li>Singulis indoctum</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul class="bullets">
                                            <li>Timeam inimicus</li>
                                            <li>Oportere democritum</li>
                                            <li>Cetero inermis</li>
                                            <li>Pertinacia eum</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <hr/>
                                <h3>Instagram photos feed</h3>
                                <div id="instagram-feed-hotel" class="clearfix"></div>
                                <hr/>
                                <div class="room_type first">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="assets/img/gallery/hotel_list_1.jpg" class="img-fluid" alt=""/>
                                        </div>
                                        <div class="col-md-8">
                                            <h4>Single Room</h4>
                                            <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                            <ul class="hotel_facilities">
                                                <li><img src="assets/img/hotel_facilites_icon_2.svg" alt=""/>Single Bed</li>
                                                <li><img src="assets/img/hotel_facilites_icon_4.svg" alt=""/>Free Wifi</li>
                                                <li><img src="assets/img/hotel_facilites_icon_5.svg" alt=""/>Shower</li>
                                                <li><img src="assets/img/hotel_facilites_icon_7.svg" alt=""/>Air Condition</li>
                                                <li><img src="assets/img/hotel_facilites_icon_8.svg" alt=""/>Hairdryer</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="room_type gray">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="assets/img/gallery/hotel_list_2.jpg" class="img-fluid" alt=""/>
                                        </div>
                                        <div class="col-md-8">
                                            <h4>Double Room</h4>
                                            <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                            <ul class="hotel_facilities">
                                                <li><img src="assets/img/hotel_facilites_icon_3.svg" alt=""/>Double Bed</li>
                                                <li><img src="assets/img/hotel_facilites_icon_4.svg" alt=""/>Free Wifi</li>
                                                <li><img src="assets/img/hotel_facilites_icon_6.svg" alt=""/>Bathtub</li>
                                                <li><img src="assets/img/hotel_facilites_icon_7.svg" alt=""/>Air Condition</li>
                                                <li><img src="assets/img/hotel_facilites_icon_8.svg" alt=""/>Hairdryer</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="room_type last">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="assets/img/gallery/hotel_list_3.jpg" class="img-fluid" alt=""/>
                                        </div>
                                        <div class="col-md-8">
                                            <h4>Suite Room</h4>
                                            <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                            <ul class="hotel_facilities">
                                                <li><img src="assets/img/hotel_facilites_icon_3.svg" alt=""/>King size Bed</li>
                                                <li><img src="assets/img/hotel_facilites_icon_4.svg" alt=""/>Free Wifi</li>
                                                <li><img src="assets/img/hotel_facilites_icon_6.svg" alt=""/>Bathtub</li>
                                                <li><img src="assets/img/hotel_facilites_icon_7.svg" alt=""/>Air Condition</li>
                                                <li><img src="assets/img/hotel_facilites_icon_9.svg" alt=""/>Swimming pool</li>
                                                <li><img src="assets/img/hotel_facilites_icon_3.svg" alt=""/>Hairdryer</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <hr/>
                                <h3>Location</h3>
                                <div id="map" class="map map_single add_bottom_30"></div>
                                
                            </section>

                        </div>
                        
                        
                        <aside class="col-lg-4" id="sidebar">
                            <div class="box_detail booking">
                                <div class="price">
                                    <span>45$ <small>hour</small></span>
                                    <div class="score"><span>Booking Status<em>Can't Book</em></span></div>
                                </div>

                                <div class="form-group input-dates">
                                    <input class="form-control" type="text" name="dates" placeholder="When.."/>
                                    <i class="icon_calendar"></i>
                                </div>

                                <div class="form-group input-dates">
                                    <input class="form-control" type="text" name="dates" placeholder="Starting time.."/>
                                </div>

                                <div class="form-group input-dates">
                                    <input class="form-control" type="text" name="dates" placeholder="Duration"/>
                                </div>

                                {/* <div class="form-group clearfix">
                                    <div class="custom-select-form">
                                        <select class="wide">
                                            <option>Room Type</option>	
                                            <option>Single Room</option>
                                            <option>Double Room</option>
                                            <option>Suite Room</option>
                                        </select>
                                    </div>
                                </div> */}
                                <a href="cart-1.html" class=" add_top_30 btn_1 full-width purchase">Purchase</a>
                                <a href="wishlist.html" class="btn_1 full-width outline wishlist"><i class="icon_heart"></i> Add to wishlist</a>
                                <div class="text-center"><small>No money charged in this step</small></div>
                            </div>
                            <ul class="share-buttons">
                                <li><a class="fb-share" href="#0"><i class="social_facebook"></i> Share</a></li>
                                <li><a class="twitter-share" href="#0"><i class="social_twitter"></i> Tweet</a></li>
                                <li><a class="gplus-share" href="#0"><i class="social_googleplus"></i> Share</a></li>
                            </ul>
                        </aside>
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
  
    </div>

    );
}
                        
export default RoomDetail;
            