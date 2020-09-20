function passwordValidation(passToValidate){
  var validPasswordFormat = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-z0-9]{8,20}$/;
  if(validPasswordFormat.test(passToValidate)){
    return true;
  }
  else{
    return false;
  }
}

function emailValidation(emailToValidate){
  var validEmailFormat = /^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
  if(validEmailFormat.test(emailToValidate.toLowerCase())){
    return true;
  }
  else{
    return false;
  }
}

function mobileValidation(mobileToValidate){
  var validPhoneNumberFormat = /^(013|014|015|016|017|018|019)[0-9]{8}$/;
  if(validPhoneNumberFormat.test('mobileToValidate')){
    return true;
  }
  else {
    return false;
  }
}

function lastNameValidation(nameToValidate){
  var validNameFormat = /^[a-zA-Z]{3,}$/;
  if(validNameFormat.test('nameToValidate')){
    return true;
  }
  else {
    return false;
  }
}



//navbar search in homepage
var searchfield = document.getElementById('search');
var searchform = document.getElementById('navform');
searchfield.addEventListener('keyup', searchFieldVerify);
searchform.addEventListener('submit', preventsearchsubmit);

function searchFieldVerify(e){
    var searchfieldvalue=searchfield.value;
    var validformat = /^[a-zA-Z0-9]{3,}$/;
    if(validformat.test(searchfieldvalue)){
       searchfield.classList.add('is-valid');
       searchfield.classList.remove('is-invalid');
       return true;
    }
    else{
        searchfield.classList.add('is-invalid');
        searchfield.classList.remove('is-valid');
        return false;
    }
    return true;
}
function preventsearchsubmit(e){
  if(!searchFieldVerify()){
    e.preventDefault();
  }
}


//loginverify
var logform = document.getElementById('loginform');
var logemail = document.getElementById('loginemail');
var logpass = document.getElementById('loginpass');
logemail.addEventListener('keyup', loginemailverify);
logpass.addEventListener('keyup', loginpassverify);
logform.addEventListener('submit', preventloginsubmit);

function loginemailverify(e){
  if(emailValidation(logemail.value)){
    logemail.classList.add('is-valid');
    logemail.classList.remove('is-invalid');
    return true;
  }
  else{
    logemail.classList.add('is-invalid');
    logemail.classList.remove('is-valid');
    return false;
  }
  return true;
}

function loginpassverify(e){
  if(passwordValidation(logpass.value)){
    logpass.classList.add('is-valid');
    logpass.classList.remove('is-invalid');
    return true;
  }
  else{
    logpass.classList.add('is-invalid');
    logpass.classList.remove('is-valid');
    return false;
  }
  return true;
}

function preventloginsubmit(e){
  if (!loginemailverify() || !loginpassverify()) {
    e.preventDefault();
  }
}


//registration verify
var registrationlname = document.getElementById('reglname');
var registrationemail = document.getElementById('regemail');
var registrationphone = document.getElementById('regphone');
var registrationpass1 = document.getElementById('regpass1');
var registrationpass2 = document.getElementById('regpass2');
var registrationformm = document.getElementById('registrationform');

registrationlname.addEventListener('keyup', registrationLNameVerify);
registrationemail.addEventListener('keyup', registrationEmailVerify);
registrationphone.addEventListener('keyup', registrationPhoneVerify);
registrationpass1.addEventListener('keyup', registrationPass1Verify);
registrationpass2.addEventListener('keyup', registrationPass2Verify);
registrationformm.addEventListener('submit', registrationFormPreventSubmit);


function registrationLNameVerify(e){
  var validformat = /^[a-zA-Z0-9]{3,}$/;
  if(validformat.test(registrationlname.value)){
     registrationlname.classList.add('is-valid');
     registrationlname.classList.remove('is-invalid');
     return true;
  }
  else{
      registrationlname.classList.add('is-invalid');
      registrationlname.classList.remove('is-valid');
      return false;
  }
  return true;
}

