import React, { useEffect } from 'react';
//import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from "react-router";
import { GET_DETAIL_ROOM, JWT_HEADER } from '../constants/urls'
import axios from 'axios';

function RoomDetail() {    
    const [room, setRoomDetail] = React.useState({detail_room: {}});
    const [isLoading, setIsLoading] = React.useState(true);

    
    let { room_id } = useParams();
    //console.log(room_id);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);
        fetchData(room_id);
        return () => {
          document.body.removeChild(script);
        }
    }, []);

    const fetchData = async (room_id) => {
        setIsLoading(true);
        await axios
          .get(GET_DETAIL_ROOM(room_id), {
            headers: {},
          })
          .then((res) => {
            setRoomDetail(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        setIsLoading(false);
      };

    return(
        
    <div class="datepicker_mobile_full">
        
        <div id="page" class="theia-exception">
            
            <div>
                <section class="hero_in hotels_detail">
                    <div class="wrapper">
                        <div class="container">
                            <h1 class="fadeInUp"><span></span>{room.detail_room.name}</h1>
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
                                <li><a href="#available">Available</a></li>
                                <li><a href="#facility">Facility</a></li>
                                <li><a href="#roomfunction">Function</a></li>
                                <li><a href="#operationaltimes">Operational</a></li>
                                <li><a href="#sidebar">Booking</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class="container margin_60_35">
                        <div class="row">
                            <div class="col-lg-8">
                                <section id="description">
                                    <h2>Description</h2>
                                    <p>{room.detail_room.description} <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                    <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                                    
                                    <hr/>
                                    
                                    <section id="available">
                                        <h3>Available Room</h3>
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
                                                    <ul>
                                                        <li><strong>Room's Size: </strong>88m2</li>
                                                        <li><strong>Capacity: </strong>30 orang</li>
                                                    </ul>
                                                    <p class="price">From <strong>$54</strong> /per hour</p>
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
                                                    <ul>
                                                        <li><strong>Room's Size: </strong>88m2</li>
                                                        <li><strong>Capacity: </strong>30 orang</li>
                                                    </ul>
                                                    <p class="price">From <strong>$54</strong> /per hour</p>
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
                                                    <ul>
                                                        <li><strong>Room's Size: </strong>88m2</li>
                                                        <li><strong>Capacity: </strong>30 orang</li>
                                                    </ul>
                                                    <p class="price">From <strong>$54</strong> /per hour</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </section>
                                    
                                    <section id="facility">
                                        <hr/>
                                        <h3>Facility</h3>
                                        <div id="instagram-feed-hotel" class="clearfix"></div>
                                        <hr/>
                                        <div class="row">
                                            <div class="col">
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
                                    </section>
                                    <section id="roomfunction">
                                        <hr/>
                                        <h3>Room Function</h3>
                                        <div id="instagram-feed-hotel" class="clearfix"></div>
                                        <hr/>
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
                                    </section>
                                    <section id="operationaltimes">
                                        <hr/>
                                        <h3>Operational Times</h3>
                                        <div id="instagram-feed-hotel" class="clearfix"></div>
                                        <hr/>
                                        <div class="row">
                                            <div class="col">
                                                <ul>
                                                    <li>Monday .................................................................................................................. <em>Pk09:00 - Pk17.00</em></li>
                                                    <li>Tuesday ................................................................................................................. <em>Pk09:00 - Pk17.00</em></li>
                                                    <li>Wednesday ........................................................................................................ <em>Pk09:00 - Pk17.00</em></li>
                                                    <li>Thursday .............................................................................................................. <em>Pk09:00 - Pk17.00</em></li>
                                                    <li>Friday ..................................................................................................................... <em>Pk09:00 - Pk17.00</em></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <hr/>
                                    <h3>Location</h3>
                                    <div id="map" class="map map_single add_bottom_30"></div>
                                    
                                </section>

                            </div>
                        
                        
                            <aside class="col-lg-4" id="sidebar">
                                <div class="box_detail booking">
                                    <div class="price">
                                        <span>Book a tour</span>
                                        <div></div>
                                        {/* <div class="score"><span>Booking Status<em>Can't Book</em></span></div> */}
                                    </div>

                                    <div class="form-group input-dates">
                                        <input class="form-control" type="text" name="dates" placeholder="When.."/>
                                        <i class="icon_calendar"></i>
                                    </div>

                                    <div class="form-group input-date">
                                        <input class="form-control" type="text" name="dates" placeholder="Starting time.."/>
                                    </div>

                                    <div class="form-group input-dates">
                                        <input class="form-control" type="text" name="dates" placeholder="Duration"/>
                                    </div>

                                    <div class="form-group clearfix">
                                        <div class="custom-select-form">
                                            <select class="wide">
                                                <option>Room Type</option>	
                                                <option>Single Room</option>
                                                <option>Double Room</option>
                                                <option>Suite Room</option>
                                            </select>
                                        </div>
                                    </div>
                                    <a href="cart-1.html" class=" add_top_30 btn_1 full-width purchase">Purchase</a>
                                    <a href="wishlist.html" class="btn_1 full-width outline wishlist"><i class="icon_heart"></i> Add to wishlist</a>
                                    <div class="text-center"><small>No money charged in this step</small></div>
                                </div>
                                {/* <ul class="share-buttons">
                                    <li><a class="fb-share" href="#0"><i class="social_facebook"></i> Share</a></li>
                                    <li><a class="twitter-share" href="#0"><i class="social_twitter"></i> Tweet</a></li>
                                    <li><a class="gplus-share" href="#0"><i class="social_googleplus"></i> Share</a></li>
                                </ul> */}
                            </aside>
                        </div>
                    
                </div>
                
            </div>
            
        </div>

        

        <Footer />

        </div>
        <div id="toTop"></div>

        {/* <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
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
            
        </div> */}
  
    </div>

    );
}
                        
export default RoomDetail;
            