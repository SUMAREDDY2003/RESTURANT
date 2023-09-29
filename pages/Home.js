import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from "react-router-dom";
import banner from '../images/banner.jpg';
import '../styles/Homestyles.css'
const Home = () => {
  return (
    <Layout>
      {/* <h1>Home page</h1> */}
      <div className="home"  style ={{backgroundImage: `url(${banner})`}}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Good food Good life</p>
          <Link to="/menu">
          <button>
            ORDER NOW
          </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
