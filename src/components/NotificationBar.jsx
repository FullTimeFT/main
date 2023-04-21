import React, { useState } from 'react';

const NotificationBar = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`notification-bar bg-gray-900 ${
        isOpen ? 'fixed shadow-lg border border-rounded-lg border-white' : ''
      }`}
      style={{
        top: isOpen ? '16px' : '',
        right: isOpen ? '0px' : '-300px',
        top: !isOpen ? '50000px' : '',
        right: !isOpen ? '' : '',
      }}
    >
      <div className="notification-header bg-gray-900">
        <p className="notification-title text-gray-400">{userName}</p>
        <hr className="notification-line" />
        <button className="notification-close" onClick={handleClose}>
          &#x2715;
        </button>
        <div
          className="notification-triangle"
          style={{
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '20px solid #333333',
          }}
        ></div>
      </div>
      <div className="notification-content">
        <p>Here are your notifications.</p>
      </div>
    </div>
  );
};

export default NotificationBar;
