import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterOwner from '../components/FooterOwner';

function CreateNewOffice() {
    return(
		<div class="fixed-nav sticky-footer" id="page-top" >
			<Navbar />
				<div class="content-wrapper" style={{backgroundColor: '#707070'}}>
						<div class="container-fluid">
								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-file"></i>Basic info</h2>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Room's Name</label>
												<input type="text" class="form-control" placeholder="Hotel Mariott"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Function</label>
												<div class="styled-select">
													<select>
														<option>Tour</option>
														<option>Hotel</option>
														<option>Restaurant</option>
														<option>Bar</option>
													</select>
												</div>
											</div>
										</div>
									</div>
						
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<label>Description</label>
												<div class="editor"></div>
											</div>
										</div>
									</div>
							
									<div class="row">
										<div class="col-md-4">
											<div class="form-group">
												<label>Phone (Optional)</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label>Web site (Optional)</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label>Email (Optional)</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
									</div>
						
									<div class="row">
										<div class="col-md-4">
											<div class="form-group">
												<label>Facebook link (Optional)</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label>Twitter link (Optional)</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label>Google + (Optional)</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
									</div>
						
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<label>Photos</label>
												<form action="/file-upload" class="dropzone"></form>
											</div>
										</div>
									</div>
						
								</div>
					
						
								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-map-marker"></i>Location</h2>
									</div>
									<div class="row">
										{/* <div class="col-md-6">
											<div class="form-group">
												<label>Select City</label>
												<div class="styled-select">
												<select>
													<option>Miami</option>
													<option>New York</option>
													<option>Los Angeles</option>
													<option>San Francisco</option>
												</select>
												</div>
											</div>
										</div> */}
										<div class="col-md-6">
											<div class="form-group">
												<label>Address</label>
												<input type="text" class="form-control" placeholder="ex. 250, Fifth Avenue..."/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Latitude</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
									</div>
								
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Longitude</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
										{/* <div class="col-md-6">
											<div class="form-group">
												<label>State</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Zip Code</label>
												<input type="text" class="form-control"/>
											</div>
										</div> */}
									</div>
								</div>
					
								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-building"></i>Room Type</h2>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Type</label>
												<div class="styled-select">
												<select>
													<option>Single Room</option>
													<option>Double Room</option>
													<option>Suite Room</option>
												</select>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Capacity</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
									</div>
								
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Layout</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
									</div>		
								</div>

								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-tv"></i>Facility</h2>
									</div>
									<div class="row">
										<div class="col-md-12">
											<h6>Item</h6>
											<table id="pricing-list-container" style={{width:`100%`}}>
												<tr class="pricing-list-item">
													<td>
														<div class="row">
															<div class="col-md-4">
																<div class="form-group">
																	<input type="text" class="form-control" placeholder="Name"/>
																</div>
															</div>
															{/* <div class="col-md-4">
																<div class="form-group">
																	<input type="text" class="form-control" placeholder="Description"/>
																</div>
															</div> */}
															<div class="col-md-2">
																<div class="form-group">
																	<input type="text" class="form-control"  placeholder="Status"/>
																</div>
															</div>
															<div class="col-md-2">
																<div class="form-group">
																	<a class="delete" href="#"><i class="fa fa-fw fa-remove"></i></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
											</table>
											<a href="#0" class="btn_1 gray add-pricing-list-item"><i class="fa fa-fw fa-plus-circle"></i>Add Item</a>
											</div>
									</div>
									
								</div>

								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-clock-o"></i>Operational Times</h2>
									</div>
									<div class="row">
										<div class="col-md-2">
											<label class="fix_spacing">Monday</label>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Opening Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Closing Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
									</div>
								
									<div class="row">
										<div class="col-md-2">
											<label class="fix_spacing">Tuesday</label>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Opening Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Closing Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
									</div>
								
									<div class="row">
										<div class="col-md-2">
											<label class="fix_spacing">Wednesday</label>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Opening Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Closing Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
									</div>
								
									<div class="row">
										<div class="col-md-2">
											<label class="fix_spacing">Thursday</label>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Opening Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Closing Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
									</div>
								
									<div class="row">
										<div class="col-md-2">
											<label class="fix_spacing">Friday</label>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Opening Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
										<div class="col-md-5">
											<div class="form-group">
												<div class="styled-select">
												<select>
													<option>Closing Time</option>
													<option>Closed</option>
													<option>1 AM</option>
													<option>2 AM</option>
													<option>3 AM</option>
													<option>4 AM</option>
													<option>5 AM</option>
													<option>6 AM</option>
													<option>7 AM</option>
													<option>8 AM</option>
													<option>9 AM</option>
													<option>10 AM</option>
													<option>11 AM</option>
													<option>12 AM</option>	
													<option>1 PM</option>
													<option>2 PM</option>
													<option>3 PM</option>
													<option>4 PM</option>
													<option>5 PM</option>
													<option>6 PM</option>
													<option>7 PM</option>
													<option>8 PM</option>
													<option>9 PM</option>
													<option>10 PM</option>
													<option>11 PM</option>
													<option>12 PM</option>
												</select>
												</div>
											</div>
										</div>
									</div>
									
								</div>
					
						
								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-dollar"></i>Pricing</h2>
									</div>
									<div class="row">
										<div class="col-md-12">
											<h6>Item</h6>
											<table id="pricing-list-container" style={{width:`100%`}}>
												<tr class="pricing-list-item">
													<td>
														<div class="row">
															<div class="col-md-4">
																<div class="form-group">
																	<input type="text" class="form-control" placeholder="Title"/>
																</div>
															</div>
															{/* <div class="col-md-4">
																<div class="form-group">
																	<input type="text" class="form-control" placeholder="Description"/>
																</div>
															</div> */}
															<div class="col-md-2">
																<div class="form-group">
																	<input type="text" class="form-control"  placeholder="Price"/>
																</div>
															</div>
															<div class="col-md-2">
																<div class="form-group">
																	<a class="delete" href="#"><i class="fa fa-fw fa-remove"></i></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
											</table>
											<a href="#0" class="btn_1 gray add-pricing-list-item"><i class="fa fa-fw fa-plus-circle"></i>Add Item</a>
											</div>
									</div>
									
								</div>
					
								<p><a href="#0" class="btn_1 medium">Save</a></p>
						</div>
					
					</div>

					< FooterOwner />
				
					<a class="scroll-to-top rounded" href="#page-top">
						<i class="fa fa-angle-up"></i>
					</a>

					<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
								<button class="close" type="button" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
								</button>
							</div>
							<div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
							<div class="modal-footer">
								<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
								<a class="btn btn-primary" href="login.html">Logout</a>
							</div>
							</div>
						</div>
					</div>
			</div>
	);
}
    
    
export default CreateNewOffice;