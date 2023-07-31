import React,{useState} from 'react';
import './pagetwo.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Pagetwo = () => {
  const [country, setCountry] = useState('in');
  const [Number, setNumber] = useState('');
  return (
    <div className="pagetwo">
        <div className="main-heading"> 
          <h1>Teacher's Bridge</h1>
          </div> 
          <div className="card-container"></div>
          <div className="card">
           <div className="phone-number">
           <h2>Enter Your Phone Number</h2>
           </div>
          <div className='phone-input'>
            <PhoneInput 
            country={country}
            placeholder='Enter Phone Number'
            onChange={(value)=>{setNumber(value)}}
            countryCodeEditable={false}
            
            />
          </div>
          <button>Submit</button>
          </div>
    </div>
  )
}

export default Pagetwo