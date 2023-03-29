import { useState } from 'react';


const NotificationBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`notification-bar ${isOpen ? 'fixed border border-rounded-lg border-gray-500' : ''}`} style={{ 
        top: isOpen ? '110px' : '', 
        right: isOpen ? '0px' : '-300px' 
    }}>
      <div className="notification-header">
        <p className="notification-title">Notifications</p>
        <button className="notification-close" onClick={handleClose}>
          &#x2715;
        </button>
      </div>
      <div className="notification-content">
        <p>Here are your notifications.</p>
      </div>
    </div>
  );
};

export default NotificationBar;