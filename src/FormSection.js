import React from 'react';
import Header from './Header';
import  './index.css';
function FormSection()
{
    return(
      <div>
          <Header />
          <div className='container'>         
          <div className='form-section'>
          <form action = "http://localhost:8000/add" method = "post">
                <div className='form-group'>
                <input className='form-control' type='text' name='id_no' placeholder='ID' /><br/>
                </div>
                <div className='form-group'> 
                <input className='form-control' type='text' name='user_name' placeholder='Name' /><br/>
                </div>
                <input className='form-control' type='text' name='profession' placeholder='Profession' /><br />
                <div className='form-group'>
                <input className='form-control btn btn-primary' type='submit' name='submit' value='Submit' />
                </div>
          </form>
          </div>
          </div>
      </div>  
    );
}

export default FormSection;