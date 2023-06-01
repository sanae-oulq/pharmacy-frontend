import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import PatientPrivateRoute from './Routes/PatientPrivateRoute';
import DoctorPrivateRoute from './Routes/DoctorPrivateRoute';
import './App.css';
import Header from './components/Header/Header'
import PatientSignIn from './components/PatientManagement/SignIn/SignIn';
import PatientSignUp from './components/PatientManagement/SignUp/SignUp';
import AdminSignIn from './components/AdminManagement/AdminLogin';
import PatientForgotPassword from './components/PatientManagement/ForgotPassword/ForgotPassword';
import PatientResetPassword from './components/PatientManagement/ResetPassword/ResetPassword';
import PatientProfile from './components/PatientManagement/Profile/Profile';
import PatientUpdateProfile from './components/PatientManagement/UpdateProfile/UpdateProfile';
import DoctorLogin from './components/DoctorManagement/DoctorLogin/DoctorLogin';
import DoctorSignUp from './components/DoctorManagement/DoctorSignUp/DoctorSignUp';
import DoctorProfile from './components/DoctorManagement/DoctorProfile/DoctorProfile';
import DoctorUpdate from './components/DoctorManagement/DoctorUpdateProfile/DoctorUpdate';
import PrescriptionHistory from './components/PrescriptionManagement/History/History';
import UpdatePrescription from './components/PrescriptionManagement/Update/Update';
import ViewOne from './components/PrescriptionManagement/View/View';
import AddProducts from './components/PharmacyManagement/AddProduct/AddProducts'
import Items from './components/PharmacyManagement/Items/Items';
import SingleItem from './components/PharmacyManagement/SingleItem/SingleItem';
import ProductHistory from './components/PharmacyManagement/ProductHistory/ProductHistory';
import UpdateProduct from './components/PharmacyManagement/UpdateProduct/UpdateProduct';
import Cart from './components/CartManagement/Cart';
import CartReport from './components/CartManagement/Report';
import CartPayment from './components/PaymentManagement/AddPayment/CartPayment';
import BuyPayment from './components/PaymentManagement/AddPayment/BuyPayment';
import AllPayments from './components/PaymentManagement/AllPayments/AllPayments';
import CreateReview from './components/ReviewManagement/CreateReview/CreateReview';
import DisplayReview from './components/ReviewManagement/DisplayReview/DisplayReview';
import updateReview from './components/ReviewManagement/UpdateReview/UpdateReview';
import AddAppointment from './components/AppointmentManagement/AddAppointment';
import ViewAppointment from './components/AppointmentManagement/ViewAppointment';
import DoctorReport from './components/DoctorManagement/DoctorProfile/DoctorReport';
import Footer from './components/Footer/Footer';
import Homepage from './components/Home/Homepage';
import PaymentReport from './components/PaymentManagement/PaymentReport/PaymentReport';
import VideoConference from './components/VideoConference/VideoConference';
import PatientReport from './components/PatientManagement/Report/PatientReport';
import AppointmentPayment from './components/PaymentManagement/AddPayment/AppointmentPayment';
import UpdateAppointment from './components/AppointmentManagement/UpdateAppointment';
import Orders from './components/OrderManagement/Orders';
import Main from './components/Main'
import Select from 'react-select';

import { useEffect,useState } from 'react';



function App() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [isGardeSelected, setIsGardeSelected] = useState(false); // Nouveau state pour la sélection de garde
  const [selectedGarde, setSelectedGarde] = useState(null);
  const [pharmacies, setPharmacies] = useState([]);

  // useEffect(() => {
  //   const fetchCities = async () => {
  //     const res = await fetch('http://localhost:3001/api/cities');
  //     const data = await res.json();
  //     setCities(data);
  //   };
  //   fetchCities();
  // }, []);
  // const handleCityChange = (selectedOption) => {
  //   setSelectedCity(selectedOption);
  //   setSelectedZone(null);
  //   setIsGardeSelected(false); // Réinitialiser la sélection de garde lorsque la ville est modifiée
  // };

// //cities
//   const cities = [
//     {id:1, name:"Casablanca"},
//     {id:2, name:"Eljadida"},
//     {id:3, name:"Meknes"},
//   ];
// //zones
//   const zones = [
//     {id:1, cityId:"1", name:"Ain Chok"},
//     {id:2, cityId:"1", name:"Ain Diab"},
//     {id:3, cityId:"1", name:"Ain Sebai"},
//     {id:4, cityId:"3", name:"amria"},
//     {id:5, cityId:"3", name:"hey_essalam"},
//     {id:6, cityId:"3", name:"zitoun"},
//     {id:7, cityId:"2", name:"hhhhhhhh"},
//     {id:8, cityId:"2", name:"zzzzzzzzzzzz"},

