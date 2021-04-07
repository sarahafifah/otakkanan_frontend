import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterOwner from '../components/FooterOwner';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import { CREATE_OFFICE } from "../constants/urls";

function CreateNewOffice() {
	const[facility, setFacility] = React.useState([
		{facility_name: '', facility_status: ''}
	])
	const [name, setName] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [latitude, setLatitude] = React.useState("");
	const [longitude, setLongitude] = React.useState("");
	const [capacity, setCapacity] = React.useState("");
	const [layout, setLayout] = React.useState("");
	const [room_type_name, setRoomTypeName] = React.useState("");
	const [room_function_name, setRoomFunctionName] = React.useState("");
	const [filename, setFilename] = React.useState("");
	const [facility_name, setFacilityName] = React.useState("");
	const [facility_status, setFacilityStatus] = React.useState("");
	const [regulation_name, setRegulationName] = React.useState("");
	const [day, setDay] = React.useState("");
	const [open_times, setOpenTimes] = React.useState("");
	const [close_times, setCloseTimes] = React.useState("");
	const [category_price_name, setCategoryPriceName] = React.useState("");
	const [price, setCPrice] = React.useState("");
	
	const [errorname, setErrorName] = React.useState("");
	const [erroraddress, setErrorAddress] = React.useState("");
	const [errordescription, setErrorDescription] = React.useState("");
	const [errorlatitude, setErrorLatitude] = React.useState("");
	const [errorlongitude, setErrorLongitude] = React.useState("");
	const [errorcapacity, setErrorCapacity] = React.useState("");
	const [errorlayout, setErrorLayout] = React.useState("");
	const [errorroom_type_name, setErrorRoomTypeName] = React.useState("");
	const [errorroom_function_name, setErrorRoomFunctionName] = React.useState("");
	const [errorfilename, setErrorFilename] = React.useState("");
	const [errorfacility_name, setErrorFacilityName] = React.useState("");
	const [errorfacility_status, setErrorFacilityStatus] = React.useState("");
	const [errorregulation_name, setErrorRegulationName] = React.useState("");
	const [errorday, setErrorDay] = React.useState("");
	const [erroropen_times, setErrorOpenTimes] = React.useState("");
	const [errorclose_times, setErrorCloseTimes] = React.useState("");
	const [errorcategory_price_name, setErrorCategoryPriceName] = React.useState("");
	const [errorprice, setErrorPrice] = React.useState("");

	const [loading, setLoading] = React.useState(false);
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	
	const handleChangeInput = (index, event) => {
		console.log(index, event.target.name)
		const values = [...facility];
		values[index][event.target.name] = event.target.value
		setFacility(values);
	}
	const handleAddFields = () => {
		setFacility([...facility, {facility_name: '', facility_status: ''}])
	}
	const handleRemoveFields = (index) => {
		const values = [...facility];
		values.splice(index, 1);
		setFacility(values);
	}
	const _onSubmit = () => {
		setLoading(true);
		axios
			.post(CREATE_OFFICE, {
			name: name,
			address: address,
			description: description,
			latitude: latitude,
			longitude: longitude,
			capacity: capacity,
			layout: layout,
			room_type_name: room_type_name,
			room_function_name: room_function_name,
			filename: filename,
			facility_name: facility_name,
			facility_status: facility_status,
			regulation_name: regulation_name,
			day: day,
			open_times: open_times,
			close_times: close_times,
			category_price_name: category_price_name,
			price: price
			})
			.then((res) => {
			setIsLoggedIn(true);
			setLoading(false);
			window.location = "/ownersroom	";
			})
			.catch((err) => {
			console.log(err.response.data);
			if (err.response.data) {
				setErrorName(err.response.data.user?.name ? err.response.data.user.name : "");
				setErrorAddress(err.response.data.user?.address ? err.response.data.user.address : "");
				setErrorDescription(err.response.data.user?.description ? err.response.data.user.description : "");
				setErrorLatitude(err.response.data.user?.latitude ? err.response.data.user.latitude : "");
				setErrorLongitude(err.response.data.user?.longitude ? err.response.data.user.longitude : "");
				setErrorCapacity(err.response.data.user?.capacity ? err.response.data.user.capacity : "");
				setErrorLayout(err.response.data.user?.layout ? err.response.data.user.layout : "");
				setErrorRoomTypeName(err.response.data.user?.room_type_name ? err.response.data.user.room_type_name : "");
				setErrorRoomFunctionName(err.response.data.user?.room_function_name ? err.response.data.user.room_function_name : "");
				setErrorFilename(err.response.data.user?.filename ? err.response.data.user.filename : "");
				setErrorFacilityName(err.response.data.user?.facility_name ? err.response.data.user.facility_name : "");
				setErrorFacilityStatus(err.response.data.user?.facility_status ? err.response.data.user.facility_status : "");
				setErrorRegulationName(err.response.data.user?.regulation_name ? err.response.data.user.regulation_name : "");
				setErrorDay(err.response.data.user?.day ? err.response.data.user.day : "");
				setErrorOpenTimes(err.response.data.user?.open_times ? err.response.data.user.open_times : "");
				setErrorCloseTimes(err.response.data.user?.close_times ? err.response.data.user.close_times : "");
				setErrorCategoryPriceName(err.response.data.user?.category_price_name ? err.response.data.user.category_price_name : "");
				setErrorPrice(err.response.data.user?.price ? err.response.data.user.price : "");
			}
			setLoading(false);
			});
		};

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
														<div class="form-group">
															{facility.map((inputField, index) => (
																<div class="row" key={index}>
																<div class="col-md-4">
																	<input 
																		name="facility_name"
																		type="text" 
																		class="form-control" 
																		placeholder="Name"
																		value={inputField.facility_name}
																		onChange={event => handleChangeInput(index, event)}
																	/>
																</div>
																<div class="col-md-2">
																	<input 
																		name="facilityStatus"
																		type="text" 
																		class="form-control" 
																		placeholder="Status"
																		value={inputField.facilityStatus}
																		onChange={event => handleChangeInput(index, event)}
																	/>
																</div>
																<div class="col-md-2">
																	<IconButton onClick={() => handleRemoveFields(index)}>
																		<RemoveIcon />
																	</IconButton>
																</div>
																</div>
															)) }
															
														</div>
													</td>
												</tr>
											</table>
											<button class="btn_1 gray add-pricing-list-item" onClick={() => handleAddFields()}><i class="fa fa-fw fa-plus-circle"></i>Add Item</button>
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
								<p><button  
								disabled={loading}
								className="btn_1 medium"
								variant="primary"
								block
								onClick={_onSubmit}>Create Office
								</button></p>
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