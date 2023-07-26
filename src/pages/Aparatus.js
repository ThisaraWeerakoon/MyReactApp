import React from 'react';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';

//images
import newtonImage from '../images/AparatusImages/newtonPendulum.jpeg';
import projectileImage from '../images/AparatusImages/projectile.png';
import eddyCurrentImage from '../images/AparatusImages/eddyCurrent.jpeg';

const Aparatus = () => {
  // Sample data for the cards
  const cardData = [
    {
      imageUrl: newtonImage,
      title: 'Newton Pendulum',
      description: 'Discover the mesmerizing elegance of the Newton Pendulum! This captivating scientific instrument showcases the principles of conservation of momentum and energy. A series of suspended steel balls swing in harmony, demonstrating the fascinating interplay of physics in action. As one ball is set in motion, it transfers its energy to the next, creating a mesmerizing dance of rhythmic motion. The Newton Pendulum serves as a beautiful and educational addition to any space, intriguing both the young and the young-at-heart with its enthralling display of scientific principles. Unveil the wonders of physics and bring a touch of scientific marvel to your surroundings with the Newton Pendulum!',
      linkTo: '/newtonPendulum',
    },
    {
      imageUrl: projectileImage,
      title: 'Projectile Motion',
      description: 'Experience the marvels of physics with our Projectile Motion Demonstrator! This captivating device showcases the fundamental principles of projectile motion in a visually engaging way. Watch as a small ball launches into the air, gracefully following a parabolic trajectory. With adjustable launch angles and velocities, you can explore how different factors influence the path of the projectile. The Projectile Motion Demonstrator is not only an educational tool for students and enthusiasts but also a fascinating spectacle for all ages. Delve into the world of motion and discover the beauty of physics with this interactive and enlightening demonstrator. Whether you re a curious learner or a science enthusiast, this device promises to ignite your passion for understanding the laws that govern motion in our universe.',
      linkTo: '/projectileMotion',
    },
    {
      imageUrl: eddyCurrentImage,
      title: 'Eddy Current Simulator',
      description: 'Introducing our Eddy Current Demonstrator – a captivating window into the fascinating world of electromagnetism! Experience the wonders of eddy currents, mysterious circular currents induced by changing magnetic fields. As you place conductive materials near our powerful electromagnet, witness the magic unfold before your eyes. The invisible forces come to life as the materials generate their own magnetic fields, causing mesmerizing movements and resistance effects. Our Eddy Current Demonstrator is both educational and awe-inspiring, offering a hands-on experience that will ignite your curiosity about the wonders of electromagnetism. Unravel the secrets of this remarkable phenomenon and explore the practical applications in industries like transportation, engineering, and more. Delve into the realm of electromagnetic marvels and electrify your understanding of this captivating science with our Eddy Current Demonstrator!',
      linkTo: '/eddyCurrentSimulator',
    },
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ImgMediaCard
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            linkTo={card.linkTo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Aparatus;
