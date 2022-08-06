
const Notification = (props) => {
  //  Write your code here.
  const {className, iconLink, text} = props; //adding the properties to the component
  const selectedClassName = `notification-container ${className}`

  return {
      //just like how we write in html we write here in components
      <div className = {selectedClassName}>
          <img className = "icon" src={iconLink}/>
          <p className = "message">{text}</p>
      </div>
  }
}

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className = "notification-container">
    <Notification 
    className="primary-container" 
    iconLink = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    text = "Information Message"
    />
    <Notification 
    className = "success-container"
    iconLink ="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    text = "Success Message"
    />
    <Notification className="warning-container"
    iconLink = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    text = "Warning Message"
    />
    <Notification className="danger-container"
    iconLink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    text = "Danger Message"
    />
    </div>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
