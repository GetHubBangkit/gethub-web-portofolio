const notFoundUser = ({message}) => {
    return (
        <div className="h-full bg-red-500 flex items-center justify-center"> 
          <h1 className="text-white text-2xl font-bold">
            {message}
          </h1>
        </div>
      );

    
}

export default notFoundUser;