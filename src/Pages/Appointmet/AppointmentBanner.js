
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {
    
    

    return (
        <div className="hero min-h-screen  bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse  "> 
    <img className="w-3/4 lg:w-1/2  rounded-lg shadow-2xl ml-5"  src={chair}  alt ='Dentist chair'/>
    <div>
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        
      ></DayPicker>
      
    </div>
  </div>
  
</div>
    );
};

export default AppointmentBanner;