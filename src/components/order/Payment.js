import { useEffect,useState } from "react";
import {initPayment} from '../../api/apiOrder';
import {userInfo} from '../../utils/auth';
import {Link} from 'react-router-dom';


const Payment=()=>{
  const [sessionSuccess,setSessionSuccess]=useState(false);
  const [failed,setFailed]=useState(false);
  const[redirectUrl,setRedirectUrl]=useState('');

  useEffect(()=>{
    initPayment(userInfo().token)
    .then(response=>{
      if(response.data.status==='SUCCESS'){
        setSessionSuccess(true);
        setRedirectUrl(response.data.GatewayPageURL);
        setFailed(false);

      }
    }).catch(err=>{
      setFailed(true);
      setSessionSuccess(false);
    })

  },[])


  return(
    <div>
      {
        sessionSuccess?window.location=redirectUrl:'Payment is processing...'
      }
      {
        failed?(<>
        <p>Failed to start payment session...</p>
        <Link to='/cart'>Go to Cart</Link>
        </>):''
      }
    </div>)
}

export default Payment;