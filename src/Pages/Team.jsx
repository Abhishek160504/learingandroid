// team.jsx
import React from 'react';
import Linkedin from '../assets/Linkedin.png';



const Team = () => {
  const teamMembers = [
    { name: 'Abhishek', linkedin: 'https://www.linkedin.com/in/abhishek-patil-5a010925a/' },
    { name: 'Tanishq', linkedin: 'linkedin.com/b' },
    { name: 'Urvi', linkedin: 'linkedin.com/c' },
    { name: 'Revant', linkedin: 'linkedin.com/d' },
  ];

  return (
    <footer style={{justifyContent:'center', display:'flex'}}>
      <ul style={{ listStyleType: 'none', padding: '10px' }}>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.name}- <a href={member.linkedin}><img src={Linkedin} alt="LinkedIn"  style={{width:'20px'}}/></a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Team;
