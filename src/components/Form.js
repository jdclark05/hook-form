import React from  'react';
import "bootstrap/dist/css/bootstrap.min.css";
   
    
const Form = (props) => {
    const{inputs, setInputs} = props; 
    
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

    };
    
    return(
        <div className="d-flex justify-content-center m-5">
            <span className="block-example d-flex justify-content-center rounded mt-3" style={{width: '28rem', height: '25rem'}}>
                <form>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-2 m-b-3" style={{color: '#666'}}>
                        <h3 className="d-md-inline"> New User Form </h3>
                    </div>
                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="firstName" className="d-flex flex-row">First Name: </label> 
                        <input type="text" onChange={onChange} name="firstName" style={{borderRadius: '10px'}} />
                    </div>
                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="lastName">Last Name: </label> 
                        <input type="text" onChange={onChange} name="lastName" style={{borderRadius: '10px'}} />
                    </div>
                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="email">Email Address: </label> 
                        <input type="text" onChange={onChange} name="email" style={{borderRadius: '10px'}} />
                    </div>
                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="password">Password: </label>
                        <input type="password" onChange={onChange} name="password" style={{borderRadius: '10px'}} />
                    </div>
                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="confirmPassword" class="text-align-left">Confirm Password: </label>
                        <input type="password" onChange={onChange} name="confirmPassword" style={{borderRadius: '10px'}} />
                    </div>
                    <div class="d-flex justify-content-center m-3">
                        <input type="submit" value="Create User" />
                    </div>
                </form>
            </span>
        </div>

    );
};
    
export default Form;

