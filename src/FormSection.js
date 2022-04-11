import React from 'react';
import Header from './Header';
import  './index.css';
import $ from 'jquery';
function FormSection()
{

  const handleSubmit = (e) => {
    var formdata = document.getElementById('myForm');
    e.preventDefault();
    console.log('Page Refresh avoided');
    console.log(formdata);
     var all_data = new FormData(formdata);
     var data_in_json = Object.fromEntries(all_data.entries());
     console.log('Data Type: ', typeof data_in_json);
      $.post('http://localhost:8000/add',
      data_in_json,
      function(msg){
        console.log('ok')
      }
      )
  }

    return(
      <div>
          <Header />
          <div className='container'>         
          <div className='form-section'>
          <form onSubmit={handleSubmit} id='myForm' name='myForm'>
                <div className='form-group'>
                <input className='form-control' type='text' name='id_no' id='id_no' placeholder='ID' /><br/>
                </div>
                <div className='form-group'> 
                <input className='form-control' type='text' name='user_name' id='user_name' placeholder='Name' /><br/>
                </div>
                <input className='form-control' type='text' name='profession' id='profession' placeholder='Profession' /><br />
                <div className='form-group'>
                <input className='form-control btn btn-primary' type='submit' id='submit' name='submit' value='Submit' />
                </div>
          </form>
          </div>
          </div>
      </div>  
    );
}

export default FormSection;