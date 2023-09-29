import React from 'react';
import Layout from '../components/Layout/Layout';
import {Box,Typography} from '@mui/material';

const About = () => {
  return (
    <Layout>
      {/* <h1>About page</h1> */}
      <Box sx={{ my:15, textAlign:"center", "& h4":{ fontWeight:"bold",my:2,fontSize:"2rem",}, "& p" :{ textAlign:"justify",},"@media (max-width:600px)":{my:10, "& h4":{fontSize:"1.5rem"}}}}>
         <Typography variant='h4'>
          Welcome to My Restaurant😋
         </Typography>
         <p>
         Welcome to Prachi's Restaurant, where culinary excellence meets impeccable service. Nestled in the heart of Nandyal, our restaurant offers a tantalizing blend of flavors, crafted with the finest ingredients sourced from local farms and global markets. From elegant ambience to exquisite dishes, every detail has been meticulously curated to provide you with a memorable dining experience. Whether you're seeking a romantic dinner for two or a gathering with friends and family, Prachi's restaurant promises to delight your senses and create moments to savor. Join us and embark on a gastronomic journey that celebrates the art of food and the joy of sharing it with others.
         </p>
        <br />
        <p>
        Step into a world of culinary enchantment at Prachi's React, where each plate is a canvas, and every bite is a masterpiece. We are not just a restaurant; we are a symphony of flavors, a ballet of textures, and a gallery of gastronomy.

        Our menu is a culinary odyssey, where locally-sourced ingredients and international influences come together to create a harmonious dance of taste. From the moment you walk through our doors, you'll be transported to a realm where creativity knows no bounds, and each dish is a work of art.

        at Prachi's Restaurant, dining is an experience, a journey through a tapestry of flavors, and a celebration of the senses. Whether you're savoring our signature dishes or indulging in a chef's tasting menu, your taste buds will embark on an adventure that will leave you craving for more.

        Join us for a dining experience that transcends the ordinary and lets your palate explore uncharted territories. [Restaurant Name] isn't just a place to eat; it's a place to dream, discover, and delight in the magic of food.
        </p>
      </Box>
    </Layout>
  )
}

export default About
