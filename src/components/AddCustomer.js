import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useFormik, Field } from 'formik';

const AddCustomer = () => {

  const deliveryAddressref = React.useRef();
  const postalcoderef = React.useRef();
  const citynameref = React.useRef();
  const statenameref = React.useRef();




  const onChangeBillingtodelivery = (e) => {
    if (e.target.checked) {

      deliveryAddressref.current.value = formik.values.billingAddress;
      postalcoderef.current.value = formik.values.billingPostalCode;
      citynameref.current.value = formik.values.billingCityName;
      statenameref.current.value = formik.values.billingStateName;

    }
    else {
      deliveryAddressref.current.value = '';
      postalcoderef.current.value = '';
      citynameref.current.value = '';
      statenameref.current.value = '';
    }
  }



  const formik = useFormik({
    initialValues: {
      "customerIdentificationNumber": "string",
      "creditLimit": "string",
      "limitAmount": "string",
      "customerName": "string",
      "billingAddress": "string",
      "billingPostalCode": "string",
      "billingCityName": "string",
      "billingStateName": "string",
      "deliveryAddress": "string",
      "deliveryPostalCode": "string",
      "deliveryCityName": "string",
      "deliveryStateName": "string",
      "deliveryCountry": "string",
      "customerEmailAddress": "string",
      "customerMobilePhone": "string",
      "customerTelephone": "string",
      "priceWithVAT": true,
      "emailCampaign": true,
      "addVAT": true,
      "securityID": "string",
      "activeDate": "2022-06-13T00:14:05.593Z",
      "deactiveDate": "2022-06-13T00:14:05.593Z",
      "activeStatus": "string",
      "website": "string",
      "message": "string",
      "manualVATPercent": "string",
      "branchCodeDescription": "string",
      "contactPersonName": "string",
      "contactPersonEmailAddress": "string",
      "contactPersonMobileNumber": "string",
      "contactPersonTelephoneNumber": "string",
      "customerTypeId": 1,
      "billingCountryId": 1,
      "currencyID": 1,
      "paymentTermID": 1,
      "deliveryTermID": 1,
      "vatid": 1,
      "vatPercentID": 1,
      "securityIdentitficationTypeID": 1
    },
    onSubmit: values => {
      //   alert(JSON.stringify(values));
      fetch('https://localhost:7262/api/Customer/CreateCustomer', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(values)
      })
        .then(r => r.json()).then(res => {
          if (!res) {
            alert("Customer Created Successfully");
          }
        })

    },
  });

  return (
    <div>
      <form className="row g-3" style={{ margin: "3" }} onSubmit={formik.handleSubmit}>
        <div className="col" >
          {/* <label for="staticEmail2" className="visually-hidden">Email</label>
                        <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com"/> */}
          <input type="text" className="form-control" placeholder="SE-0000000001" readOnly></input>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='creditlimit'
                  name='creditlimit'
                  type="text"
                  className="form-control"
                  placeholder="Credit Limit"
                  onChange={formik.handleChange}
                  value={formik.values.CreditLimit}
                >

                </input>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='limitamount'
                  name='limitamount'
                  type="text"
                  className="form-control"
                  placeholder="Limit Amount"
                  onChange={formik.handleChange}
                  value={formik.values.LimitAmount}
                >

                </input>
              </div>
            </div>
          </div>
          <input
            id='customername'
            name='customername'
            type="text"
            className="form-control"
            placeholder="Customer Name"
            onChange={formik.handleChange}
            value={formik.values.CustomerName}
          >

          </input>
          <textarea
            id='billingAddress'
            name='billingAddress'
            type="text"
            className="form-control"
            placeholder="Street / Billing Address"
            onChange={formik.handleChange}
            value={formik.values.billingAddress}
          >

          </textarea>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='billingPostalCode'
                  name='billingPostalCode'
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  onChange={formik.handleChange}
                  value={formik.values.billingPostalCode}
                >

                </input>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='billingCityName'
                  name='billingCityName'
                  type="text"
                  className="form-control"
                  placeholder="City Name"
                  onChange={formik.handleChange}
                  value={formik.values.billingCityName}
                >

                </input>
              </div>
            </div>
          </div>
          <input
            id='billingStateName'
            name='billingStateName'
            type="text"
            className="form-control"
            placeholder="State Name"
            onChange={formik.handleChange}
            value={formik.values.billingStateName}
          >

          </input>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                <select className="js-example-placeholder-multiple" id="SelectVat-Country" className="form-control">
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
            <div className="col-sm-6">
              <div className='form-group switch switch-success d-inline m-r-10'>
                <label>
                  <input
                    id="addVAT"
                    name="addVAT"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.addVAT}
                  />
                  Add Vat
                </label>
              </div>
            </div>
          </div>
          <input
            id='referencename'
            name='referencename'
            type="text"
            className="form-control"
            placeholder="Reference Name"
            onChange={formik.handleChange}
            value={formik.values.refrencename}
          >

          </input>
          <input
            id='customerEmailAddress'
            name='customerEmailAddress'
            type="text"
            className="form-control"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.customerEmailAddress}
          >

          </input>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='contactPersonMobileNumber'
                  name='contactPersonMobileNumber'
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                  onChange={formik.handleChange}
                  value={formik.values.contactPersonMobileNumber}
                >

                </input>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='customerTelephone'
                  name='customerTelephone'
                  type="text"
                  className="form-control"
                  placeholder="Telephone Number"
                  onChange={formik.handleChange}
                  value={formik.values.customerTelephone}
                >

                </input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                {/* <input
                  id='priceexcludingvat'
                  name='priceexcludingvat'
                  type="text"
                  className="form-control"
                  placeholder="Price Excluding VAT"
                  onChange={formik.handleChange}
                  value={formik.values.priceWithVAT}
                >

                </input> */}
                <label>
                  <input
                    id="priceWithVAT"
                    name="priceWithVAT"
                    type="radio"
                    onChange={formik.handleChange}
                    //value={formik.values.off}
                    value={false}
                  />
                  Price Excluding VAT
                </label>

              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                {/* <input
                  id='priceincludingvat'
                  name='priceincludingvat'
                  type="text"
                  className="form-control"
                  placeholder="Price Including VAT"
                  onChange={formik.handleChange}
                  value={formik.values.priceWithVAT}
                >

                </input> */}
                 <label>
                  <input
                    id="priceWithVAT"
                    name="priceWithVAT"
                    type="radio"
                    onChange={formik.handleChange}
                    //value={formik.values.off}
                    value={true}
                  />
                  Price Including VAT
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <select className="js-example-placeholder-multiple" className='form-control'>
            <option value="AL">Security ID</option>
            <option value="PrivateCustomer" className="private-cust-btn">Social
              Security Number</option>
            <option value="PrivateCustomer" className="private-cust-btn">Date of
              Birth</option>
            <option value="PrivateCustomer" className="private-cust-btn">
              Organaization Number</option>

          </select>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='customerMobilePhone'
                  name='customerMobilePhone'
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                  onChange={formik.handleChange}
                  value={formik.values.customerMobilePhone}
                >

                </input>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='customerTelephone'
                  name='customerTelephone'
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={formik.handleChange}
                  value={formik.values.customerTelephone}
                >

                </input>
              </div>
            </div>
          </div>
          <input
            id='customerEmailAddress'
            name='customerEmailAddress'
            type="text"
            className="form-control"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.customerEmailAddress}
          >

          </input>
          {/* <input type="text" className="form-control" placeholder="Check box for same as billing Address"></input> */}
          <label>
            <input
              id="sameasbillingaddress"
              name="sameasbillingaddress"
              type="checkbox"
              //onChange={formik.handleChange}
              onChange={(e) => onChangeBillingtodelivery(e)}
              value={formik.values.sameasbillingaddress}
            />
            Same as billing address
          </label>
          <input
            id='deliveryAddress'
            name='deliveryAddress'
            type="text"
            className="form-control"
            placeholder="Street / Deivery Address"
            onChange={formik.handleChange}
            //value={formik.values.deliveryAddress}
            ref={deliveryAddressref}
          >

          </input>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='deliveryPostalCode'
                  name='deliveryPostalCode'
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  onChange={formik.handleChange}
                  //value={formik.values.deliveryPostalCode}
                  ref={postalcoderef}
                >

                </input>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                <input
                  id='deliveryCityName'
                  name='deliveryCityName'
                  type="text"
                  className="form-control"
                  placeholder="City Name"
                  onChange={formik.handleChange}
                  //value={formik.values.deliveryCityName}
                  ref={citynameref}
                >

                </input>
              </div>
            </div>
          </div>
          <input
            id='deliveryStateName'
            name='deliveryStateName'
            type="text"
            className="form-control"
            placeholder="State Name"
            onChange={formik.handleChange}
            //value={formik.values.deliveryStateName}
            ref={statenameref}
          >

          </input>
          <input
            id='deliveryCountry'
            name='deliveryCountry'
            type="text"
            className="form-control"
            placeholder="Country Name"
            onChange={formik.handleChange}
            value={formik.values.deliveryCountry}
          >

          </input>
          <textarea
            id='message'
            name='message'
            type="text"
            className="form-control"
            placeholder="Message"
            onChange={formik.handleChange}
            value={formik.values.message}
          >

          </textarea>
          <select className="js-example-placeholder-multiple"
            id="selectDIS" className='form-control'>
            <option value="AL">Select Discount</option>
            <option value="fivdis">Discount 5 % </option>
            <option value="tendis">Discount 10 % </option>
            <option value="fivtindis">Discount 15 % </option>
            <option value="twidis">Discount 20 % </option>
            <option value="otherdis">Other</option>
          </select>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                {/* <input type="text" className="form-control" placeholder="Postal Code"></input> */}
                <p className="mb-0">Find SNI Branch Code
                  <b><a target="_blank" href="https://sni2007.scb.se/default.asp"> Click Here </a> </b></p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                {/* <input type="text" className="form-control" placeholder="City Name"></input> */}
                <p className="mb-0">
                  <b><a target="_blank" href="https://sni2007.scb.se/_pdf/180108alfabetisksni2007.pdf"> Download PDF  </a> </b></p>
              </div>
            </div>
          </div>
          <textarea
            id='branchCodeDescription'
            name='branchCodeDescription'
            type="text"
            className="form-control"
            placeholder="Branch Code Description"
            onChange={formik.handleChange}
            value={formik.values.branchCodeDescription}
          >

          </textarea>

        </div>
        <div className="col">
          <input
            id='securityID'
            name='securityID'
            type="text"
            className="form-control"
            placeholder="Security ID"
            onChange={formik.handleChange}
            value={formik.values.securityID}
          >

          </input>
          <input
            id='website'
            name='website'
            type="text"
            className="form-control"
            placeholder="Website"
            onChange={formik.handleChange}
            value={formik.values.website}
          >

          </input>
          <select className="js-example-placeholder-multiple" className="form-control">
            <option value="AL">Email Campaign</option>
            <option value="PrivateCustomer" className="private-cust-btn">Yes
            </option>
            <option value="PrivateCustomer" className="private-cust-btn">No
            </option>

          </select>
          {/* <select className="js-example-placeholder-multiple" id="SelectCurrancy" className="form-control">
            <option value="SEK">Select Currency</option>
            <option value="SEK">SEK Swedish Krona</option>
            <option value="NOK">NOK Danish Krone </option>
            <option value="DKK">DKK Danish Krone </option>
            <option value="EUR">EUR Euro </option>
            <option value="USD">USD USA Dollar </option>
            <option value="GBP">GBP British Pound </option>
            <option value="GBP">Other </option>
          </select> */}
          {/* <select className="js-example-placeholder-multiple" id="SelectCurrancy" className="form-control"> */}
          <select className="js-example-placeholder-multiple" className="form-control"
            id="currencyID"
            name="currencyID"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.currencyID}
          >
            <option value="1">Select Currency</option>
            <option value="1">SEK Swedish Krona</option>
            <option value="2">NOK Danish Krone </option>
            <option value="3">DKK Danish Krone </option>
            <option value="4">EUR Euro </option>
            <option value="5">USD USA Dollar </option>
            <option value="6">GBP British Pound </option>
            <option value="7">Other </option>
          </select>
          {/* <select className="js-example-placeholder-multiple" className="form-control">
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
          </select> */}
          <select className="js-example-placeholder-multiple" className="form-control"
            id="paymentTermID"
            name="paymentTermID"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.paymentTermID}
          >
            <option value="1">Payment Terms</option>
            <option value="2">Cash Payment</option>
            <option value="3">Card Payment </option>
            <option value="4">Bank Transfer </option>
            <option value="5">Bank Finance </option>
            <option value="6">0 Day Payment</option>
            <option value="7">10 Days Payment</option>
            <option value="8">14 Days Payment</option>
            <option value="9">20 Days Payment</option>
            <option value="10">30 Days Payment</option>
            <option value="11">45 Days Payment</option>
            <option value="12">60 Days Payment</option>
            <option value="13">90 Days Payment</option>
            <option value="14">Swish</option>
            <option value="15">Klarna</option>
          </select>
          {/* <select className="js-example-placeholder-multiple" className="form-control">
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
          </select> */}
          <select className="js-example-placeholder-multiple" className="form-control"
            id="deliveryTermID"
            name="deliveryTermID"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.deliveryTermID}
          >
            <option value="1">Delivery Terms</option>
            <option value="2">Home Delivery</option>
            <option value="3">Free Delivery </option>
            <option value="4">Pick It Up Warehouse</option>
            <option value="5">PostNord</option>
            <option value="6">FedEx</option>
            <option value="7">TNT</option>
            <option value="8">UPS</option>
            <option value="9">Pick It Up Service Point</option>
            <option value="10">Other Delivery</option>
          </select>
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                <label>Active Date</label>
                {/* <input type="date" className="form-control" value="2021-01-01" /> */}
                <input
                  id='activeDate'
                  name='activeDate'
                  type="date"
                  className="form-control"
                  // placeholder="Active Status"
                  onChange={formik.handleChange}
                  value={formik.values.activeDate}
                >

                </input>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                <label>Deactive Date</label>
                {/* <input type="date" className="form-control" value="2021-01-01" /> */}
                <input
                  id='deactiveDate'
                  name='deactiveDate'
                  type="date"
                  className="form-control"
                  // placeholder="Active Status"
                  onChange={formik.handleChange}
                  value={formik.values.deactiveDate}
                >

                </input>
              </div>
            </div>
          </div>
          <textarea
            id='activeStatus'
            name='activeStatus'
            type="text"
            className="form-control"
            placeholder="Active Status"
            onChange={formik.handleChange}
            value={formik.values.activeStatus}
          >

          </textarea>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-sm-6">
              <div className='form-group'>
                {/* <select className="js-example-placeholder-multiple" className="form-control">
                  <option value="AL">Select VAT</option>
                  <option value="PrivateCustomer" className="private-cust-btn">VAT
                    Purchases 20-24</option>
                  <option value="PrivateCustomer" className="private-cust-btn">VAT
                    Sales or Withdrawal 05-08</option>
                  <option value="PrivateCustomer" className="private-cust-btn">VAT VAT
                    on Import 50</option>
                  <option value="PrivateCustomer" className="private-cust-btn">Other
                  </option>
                </select> */}
                <select className="js-example-placeholder-multiple" className="form-control"
                  id="vatid"
                  name="vatid"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.vatid}
                >
                  <option value="1">Select VAT</option>
                  <option value="1" className="private-cust-btn">VAT
                    Purchases 20-24</option>
                  <option value="2" className="private-cust-btn">VAT
                    Sales or Withdrawal 05-08</option>
                  <option value="3" className="private-cust-btn">VAT VAT
                    on Import 50</option>
                  <option value="4" className="private-cust-btn">Other
                  </option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='form-group'>
                {/* <select className="js-example-placeholder-multiple" className="form-control">
                  <option value="AL">VAT %</option>
                  <option value="Valuesix" className="private-cust-btn">6 %</option>
                  <option value="Valuetwelve" className="private-cust-btn">12 %
                  </option>
                  <option value="Valuetfive" className="private-cust-btn">25 %
                  </option>
                  <option value="PrivateCustomer" className="private-cust-btn">Other
                  </option>
                </select> */}

                <select className="js-example-placeholder-multiple" className="form-control"
                  id="vatPercentID"
                  name="vatPercentID"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.vatPercentID}
                >
                  <option value="1">VAT %</option>
                  <option value="1" className="private-cust-btn">6 %</option>
                  <option value="2" className="private-cust-btn">12 %
                  </option>
                  <option value="3" className="private-cust-btn">25 %
                  </option>
                  <option value="4" className="private-cust-btn">Other
                  </option>
                </select>
              </div>
            </div>
          </div>
          <input
            id='manualVATPercent'
            name='manualVATPercent'
            type="text"
            className="form-control"
            placeholder="Manual VAT %"
            onChange={formik.handleChange}
            value={formik.values.manualVATPercent}
          >

          </input>
          <form action="assets/json/file-upload.php" className="dropzone dz-clickable">

            <div className="dz-default dz-message"><button className="dz-button" type="button">Drop files here to upload</button></div></form>
          <button className="btn btn-outline-primary btn-height-34 btn-pd-5 has-ripple">Upload Now<span className="ripple ripple-animate" style={{ height: "150px", width: "150px", background: "rgb(255, 255, 255)", opacity: "0.4", top: "-53.5px", left: "-18.1667px" }} /></button>
          <br></br><br></br>
          <button className='btn btn-primary' type="submit">Save & Exit</button>
        </div>
      </form>
    </div>
  );

};

export default AddCustomer;