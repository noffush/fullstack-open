const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }
  const messageStyle = {
    color: type === 'success' ? 'green' : 'red'
  };

  return (
    <div className='message' style={messageStyle}>
      {message}
    </div>
  );
}

export default Notification;
