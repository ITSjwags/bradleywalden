import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <p><Link to="/lessons/">Go to lessons</Link></p>
    <p><Link to="/songwriting/">Go to songwriting</Link></p>
  </div>
)

export default IndexPage;
