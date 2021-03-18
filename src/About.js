import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return(
        <div>
            <div id="page">
		
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
                        <li><span><Link to="/roomlist">Room</Link></span></li>
                        <li><span><Link to="/about">About</Link></span></li>
                        <li><span><a href="/sign-in">Sign In</a></span></li>
                        <li><span><a href="/sign-up">Sign Up</a></span></li>
                    </ul>
                </nav>
        
            </header>
           
            
            <div>
                
                <section class="hero_in general">
                    <div class="wrapper">
                        <div class="container">
                            <h1 class="fadeInUp"><span></span>About Panagea</h1>
                        </div>
                    </div>
                </section>
                
        
                <div class="container margin_80_55">
                    <div class="main_title_2">
                        <span><em></em></span>
                        <h2>Why Choose Panagea</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <a class="box_feat" href="#0">
                                <i class="pe-7s-medal"></i>
                                <h3>+ 1000 Customers</h3>
                                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <a class="box_feat" href="#0">
                                <i class="pe-7s-help2"></i>
                                <h3>H24 Support</h3>
                                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <a class="box_feat" href="#0">
                                <i class="pe-7s-culture"></i>
                                <h3>+ 575 Locations</h3>
                                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <a class="box_feat" href="#0">
                                <i class="pe-7s-headphones"></i>
                                <h3>Help Direct Line</h3>
                                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <a class="box_feat" href="#0">
                                <i class="pe-7s-credit"></i>
                                <h3>Secure Payments</h3>
                                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <a class="box_feat" href="#0">
                                <i class="pe-7s-chat"></i>
                                <h3>Support via Chat</h3>
                                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
        
                <div class="bg_color_1">
                    <div class="container margin_80_55">
                        <div class="main_title_2">
                            <span><em></em></span>
                            <h2>Our Origins and Story</h2>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        </div>
                        <div class="row justify-content-between">
                            <div class="col-lg-6 wow" data-wow-offset="150">
                                <figure class="block-reveal">
                                    <div class="block-horizzontal"></div>
                                    <img src="assets/img/about_1.jpg" class="img-fluid" alt=""/>
                                </figure>
                            </div>
                            <div class="col-lg-5">
                                <p>Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos <strong>scaevola probatus</strong>. Nam atqui intellegat ei, sed ex graece essent delectus. Autem consul eum ea. Duo cu fabulas nonumes contentiones, nihil voluptaria pro id. Has graeci deterruisset ad, est no primis detracto pertinax, at cum malis vitae facilisis.</p>
                                <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore <strong>percipitur definitiones</strong> ex, nihil utinam recusabo mel no. Dolores reprehendunt no sit, quo cu viris theophrastus. Sit unum efficiendi cu.</p>
                                <p><em>CEO Marc Schumaker</em></p>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
               
        
                <div class="container margin_80_55">
                    <div class="main_title_2">
                        <span><em></em></span>
                        <h2>Our founders</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div id="carousel" class="owl-carousel owl-theme">
                        <div class="item">
                            <a href="#0">
                                <div class="title">
                                    <h4>Julia Holmes<em>CEO</em></h4>
                                </div><img src="assets/img/1_carousel.jpg" alt=""/>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#0">
                                <div class="title">
                                    <h4>Lucas Smith<em>Marketing</em></h4>
                                </div><img src="assets/img/2_carousel.jpg" alt=""/>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#0">
                                <div class="title">
                                    <h4>Paul Stephens<em>Business strategist</em></h4>
                                </div><img src="assets/img/3_carousel.jpg" alt=""/>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#0">
                                <div class="title">
                                    <h4>Pablo Himenez<em>Customer Service</em></h4>
                                </div><img src="assets/img/4_carousel.jpg" alt=""/>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#0">
                                <div class="title">
                                    <h4>Andrew Stuttgart<em>Admissions</em></h4>
                                </div><img src="assets/img/5_carousel.jpg" alt=""/>
                            </a>
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
                   
                    <hr></hr>
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
    

export default About;
    