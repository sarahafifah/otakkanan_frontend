import React, { useEffect } from 'react';
//import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { GET_DETAIL_ROOM, STORAGE_URL } from '../constants/urls'
import axios from 'axios';

function RoomDetail() {    
    const [room, setRoomDetail] = React.useState({detail_room: {}});
    const [room_type, setRoomType] = React.useState([]);
    const [facility, setFacility] = React.useState([]);
    const [gallery, setGallery] = React.useState([]);
    const [room_function, setRoomFunction] = React.useState([]);
    const [operational_times, setOperationalTimes] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    
    let { room_id } = useParams();
    //console.log(room_id);

    useEffect(() => {

        fetchData(room_id);
  
    }, []);

    const fetchData = async (room_id) => {
        setIsLoading(true);
        await axios
          .get(GET_DETAIL_ROOM(room_id), {
            headers: {},
          })
          .then((res) => {
            console.log(res.data);
            setRoomDetail(res.data);
            setRoomType(res.data.detail_room.room_type);
            setFacility(res.data.detail_room.facility);
            setGallery(res.data.detail_room.gallery);
            setRoomFunction(res.data.detail_room.room_function);
            setOperationalTimes(res.data.detail_room.operational_times);
            
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
                            
                            {gallery.map(item => (
                                <Link to={STORAGE_URL + item.filename} class="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</Link>
                            ))}
                        </span>
                    </div>
                </section>
                

                <div class="bg_color_1">
                    <nav class="secondary_nav sticky_horizontal">
                        <div class="container">
                            <ul class="clearfix">
                                <li><a href="#description" class="active">Description</a></li>
                                <li><a href="#location" class="active">Locations</a></li>
                                <li><a href="#roomtype">RoomType</a></li>
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
                                    <p>{room.detail_room.description}</p>
                                    <hr/>
                                    <h2 id="location">Location</h2>
                                    <p>{room.detail_room.address}</p>
                                    {/* <div id="map" class="map map_single add_bottom_30"></div> */}
                                    <hr/>   
                                    
                                    <section id="roomtype">
                                        <h3>Room Type</h3>
                                        <hr/>
                                        {room_type.map(item => (
                                            <div class="room_type first">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <img src={STORAGE_URL + item.layout} class="img-fluid" alt="" width="150" height="150"/>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <h4>{item.name}</h4>
                                                        <ul>
                                                            <li><strong>Capacity: </strong>{item.capacity}</li>
                                                        </ul>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </section>
                                    
                                    <section id="facility">
                                        <hr/>
                                        <h3>Facility</h3>
                                        <hr/>
                                        <div class="row">
                                            <div class="col">
                                                <ul class="hotel_facilities">
                                                    {facility.map(item => (
                                                        <li><img src="" alt=""/>{item.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="roomfunction">
                                        <hr/>
                                        <h3>Room Function</h3>
                                        <hr/>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <ul class="bullets">
                                                    {room_function.map(item => (
                                                        <li><img src="" alt=""/>{item.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="operationaltimes">
                                        <hr/>
                                        <h3>Operational Times</h3>
                                        
                                        <hr/>
                                        
                                        <div class="row">
                                            <div class="col">
                                                <ul>
                                                
                                                {operational_times.map(item => (
                                                    <li>{item.day} .................................................................................................................. <em>Pk{item.open_times} - Pk{item.close_times}</em></li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    
                                </section>

                            </div>
                        
                        
                            <aside class="col-lg-4" id="sidebar">
                                
                                    

                                    <div class="form-group input-dates">
                                    <div class="header_box version_2">
										<h2>Booking</h2>
									</div>
                                    <input class="form-control" type="text" name="dates" placeholder="When.."/>
                                        
                                    </div>

                                    <div class="form-group input-date">
                                        <input class="form-control" type="text" name="dates" placeholder="Starting time.."/>
                                    </div>

                                    <div class="form-group input-dates">
                                        <input class="form-control" type="text" name="dates" placeholder="Duration"/>
                                    </div>

                                    <div class="form-group">
                                        <select class="form-control">
                                            <option>Room Type</option>	
                                            <option>Single Room</option>
                                            <option>Double Room</option>
                                            <option>Suite Room</option>
                                        </select>
                                    </div>

                                    
                                    
                                        
                                    <a href="cart-1.html" class=" add_top_30 btn_1 full-width purchase">Purchase</a>
                                    <a href="wishlist.html" class="btn_1 full-width outline wishlist"><i class="icon_heart"></i> Add to wishlist</a>
                                    <div class="text-center"><small>No money charged in this step</small></div>
                                
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
            