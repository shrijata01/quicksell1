import React from 'react';
import KanbanBoard from './Components/Kanban';

const App = () => {
  const tickets = [
    {"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},
    {"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},
    {"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},
    {"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},
    {"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},
    {"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},
    {"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},
    {"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},
    {"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},
    {"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}
  ];

const users = [
    {"id":"usr-1","name":"Anoop sharma","available":false},
    {"id":"usr-2","name":"Yogesh","available":true},
    {"id":"usr-3","name":"Shankar Kumar","available":true},
    {"id":"usr-4","name":"Ramesh","available":true},
    {"id":"usr-5","name":"Suresh","available":true}
   ];

  return (
    <div>
      <KanbanBoard tickets={tickets} users={users} />
    </div>
  );
};

export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';;

// // Priority mapping
// const priorityMap = {
//   4: 'Urgent',
//   3: 'High',
//   2: 'Medium',
//   1: 'Low',
//   0: 'No priority',
// };

// function App() {
//   const [tickets, setTickets] = useState([]);
//   const [groupingOption, setGroupingOption] = useState('status');
//   const [sortingOption, setSortingOption] = useState('priority');
//   const [open, setOpen] = useState(false);

//   // Load data from API
//   useEffect(() => {
//     fetchData();
//   }, []);

  

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//       const ticketsData = {"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]};
//       setTickets(ticketsData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Group tickets by user, status, or priority
//   const groupTickets = (option) => {
//     const groupedTickets = {};
  
//     if (!Array.isArray(tickets)) {
//       return groupedTickets; // Return an empty object or an appropriate default value
//     }
  
//     if (option === 'status') {
//       tickets.forEach((ticket) => {
//         const status = ticket.status;
//         if (!groupedTickets[status]) {
//           groupedTickets[status] = [];
//         }
//         groupedTickets[status].push(ticket);
//       });
//     } else if (option === 'user') {
//       // Implement grouping by user
//     } else if (option === 'priority') {
//       // Implement grouping by priority
//     }
  
//     return groupedTickets;
//   };
  

//   // Sort tickets by priority or title
//   const sortTickets = (option, ticketsToSort) => {
//     const sortedTickets = { ...ticketsToSort };

//     if (option === 'priority') {
//       for (const group in sortedTickets) {
//         sortedTickets[group].sort((a, b) => b.priority - a.priority);
//       }
//     } else if (option === 'title') {
//       for (const group in sortedTickets) {
//         sortedTickets[group].sort((a, b) => a.title.localeCompare(b.title));
//       }
//     }

//     return sortedTickets;
//   };

//   // const addTicket = (newTicket) => {
//   //   setTickets([...tickets, newTicket]);
//   // };

//   // Handle user interactions
//   const handleGroupingChange = (event) => {
//     const newGroupingOption = event.target.value;
//     setGroupingOption(newGroupingOption);
//   };

//   const handleSortingChange = (event) => {
//     const newSortingOption = event.target.value;
//     setSortingOption(newSortingOption);
//   };

//   const handleDisplayClick = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   // Group and sort tickets based on user selections
//   const groupedTickets = groupTickets(groupingOption);
//   const sortedTickets = sortTickets(sortingOption, groupedTickets);

//   return (
//     <div>
//       <Button variant="contained"  style={displayButtonStyle} onClick={handleDisplayClick}>
//         Display
//       </Button>
//       {/* // <TicketForm onAddTicket={addTicket} /> */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'white',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <div>
//             <label>Grouping By: </label>
//             <Select value={groupingOption} onChange={handleGroupingChange}>
//               <MenuItem value="status">Status</MenuItem>
//               <MenuItem value="user">User</MenuItem>
//               <MenuItem value="priority">Priority</MenuItem>
//             </Select>
//           </div>
//           <div>
//             <label>Sorting By: </label>
//             <Select value={sortingOption} onChange={handleSortingChange}>
//               <MenuItem value="priority">Priority</MenuItem>
//               <MenuItem value="title">Title</MenuItem>
//             </Select>
//           </div>
//         </Box>
//       </Modal>
//           {Object.keys(sortedTickets).map((group) => (
//             <div key={group}>
//               <h2>{group}</h2>
//               {sortedTickets[group].map((ticket) => (
//                 <Ticket key={ticket.id} ticket={ticket} priorityMap={priorityMap} />
//               ))}
//             {/* </div>
//           ))} */}
//         </div>
//       ))}
//     </div>
//   );
// }

// const displayButtonStyle = {
//   backgroundColor: 'white', // Set the background color to white
//   color: 'black', // Set the text color to black
// };

// export default App;
