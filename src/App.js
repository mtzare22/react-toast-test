import React, { useEffect, useState } from 'react'
import Toast from './components/toast/Toast'
const App = () => {
  const [Data,setData] = useState([]);
  const [User,SetUser] = useState({
    Picture: null
  });
  const getApi = (e) => {
    e.preventDefault();
    fetch("https://randomuser.me/api/").then((res) => res.json()).then((response) => {
      setData(response);
      
      
  });
}
  
  useEffect(() => {
    if(Data.length !== 0) {
      SetUser({Picture: (Data.results[0].picture.thumbnail)}) 
    }
  },[Data,SetUser]);
  return (
    <div className='main'>
      <small>Get Information From https://randomuser.me/api/</small>
    {
      User.Picture !== null ? <Toast position="right-bottom" id={Math.random(20)} notifyType="success" message="اطلاعات با موفقیت دریافت شد." autoHide="true"  /> : ''
    }
    
    <div>
    <img src={User.Picture} alt="no User" style={{ width:"100px", borderRadius:"50%"}}  />
    </div>
    <div>
    <button onClick={(e) => getApi(e)}>Send Request</button>

    </div>
    {
    /* 
    <Toast position="right-top" notifyType="error" message="خطا در انجام عملیات رخ داده است." />
    <Toast position="right-bottom" notifyType="success" message="اطلاعات با موفقیت دریافت شد."  />
    <Toast position="left-bottom" notifyType="warning" message="عملیات بطور کامل انجام نشد."  />
    <Toast position="left-top" notifyType="info" message="اطلاعات بصورت موقت ذخیره شد." /> 
    */
    }
    </div>
  )
}

export default App;
