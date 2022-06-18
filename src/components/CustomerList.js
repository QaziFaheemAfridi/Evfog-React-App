import React from 'react';
// import './css/custom.css';
// import './css/layout-dark.css';
// import './css/layout-rtl.css';
// import './css/style.css';


export const CustomerList = () => {
    return (
        <div className="pcoded-main-container">
            <div className="pcoded-content">
                <div className="page-wrapper">


                    {/* <!-- [ Main Content ] start -->
                <!-- [ Main Content ] start --> */}
                    <div className="row add-customer-page">

                        {/* <!-- amount start --> */}
                        <div className="col-sm-12" style={{ padding: "0 19px" }}>
                            <div className="data-toggle-panel add-customer">
                                <div className="table-header main-header mb-0">
                                    <div className="row">
                                        <ul className="col-sm-8 ">

                                            <li className="nav-item dropdown ml-2 tab1">
                                                <a className="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Private Customer
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item orderinfoBtn" href="add-customer.html">Private
                                                        Customer </a>
                                                    <a className="dropdown-item" href="business-customer.html">Business
                                                        Customer</a>
                                                    <a className="dropdown-item" href="reseller-partner.html">Reseller
                                                        Partner</a>
                                                    <a className="dropdown-item" href="distributor-partner.html">Distributor
                                                        Partner</a>

                                                </div>
                                            </li>



                                            <li className="tab3 tab-list">
                                                <a href="customer-list.html"> View List</a>
                                            </li>


                                        </ul>
                                        <ul className="col-sm-4 text-right">

                                            <li className="ShowProfileLi">
                                                <a href="#!" title="View Profile" className="ShowProfile"> <i
                                                    className="feather icon-info"></i></a>
                                            </li>
                                            {/* <!--  <li>
                                                <a href="#!" title="Expend" className="ExpendBtn">  <i className="feather icon-minimize-2"></i></a>
                                            </li> --> */}

                                        </ul>
                                    </div>
                                </div>
                                <div className="row pl-3  PrivateCustomer  customerInfo">
                                    <div className="col-sm-8 pl-0 PrivateCustomer-data  col-sm-9  cust-infoSide" >
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="b-t-name"
                                                            placeholder="SE-0000000001" readonly="" />
                                                    </div>
                                                    <div className="row">

                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="Credit Limit " readonly="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="Limit Amount" maxlength="11" />
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group custom-select-ctrl">
                                                        <select className="js-example-placeholder-multiple">
                                                            <option value="AL">Security ID</option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">Social
                                                                Security Number</option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">Date of
                                                                Birth</option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">
                                                                Organaization Number</option>

                                                        </select>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="Mobile Number" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="b-t-name"
                                                            placeholder="Security ID" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="b-t-name"
                                                            placeholder="Website" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="b-t-name"
                                                            placeholder="Customer Name" maxlength="50" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="b-t-name"
                                                            placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">

                                                    <div className="form-group custom-select-ctrl">
                                                        <select className="js-example-placeholder-multiple">
                                                            <option value="AL">Email Campaign</option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">Yes
                                                            </option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">No
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>




                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="b-t-name"
                                                            placeholder="Street / Billing Address" />
                                                    </div>
                                                    <div className="row">

                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="Postal Code" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="City Name" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">

                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="State Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-7">
                                                            <div className="form-group custom-select-ctrl fill">
                                                                <select className="js-example-placeholder-multiple"
                                                                    id="SelectVat-Country">
                                                                    <option value="AL">Select Country</option>
                                                                    <option value="at">AT-Austria</option>

                                                                    <option value="be">BE-Belgium</option>

                                                                    <option value="bg">BG-Bulgaria</option>

                                                                    <option value="cy">CY-Cyprus</option>

                                                                    <option value="cz">CZ-Czech Republic</option>

                                                                    <option value="de">DE-Germany</option>

                                                                    <option value="dk">DK-Denmark</option>

                                                                    <option value="ee">EE-Estonia</option>

                                                                    <option value="el">EL-Greece</option>

                                                                    <option value="es">ES-Spain</option>

                                                                    <option value="fi">FI-Finland</option>

                                                                    <option value="fr">FR-France </option>

                                                                    <option value="hr">HR-Croatia</option>

                                                                    <option value="hu">HU-Hungary</option>

                                                                    <option value="ie">IE-Ireland</option>

                                                                    <option value="it">IT-Italy</option>

                                                                    <option value="lt">LT-Lithuania</option>

                                                                    <option value="lu">LU-Luxembourg</option>

                                                                    <option value="lv">LV-Latvia</option>

                                                                    <option value="mt">MT-Malta</option>

                                                                    <option value="nt">NL-The Netherlands</option>

                                                                    <option value="pl">PL-Poland</option>

                                                                    <option value="pt">PT-Portugal</option>

                                                                    <option value="ro">RO-Romania</option>

                                                                    <option value="se">SE-Sweden</option>

                                                                    <option value="si">SI-Slovenia</option>

                                                                    <option value="sk">SK-Slovakia</option>

                                                                    <option value="xi">XI-Northern Ireland</option>
                                                                    <option value="othercountry">Other Country</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="col-sm-5">
                                                            <div className="form-group" style={{top:"-5px"}}>
                                                                <div className="switch switch-success d-inline m-r-10">
                                                                    <input type="checkbox" id="switch-s-1" />
                                                                    <label for="switch-s-1" className="cr"></label>
                                                                </div>
                                                                <label>Add VAT</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">

                                                        <div className="col-sm-12 ">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Reference Name" id="b-t-name" />

                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 ">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Email Address " id="b-t-name" />

                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Mobile Number" id="b-t-name" />

                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Telephone Number" id="b-t-name" />

                                                            </div>
                                                        </div>


                                                        <div className="col-sm-6 otherdis">
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="customRadio1" name="customRadio"
                                                                    className="custom-control-input" />
                                                                <label className="custom-control-label" for="customRadio1">Price
                                                                    Excluding VAT</label>
                                                            </div>

                                                        </div>

                                                        <div className="col-sm-6 otherdis">
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="customRadio2" name="customRadio"
                                                                    className="custom-control-input" />
                                                                <label className="custom-control-label" for="customRadio2">Price
                                                                    Included VAT</label>
                                                            </div>


                                                        </div>



                                                    </div>



                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="custom-control custom-checkbox mb-3">
                                                        <input type="checkbox" className="custom-control-input"
                                                            id="customControlValidation1" required="" style={{ height: "auto" }} />
                                                        <label className="custom-control-label"
                                                            for="customControlValidation1">Same as billing address</label>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 ">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="Street / Delivery Address" />
                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div className="row">

                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="Postal Code" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="City Name" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">

                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="State Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name"
                                                                    placeholder="Country Name" />
                                                            </div>
                                                            <div className="form-group">
                                                                <textarea className="form-control" placeholder="Message "
                                                                    id="Address" rows="4"></textarea>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group custom-select-ctrl">
                                                                <select className="js-example-placeholder-multiple"
                                                                    id="selectDIS">
                                                                    <option value="AL">Select Discount</option>
                                                                    <option value="fivdis">Discount 5 % </option>
                                                                    <option value="tendis">Discount 10 % </option>
                                                                    <option value="fivtindis">Discount 15 % </option>
                                                                    <option value="twidis">Discount 20 % </option>
                                                                    <option value="otherdis">Other</option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 pl-0 box otherdis">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="b-t-name" />
                                                                <p className="input-pcnt">%</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-7 pr-0">
                                                            <p className="mb-0">Find SNI Branch Code
                                                                <b><a target="_blank"
                                                                    href="https://sni2007.scb.se/default.asp"> Click
                                                                    Here </a> </b>
                                                            </p>


                                                        </div>

                                                        <div className="col-sm-5">
                                                            <p className="mb-0">
                                                                <b><a target="_blank"
                                                                    href="https://sni2007.scb.se/_pdf/180108alfabetisksni2007.pdf">
                                                                    Download PDF </a> </b>
                                                            </p>


                                                        </div>

                                                        <div className="col-sm-12 mt-3">
                                                            <div className="form-group fill">
                                                                <textarea className="form-control"
                                                                    placeholder="Branch code description" id="Address"
                                                                    rows="3"></textarea>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>



                                                <div className="col-sm-4">
                                                    <div className="form-group custom-select-ctrl">
                                                        <select className="js-example-placeholder-multiple" id="SelectCurrancy">
                                                            <option value="SEK">Select Currency</option>
                                                            <option value="SEK">SEK Swedish Krona</option>
                                                            <option value="NOK">NOK Danish Krone </option>
                                                            <option value="DKK">DKK Danish Krone </option>
                                                            <option value="EUR">EUR Euro </option>
                                                            <option value="USD">USD USA Dollar </option>
                                                            <option value="GBP">GBP British Pound </option>
                                                            <option value="GBP">Other </option>



                                                        </select>
                                                    </div>

                                                    <div className="form-group custom-select-ctrl">
                                                        <select className="js-example-placeholder-multiple">
                                                            <option value="AL">Payment Terms</option>
                                                            <option value="Cash">Cash Payment</option>
                                                            <option value="Card">Card Payment </option>
                                                            <option value="Bank">Bank Transfer </option>
                                                            <option value="Finance">Bank Finance </option>
                                                            <option value="10days">0 Day Payment</option>
                                                            <option value="10days">10 Days Payment</option>
                                                            <option value="10days">14 Days Payment</option>
                                                            <option value="10days">20 Days Payment</option>
                                                            <option value="10days">30 Days Payment</option>
                                                            <option value="10days">45 Days Payment</option>
                                                            <option value="10days">60 Days Payment</option>
                                                            <option value="10days">90 Days Payment</option>
                                                            <option value="10days">Swish</option>
                                                            <option value="10days">Klarna</option>



                                                        </select>
                                                    </div>

                                                    <div className="form-group custom-select-ctrl">
                                                        <select className="js-example-placeholder-multiple">
                                                            <option value="AL">Delivery Terms</option>
                                                            <option value="DT">Home Delivery</option>
                                                            <option value="DT">Free Delivery </option>
                                                            <option value="DT">Pick It Up Warehouse</option>
                                                            <option value="DT">PostNord</option>
                                                            <option value="DT">FedEx</option>
                                                            <option value="DT">TNT</option>
                                                            <option value="DT">UPS</option>
                                                            <option value="DT">Pick It Up Service Point</option>
                                                            <option value="DT">Other Delivery</option>

                                                        </select>
                                                    </div>
                                                    <div className="form-group Delivery box">
                                                        <textarea className="form-control" placeholder="Delivery Message"
                                                            id="Address" rows="4"></textarea>
                                                    </div>
                                                    <div className="form-group Note box">
                                                        <textarea className="form-control" placeholder="Delivery Note"
                                                            id="Address" rows="4"></textarea>
                                                    </div>
                                                    <div className="form-group Comment box">
                                                        <textarea className="form-control" placeholder="Customer Comments"
                                                            id="Address" rows="4"></textarea>
                                                    </div>

                                                    <div className="form-group row">

                                                        <div className="col-sm-6">
                                                            <label>Active Date</label>
                                                            <input type="date" className="form-control" value="2021-01-01" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label>Deactive Date</label>
                                                            <input type="date" className="form-control deactive-date"
                                                                value="2021-01-01" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group fill">
                                                        <textarea className="form-control" placeholder="Active Status : "
                                                            id="Address" rows="4"></textarea>
                                                    </div>

                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                    <div className="col-sm-3 brd-red cust-profileSide" style={{ display: "none" }}>
                                        <div className="profile">
                                            <i className="feather icon-user"></i>

                                        </div>
                                        <div className="content-section">

                                            <h5 className="mb-1 text-center">James Allen</h5>
                                            <p className="mb-0 text-muted text-center">abc@exmaple.com</p>
                                            <p className="mb-2 text-muted text-center"> 2021-10-02</p>
                                            <p className="text-center" style={{ display: "none" }}> <span
                                                className="badge badge-success bg-custom-green" style={{ fontSize: "15px" }}>
                                                Active</span></p>
                                            <p className="text-center"> <span className="badge badge-danger bg-custom-red"
                                                style={{ fontSize: "15px" }}> De-active</span></p>
                                            <p className="text-center">
                                                <div className="form-group fill">
                                                    <textarea className="form-control" placeholder="Reason : " id="Address"
                                                        rows="4"></textarea>
                                                </div>
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-sm-3 vat-content PrivateCustomer-data">
                                        <form action="">

                                            <div className="row">
                                                <div className="col-sm-7">
                                                    <div className="form-group custom-select-ctrl fill">
                                                        <select className="js-example-placeholder-multiple">
                                                            <option value="AL">Select VAT</option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">VAT
                                                                Purchases 20-24</option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">VAT
                                                                Sales or Withdrawal 05-08</option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">VAT VAT
                                                                on Import 50</option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">Other
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="form-group custom-select-ctrl fill" id="selectVat">
                                                        <select className="js-example-placeholder-multiple">
                                                            <option value="AL">VAT %</option>
                                                            <option value="Valuesix" className="private-cust-btn">6 %</option>
                                                            <option value="Valuetwelve" className="private-cust-btn">12 %
                                                            </option>
                                                            <option value="Valuetfive" className="private-cust-btn">25 %
                                                            </option>
                                                            <option value="PrivateCustomer" className="private-cust-btn">Other
                                                            </option>
                                                        </select>
                                                    </div>


                                                </div>

                                            </div>
                                        </form>
                                        <div className="row" id="row_dim">


                                            <div className="col-sm-8">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="b-t-name"
                                                        placeholder="Manaual VAT %" />
                                                </div>
                                            </div>

                                            <div className="col-sm-4 box Valuesix">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="b-t-name"
                                                        placeholder="VAT Value 6%" readonly="" />
                                                </div>
                                            </div>

                                            <div className="col-sm-4 box Valuetwelve">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="b-t-name"
                                                        placeholder="VAT Value 12%" readonly="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4 box Valuetfive">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="b-t-name"
                                                        placeholder="VAT Value 25%" readonly="" />
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="card">

                                                    <div className="card-body pl-0">
                                                        <form action="assets/json/file-upload.php" className="dropzone">
                                                            <div className="fallback">
                                                                <input name="file" type="file" multiple />
                                                            </div>
                                                        </form>
                                                        <div className="text-center m-t-20">
                                                            <button
                                                                className="btn btn-outline-primary btn-height-34 btn-pd-5 ">Upload
                                                                Now</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 px-0 pr-0 mt-4 text-right">
                                                        <div
                                                            className="btn btn-outline-primary next-step w-100 btn-height-34 btn-pd-5">
                                                            Save & Exit</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                </div>

                                <div className="invoiceInfo mt-5 pt-5 text-center" style={{ display: "none" }}>
                                    <i className=" feather icon-check-circle mb-2 text-custom-blue"
                                        style={{ fontSize: "160px" }}></i>
                                    <h2>Registration Done! </h2>
                                    <a href=""> Continue to add more customers</a>
                                </div>

                            </div>


                        </div>

                    </div>
                    {/* <!-- Table Content  --> */}
                    {/* <!-- Filter --> */}

                    <div className="col-sm-9 col-sm-12  table-right">

                    </div>
                </div>
            </div>

        </div>
    )
}
