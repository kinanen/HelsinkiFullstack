
const Message = ({message, success}) => {
    if (message === null) {
        return null;
    }
    if(success){
        return (
            <div className="failMessage">
                {message}
            </div>  
        )
    }
    return (
        <div className="message">
            {message}
        </div>  

    )   
}

export default Message