//   ];

//   const [city, setCity] = useState([]);
//   const [zone, setZone] = useState([]);

//   useEffect(()=>{
//     setCity(cities);
//   },[])
//   const handleCity = (id) => {
//     const dt = zones.filter(x => x.cityId == id);
//     setZone(dt);

//   }
  
  return (
    <div className="App">
            <Router>
        <div>
            <Header/>
            {/* <div>
            <Select
            className="select"
            options={cities.map((city) => ({
              value: city._id,
              label: city.name,
            }))}
            value={selectedCity}
            onChange={handleCityChange}
            placeholder=""
          />
           </div> */}
            {/* <select className='form-control select-class' onChange={(e) => handleCity(e.target.value)}>
        <option value="0">Select City</option>
      {
        city &&
        city!==undefined?
        city.map((ct, index)=>{
          return(
            <option key={index} value={ct.id}>{ct.name}</option>
          )
        })
        :"No Country"
      }
      </select> */}
            <Route path="/" exact component={Main} />
            <Route path="/patient/signin" exact component={PatientSignIn} />
            <Route path="/patient/signup" exact component={PatientSignUp} />
            <Route path="/admin/signin" exact component={AdminSignIn} />
            <Route path="/patient/forgotpassword" exact component={PatientForgotPassword} />
            <Route path="/patient/passwordreset/:token" exact component={PatientResetPassword} />
            <PatientPrivateRoute path="/patient/profile" exact component={PatientProfile} />
            <PatientPrivateRoute path="/patient/updateprofile/:id" exact component={PatientUpdateProfile} />
            <PatientPrivateRoute path="/patient/report" exact component={PatientReport}/>
            <Route path="/doctor/signin" exact component={DoctorLogin}/>
            <Route path="/doctor/signup" exact component={DoctorSignUp}/>  
            <DoctorPrivateRoute path="/doctor/profile" exact component={DoctorProfile}/>
            <DoctorPrivateRoute path="/doctor/update/:id" exact component={DoctorUpdate}/> 
            <DoctorPrivateRoute path ="/doctor/report/:id" exact component={DoctorReport}/> 
            <PrivateRoute path="/prescription/history/:id" exact component={PrescriptionHistory} />
            <PrivateRoute path="/prescription/view/:id" exact component={ViewOne} />  
            <DoctorPrivateRoute path="/prescription/update/:id" exact component={UpdatePrescription} />  
            <Route path="/pharmacy/addProduct" exact component={AddProducts}/>
            <Route path="/pharmacy/items" exact component={Items}/>
            <Route path="/pharmacy/product/history" exact component={ProductHistory}/>
            <Route path="/pharmacy/item/:id" exact component={SingleItem}/>
            <Route path="/pharmacy/item/update/:id" exact component={UpdateProduct}/>
            <PatientPrivateRoute path="/cart/:id/:type" exact component={Cart}/>
            <PatientPrivateRoute path="/cart/report/:id/:type" exact component={CartReport}/>
            <PatientPrivateRoute path="/patient/payment" exact component= {CartPayment}/>
            <PatientPrivateRoute path="/patient/appointmentpayment" exact component= {AppointmentPayment}/>
            <PatientPrivateRoute path="/patient/buyPayment/:id/:price" exact component= {BuyPayment}/>
            <PatientPrivateRoute path="/patient/payment/:id" exact component = {AllPayments}/>
            <PatientPrivateRoute path="/patient/payments/report" exact component={PaymentReport}/>
            <PatientPrivateRoute path="/patient/review" exact component={CreateReview}/>
            <PatientPrivateRoute path="/patient/review/:patientID" exact component = {DisplayReview}/>
            <PatientPrivateRoute path="/patient/review/update/:id" exact component = {updateReview}/>      
            <PatientPrivateRoute path="/patient/appointment/:id" exact component={AddAppointment}/>
            <PatientPrivateRoute path="/appointment/update/:id" exact component={UpdateAppointment} />
            <PrivateRoute path="/appointment/:id" exact component={ViewAppointment}/>
            <PrivateRoute path="/video/:id" exact component={VideoConference}/>
            <PatientPrivateRoute path="/patient/orders" exact component={Orders} />
            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;