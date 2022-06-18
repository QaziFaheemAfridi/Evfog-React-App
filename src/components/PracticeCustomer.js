import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { useFormik,Field } from 'formik';

const PracticeCustomer =()=> {
  
//   const formik = useFormik({
//     initialValues: {
//         // CreditLimit: '',
//         // LimitAmount: '',
//         // CustomerName: ''
//         // ,
//         // Salary:''


//         customerIdentificationNumber: "string",
//         creditLimit: "string",
//         limitAmount: "string",
//         customerName: "string",
//         billingAddress: "string",
//         billingPostalCode: "string",
//         billingCityName: "string",
//         billingStateName: "string",
//         deliveryAddress: "string",
//         deliveryPostalCode: "string",
//         deliveryCityName: "string",
//         deliveryStateName: "string",
//         deliveryCountry: "string",
//         customerEmailAddress: "string",
//         customerMobilePhone: "string",
//         customerTelephone: "string",
//         priceWithVAT: true,
//         emailCampaign: true,
//         addVAT: true,
//         securityID: "string",
//         activeDate: "2022-06-05T01:05:38.542Z",
//         deactiveDate: "2022-06-05T01:05:38.542Z",
//         activeStatus: "string",
//         website: "string",
//         message: "string",
//         manualVATPercent: "string",
//         branchCodeDescription: "string",
//         contactPersonName: "string",
//         contactPersonEmailAddress: "string",
//         contactPersonMobileNumber: "string",
//         contactPersonTelephoneNumber: "string",
//         customerTypeId: 1,
//         billingCountryId: 1,
//         currencyID: 1,
//         paymentTermID: 1,
//         deliveryTermID: 1,
//         vatid: 1,
//         vatPercentID: 1,
//         securityIdentitficationTypeID: 1
//     },
//     onSubmit: values => {
//     //   alert(JSON.stringify(values));
//         fetch('https://localhost:7262/api/Customer/CreateCustomer',{
//             method:'POST',
//             headers:{'Content-type':'application/json'},
//             body:JSON.stringify(values)
//         }).then(r=>r.json()).then(res=>{
//             if(res){
//                 // this.setState({message:'New Employee Created Successfully'});
//                 alert("Customer Created Successfullly");
//             }
//         })
    
//     },
//   });

  const formik = useFormik({
    initialValues: {
        CreditLimit: '',
        LimitAmount: '',
        CustomerName: '',
        Salary:'',
        Gender:false,
        gender:'Male',
        onoff:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
    <h2>Enter Employee Details...</h2>
    <form onSubmit={formik.handleSubmit}>
      
      <input
        id="CreditLimit"
        name="CreditLimit"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.CreditLimit}
      />
      <input
        id="LimitAmount"
        name="LimitAmount"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.LimitAmount}
      />
      <input
        id="CustomerName"
        name="CustomerName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.CustomerName}
      /> 
       <select
        id="Salary"
        name="Salary"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Salary}
      >
          <option value={3000}>5000</option>
          <option value={8000}>10000</option>
          <option value={18000}>20000</option>
          <option value={28000}>30000</option>
          </select>
          <input
        id="Gender"
        name="Gender"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.Gender}
      /> 
      <label>
       <input
        id="onoff"
        name="onoff"
        type="radio"
        onChange={formik.handleChange}
        //value={formik.values.on}
        value="On"
      />ON
      </label>
      <label>
       <input
        id="onoff"
        name="onoff"
        type="radio"
        onChange={formik.handleChange}
        //value={formik.values.off}
        value="Off"
      />
      OFF
      </label>
      {/* <div role="group" aria-labelledby="my-radio-group"> */}
            {/* <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            <div>Picked: {formik.values.picked}</div> */}
          {/* </div> */}
      {/* <input
          name="gender"
          render={({ field }) => (
            <>
              <div className="radio-item">
                <input
                  {...field}
                  id="male"
                  value="male"
                  checked={field.value === 'male'}
                  name="type"
                  type="radio"
                />
                <label htmlFor="male">Male</label>
              </div>

              <div className="radio-item">
                <input
                  {...field}
                  id="female"
                  value="female"
                  name="type"
                  checked={field.value === 'female'}
                  type="radio"
                />
                <label htmlFor="female">Female</label>
              </div>
            </>
          )}
        /> */}

      <button type="submit">Submit</button>
    </form>
    </div>
  );
  
};

export default PracticeCustomer;