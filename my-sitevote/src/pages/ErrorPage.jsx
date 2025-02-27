import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Image from '../assiets/404.gif';

const ErrorPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 6000);
    
    return () => clearTimeout(timer); 
  }, [navigate]); 

  return (
    <section className='errorpage'>
      <div className='errorpage_container'>
        <img src={Image} alt='error' />
        <h1>404</h1>
      </div>
    </section>
  );
}

export default ErrorPage;