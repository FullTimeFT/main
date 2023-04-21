import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Calendar = ({ onClose }) => {
  const [year, setYear] = useState(new Date().getFullYear()); // Current year
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Current month
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setMonth(month === 1 ? 12 : month - 1);
    setYear(month === 1 ? year - 1 : year);
  };

  const handleNextMonth = () => {
    setMonth(month === 12 ? 1 : month + 1);
    setYear(month === 12 ? year + 1 : year);
  };

  const handleMonthYearChange = (e) => {
    const { value } = e.target;
    const [selectedMonth, selectedYear] = value.split('-');
    setMonth(parseInt(selectedMonth));
    setYear(parseInt(selectedYear));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'black',
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        transform: 'scale(1.2)', // Added animation for crazy effect
        transition: 'transform 0.5s ease-in-out', // Added transition for animation
        zIndex: '9999', // Added higher z-index to ensure the calendar is on top of other elements
      }}
    >
      {/* Calendar Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handlePrevMonth}>
          <SlArrowLeft />
        </button>
        <select
          value={`${month}-${year}`}
          onChange={handleMonthYearChange}
          style={{ margin: '0', flex: 1, backgroundColor: 'black' }}
        >
          {Array.from({ length: 12 }, (_, index) => {
            const displayMonth = new Date(year, index).toLocaleString('en-us', {
              month: 'long',
            });
            return (
              <option key={index} value={`${index + 1}-${year}`}>
                {displayMonth} {year}
              </option>
            );
          })}
        </select>
        <button onClick={handleNextMonth}>
          <SlArrowRight />
        </button>
      </div>
      {/* Calendar Content */}
      <div>
        <table style={{ width: '100%', marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {/* Generate Calendar Dates */}
            {Array.from({ length: 6 }, (_, weekIndex) => {
              return (
                <tr key={`month-${month}-week-${weekIndex}`}>
                  {Array.from({ length: 7 }, (_, dayIndex) => {
                    const firstDay = new Date(year, month - 1, 1);
                    const startDate = new Date(
                      firstDay.getFullYear(),
                      firstDay.getMonth(),
                      1 - firstDay.getDay()
                    );
                    const currentDate = new Date(
                      startDate.getFullYear(),
                      startDate.getMonth(),
                      startDate.getDate() + weekIndex * 7 + dayIndex
                    );
                    const isCurrentMonth = currentDate.getMonth() + 1 === month;
                    const isSelected =
                      selectedDate &&
                      currentDate.toDateString() === selectedDate.toDateString();

                    return (
                      <td
                        key={`month-${month}-week-${weekIndex}-day-${dayIndex}`}
                        onClick={() => handleDateClick(currentDate)}
                        style={{
                          textAlign: 'center',
                          cursor: 'pointer',
                          backgroundColor: isCurrentMonth ? 'white' : 'lightgrey',
                          color: isCurrentMonth ? 'black' : 'darkgrey',
                          fontWeight: isSelected ? 'bold' : 'normal',
                          borderRadius: '3px',
                        }}
                      >
                        {currentDate.getDate()}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '10px',
        }}
      >
        <button
          onClick={onClose}
          style={{
            backgroundColor: 'darkgray',
            color: 'white',
            borderRadius: '3px',
            padding: '5px 10px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Calendar;
