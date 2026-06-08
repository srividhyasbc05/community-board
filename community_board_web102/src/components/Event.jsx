import './Event.css';

const Event = (props) => {
  return (
    <div className = "event-card">
        <div className= "event-type">
            <p className= "tag"> {props.type}</p>
        </div>
        
        <img className = " event-image" src={props.src}></img>
        <div className = "event-info">
            <h5 className= "event-name">{props.event}</h5>
            <h6 className = "event-text"> {props.area} </h6>
            <h6 className = "event-text"> {props.time} </h6>
            
        </div>
        <div className = "event-footer">
                <button className = "event-directions-btn"> Directions </button>
                <button className = "event-add-btn"> + </button>
            </div>
        
        

    </div>
    )
}
export default Event;