function registrationEmailVerify(e){
  if (emailValidation(registrationemail.value)) {
    registrationemail.classList.add('is-valid');
    registrationemail.classList.remove('is-invalid');
    return true;
  } else {
    registrationemail.classList.add('is-invalid');
    registrationemail.classList.remove('is-valid');
    return false;
  }
  return true;
}

function registrationPhoneVerify(e){
  var validPhoneNumberFormat = /^(013|014|015|016|017|018|019)[0-9]{8}$/;
  if(validPhoneNumberFormat.test(registrationphone.value)){
     registrationphone.classList.add('is-valid');
     registrationphone.classList.remove('is-invalid');
     return true;
  }
  else{
      registrationphone.classList.add('is-invalid');
      registrationphone.classList.remove('is-valid');
      return false;
  }
  return true;
}

function registrationPass1Verify(e){
  if (passwordValidation(registrationpass1.value)) {
    registrationpass1.classList.add('is-valid');
    registrationpass1.classList.remove('is-invalid');
    return true;
  } else {
    registrationpass1.classList.add('is-invalid');
    registrationpass1.classList.remove('is-valid');
    return false;
  }
  return true;
}

function registrationPass2Verify(e){
  if (registrationpass1.value==registrationpass2.value) {
    registrationpass2.classList.add('is-valid');
    registrationpass2.classList.remove('is-invalid');
    return true;
  } else {
    registrationpass2.classList.add('is-invalid');
    registrationpass2.classList.remove('is-valid');
    return false;
  }
  return true;
}

function registrationFormPreventSubmit(e){
  if (!registrationLNameVerify() || !registrationEmailVerify() || !registrationPhoneVerify() || !registrationPass1Verify() || !registrationPass2Verify()) {
    e.preventDefault();
  }
}



//order Page
var address = document.getElementById('orderaddress');
var thana = document.getElementById('orderthana');
var city = document.getElementById('ordercity');
var orderformm = document.getElementById('orderform');

address.addEventListener('keyup', addressVerify);
thana.addEventListener('keyup', thanaVerify);
city.addEventListener('keyup', cityVerify);
orderformm.addEventListener('submit', preventOrderSubmit);

function addressVerify(e){
  var validformatAddress = /^[a-zA-Z0-9:-]{10,}$/;
  console.log(address.value);
  if(validformatAddress.test(address.value)){
     address.classList.add('is-valid');
     address.classList.remove('is-invalid');
     return true;
  }
  else{
      address.classList.add('is-invalid');
      address.classList.remove('is-valid');
      return false;
  }
  return true;
}

function thanaVerify(e){
  var validformatThana = /^[a-zA-Z]{5,30}$/;
  if(validformatThana.test(thana.value)){
     thana.classList.add('is-valid');
     thana.classList.remove('is-invalid');
     return true;
  }
  else{
      thana.classList.add('is-invalid');
      thana.classList.remove('is-valid');
      return false;
  }
  return true;
}

function cityVerify(e){
  var validformatCity = /^[a-zA-Z]{5,30}$/;
  if(validformatCity.test(city.value)){
     city.classList.add('is-valid');
     city.classList.remove('is-invalid');
     return true;
  }
  else{
      city.classList.add('is-invalid');
      city.classList.remove('is-valid');
      return false;
  }
  return true;
}

function preventOrderSubmit(e){
  if (!cityVerify() || !thanaVerify() || !addressVerify()) {
    e.preventDefault();
  }
}


//payment part

var payname = document.getElementById('paymentname');
var payCardNumber = document.getElementById('paymentcardNumber');
var payCvc = document.getElementById('paymentCvc');
var payform = document.getElementById('paymentForm');

payname.addEventListener('keyup', paymentNameVerify);
payCardNumber.addEventListener('keyup', paymentCardNumberverify);
payCvc.addEventListener('keyup', paymentCvcVerify);
payform.addEventListener('keyup', paymentFormPreventSubmit);

