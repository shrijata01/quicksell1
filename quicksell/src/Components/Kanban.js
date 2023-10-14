import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const priorityMap = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority',
};

function KanbanBoard({ tickets, users }) {
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');
  const [displayedTickets, setDisplayedTickets] = useState([...tickets]);
  const groupingOptions = ['status', 'user', 'priority'];
  const sortingOptions = ['priority', 'title'];

  // Function to group tickets
  const groupTickets = (option) => {
    if (option === 'user') {
      const grouped = {};
      tickets.forEach((ticket) => {
        const user = users.find((u) => u.id === ticket.userId);
        const userName = user ? user.name : 'Unassigned';
        if (!grouped[userName]) {
          grouped[userName] = [];
        }
        grouped[userName].push(ticket);
      });
      console.log("Grouping Option:", option);
      return grouped;
    } else if (option === 'priority') {
      const grouped = {};
      tickets.forEach((ticket) => {
        const priority = priorityMap[ticket.priority];
        if (!grouped[priority]) {
          grouped[priority] = [];
        }
        grouped[priority].push(ticket);
      });
      console.log("Grouping Option:", option);
      return grouped;
    } else {
      const grouped = {};
      tickets.forEach((ticket) => {
        const status = ticket.status || 'No Status';
        if (!grouped[status]) {
          grouped[status] = [];
        }
        grouped[status].push(ticket);
      });
      console.log("Grouping Option:", option);
      return grouped;
    }
  };

  // Function to sort tickets
  // Function to sort tickets
const sortTickets = (option, ticketsToSort) => {
    if (!Array.isArray(ticketsToSort)) {
      return []; // Handle the case where ticketsToSort is not an array
    }
  
    if (option === 'priority') {
        console.log("Sorting Option:", option);
      return [...ticketsToSort].sort((a, b) => b.priority - a.priority);
    } else {
        console.log("Sorting Option:", option);
      return [...ticketsToSort].sort((a, b) => a.title.localeCompare(b.title));
    }
  };
  

  // Handle the "Display" button click
  const handleDisplayClick = () => {
    const groupedTickets = groupTickets(groupingOption);
    const sortedTickets = sortTickets(sortingOption, groupedTickets[groupingOption]);

    console.log("Grouped and Sorted Tickets:", sortedTickets); // Log the sorted tickets

    setDisplayedTickets([...sortedTickets]); // Ensure displayedTickets is updated with a clone of the sortedTickets
  };

  // Save user's view state to localStorage
  useEffect(() => {
    localStorage.setItem('kanbanViewState', JSON.stringify({ groupingOption, sortingOption }));
  }, [groupingOption, sortingOption]);

  // Restore user's view state from localStorage on initial load
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('kanbanViewState'));
    if (savedState) {
      setGroupingOption(savedState.groupingOption);
      setSortingOption(savedState.sortingOption);
    }
  }, []);

  return (
    <Container>
      <div className='outer'>
        <label>Display: </label>
        <select value={groupingOption} onChange={(e) => setGroupingOption(e.target.value)}>
        {groupingOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
          ))}
          {/* <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option> */}
        </select>
        <select value={sortingOption} onChange={(e) => setSortingOption(e.target.value)}>
        {sortingOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
          {/* <option value="priority">Priority</option>
          <option value="title">Title</option> */}
        </select>
      </div>
      <button onClick={handleDisplayClick}>Display</button>
      <div className='ticket-board'>
      {displayedTickets.map((ticket) => (
        <div key={ticket.id} className="ticket">
           <h3>{ticket.id}</h3>
          <h3>{ticket.title}</h3>
          <button>!</button>
          <button>{ticket.tag}</button>
        </div>
      ))}
    </div>
    </Container>
  );
}

// Function to get user name by user ID
const getUserByUserId = (users, userId) => {
  const user = users.find((u) => u.id === userId);
  return user ? user.name : 'Unassigned';
};

export default KanbanBoard;

const Container = styled.div`
.outer{
    flex:1;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  padding-top: 20px;
}
.ticket-board{
    height: 100%;
  width: fit-content;
  padding: 10px 30px;
  display: flex;
  gap: 30px;
}
.ticket {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  gap: 30px;
}

.ticket-id {
    font-size: 1.2rem;
    font-weight: bold;
  }

.ticket-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.ticket-tag {
  color: #007bff; /* Blue color for status */
}
`;
