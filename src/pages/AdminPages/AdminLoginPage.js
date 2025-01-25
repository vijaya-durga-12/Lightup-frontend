import React from 'react'

const AdminLoginPage = () => {

    const admin_email=Process.env.ADMIN_ID;
    const admin_password=Process.env.ADMIN_PASSWORD;

    if(email===admin_email && password===admin_password){
        alert("Admin logged in successfully");
        navigate("/")
        return
       }
    
  return (
    <div>

    </div>
  )
}

export default AdminLoginPage