function paymentNameVerify(e){
  var validpayNameFormat = /^[a-zA-Z ]{10,35}$/;
  if(validpayNameFormat.test(payname.value)){
     payname.classList.add('is-valid');
     payname.classList.remove('is-invalid');
     return true;
  }
  else{
      payname.classList.add('is-invalid');
      payname.classList.remove('is-valid');
      return false;
  }
  return true;
}

function paymentCardNumberverify(e){
  var validpayCardNumberFormat = /^[0-9]{16}$/;
  if(validpayCardNumberFormat.test(payCardNumber.value)){
     payCardNumber.classList.add('is-valid');
     payCardNumber.classList.remove('is-invalid');
     return true;
  }
  else{
      payCardNumber.classList.add('is-invalid');
      payCardNumber.classList.remove('is-valid');
      return false;
  }
  return true;
}

function paymentCvcVerify(e){
  var validpayCvcFormat = /^[0-9]{3}$/;
  if(validpayCvcFormat.test(payCvc.value)){
     payCvc.classList.add('is-valid');
     payCvc.classList.remove('is-invalid');
     return true;
  }
  else{
      payCvc.classList.add('is-invalid');
      payCvc.classList.remove('is-valid');
      return false;
  }
  return true;
}

function paymentFormPreventSubmit(e){
  if (!paymentNameVerify() || !paymentCardNumberverify() || !paymentCvcVerify()) {
    e.preventDefault();
  }
}



//product add Page
var productName = document.getElementById('productAddname');
//var productCatagory = document.getElementById('productAddCat');
var productPrice = document.getElementById('price');
var productDetails = document.getElementById('details');
var productAddForm = document.getElementById('addProductForm');

productName.addEventListener('keyup', productNameVerify);
//productCatagory.addEventListener('keyup', productCatagoryVerify);
productPrice.addEventListener('keyup', productPriceVerify);
productDetails.addEventListener('keyup', productDetailsVerify);
productAddForm.addEventListener('keyup', productAddFormPrevent);

function productNameVerify(e){
  var validproductNameFormat = /^[a-zA-Z0-9-]{5,45}$/;
  if(validProductNameFormat.test(productName.value)){
     productName.classList.add('is-valid');
     productName.classList.remove('is-invalid');
     return true;
  }
  else{
      productName.classList.add('is-invalid');
      productName.classList.remove('is-valid');
      return false;
  }
  return true;
}

// function productCatagoryVerify(e){
//   var validproductCatagoryFormat = /^[a-zA-Z-]{5,45}$/;
//   if(validProductCatagoryFormat.test(productCatagory.value)){
//      productCatagory.classList.add('is-valid');
//      productCatagory.classList.remove('is-invalid');
//      return true;
//   }
//   else{
//       productCatagory.classList.add('is-invalid');
//       productCatagory.classList.remove('is-valid');
//       return false;
//   }
//   return true;
// }

function productPriceVerify(e){
  var validproductPriceFormat = /^[0-9]{5}$/;
  if(validproductPriceFormat.test(productPrice.value)){
     productPrice.classList.add('is-valid');
     productPrice.classList.remove('is-invalid');
     return true;
  }
  else{
      productPrice.classList.add('is-invalid');
      productPrice.classList.remove('is-valid');
      return false;
  }
  return true;
}

function productDetailsVerify(e){
  var validproductDetailsFormat = /^[a-zA-Z0-9.-_]{10,300}$/;
  if(validproductDetailsFormat.test(productDetails.value)){
     productDetails.classList.add('is-valid');
     productDetails.classList.remove('is-invalid');
     return true;
  }
  else{
      productDetails.classList.add('is-invalid');
      productDetails.classList.remove('is-valid');
      return false;
  }
  return true;
}

function productAddFormPrevent(e){
  if (!productDetailsVerify() || !productPriceVerify() || !productCatagoryVerify() || productNameVerify()) {
    e.preventDefault();
  }
}
