const ErrorMessage = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='errorM'>
        {message}
      </div>
    )
  }
  export default ErrorMessage
