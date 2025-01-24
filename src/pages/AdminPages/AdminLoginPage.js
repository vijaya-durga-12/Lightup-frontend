import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login'; // Adjust path accordingly
import { fetchadmindata } from '../../features/admin/adminActions';
const adminData=require('dotenv').config('../env')

const AdminLoginPage = () => {
  const dispatch = useDispatch();

  const admin_email=process.env.ADMIN_ID
  console.log(admin_email)
  const admin_password=process.env.ADMIN_PASSWORD
 

  // Dispatch action to load admin credentials
  useEffect(() => {
    dispatch(fetchadmindata(admin_email,admin_password) );
  }, [dispatch]);

  return (
    <div>
      <Login/>
    </div>
  );
};

export default AdminLoginPage;
