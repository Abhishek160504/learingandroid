// import React from 'react';
// import './Event.css'; 

// const Event = ({ date, time, title, description, link, backgroundImage }) => {
//     const handleClick = () => {
//         window.open(link, '_blank');
//     };

//     const formatDate = (dateString) => {
//         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//         return new Date(dateString).toLocaleDateString(undefined, options);
//     };

//     const formatTime = (timeString) => {
//         return new Date(`1970-01-01T${timeString}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     return (
//         <div
//             className="event-card"
//             style={{ backgroundImage: `url(${backgroundImage})`, whiteSpace:'nowrap' ,justifyContent:'center',overflowX:'auto'}}
//             onClick={handleClick}
//         >
//             <div>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//                 <p>Date: {formatDate(date)}</p>
//                 <p>Time: {formatTime(time)}</p>
//             </div>
//         </div>
//     );
// };

// export default Event;
import React from 'react';
import './Event.css'; 

const Event = ({ link, backgroundImage }) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div
            className="event-card"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            onClick={handleClick}
        />
    );
};

export default Event;
