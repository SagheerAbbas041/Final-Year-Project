import React from 'react';
import person from '../../assets/images/2.jpg';
import person1 from '../../assets/images/waji.png';
import person2 from '../../assets/images/hassani.png';
const TeamMemberCard = ({ name, email,photo}) => {
    return (
      <div className="bg-white shadow-lg p-4 rounded-lg ">
        <img src={person1} alt={name} className="w-24 h-24 object-cover mx-auto mb-4 rounded-full" />
        <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
        <p className="text-gray-600 mb-2 text-center">{email}</p>
      </div>
      
    );
  };

export default TeamMemberCard;
