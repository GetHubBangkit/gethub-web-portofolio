const notFoundUser = ({message}) => {
    return (
        <div className="h-full flex items-center justify-center" style={{ backgroundColor: '#033047' }}>  
          <h1 className="text-white text-2xl font-bold">
            {message}
          </h1>
        </div>
      );

    
}

export default notFoundUser;