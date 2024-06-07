const notFoundUser = ({message}) => {
    return (
        <div className="h-full flex items-center justify-center" style={{ backgroundColor: '#033047', minHeight : '100vh'}}>  
<h1 className=" w-full  flex text-white md:text-2xl sm:text-sm font-bold items-center justify-center">
  {message}
</h1>
        </div>
      );

    
}

export default notFoundUser;