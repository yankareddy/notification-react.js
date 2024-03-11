const Notification = props => {
  //  Write your code here.
  return (
    <li className={`${props.className}`}>
      <img src={`${props.image}`} className={`${props.imageClass}`} />
      <p className='para'>{props.textContent}</p>
    </li>
  )
}

const element = (
  //  Write your code here.
  <div className='main-container'>
    <h1 className='heading'>Notification</h1>
    <ul className='notification-container'>
      <Notification
        className='box1'
        image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        imageClass='image'
        textContent='Information Message'
      />
      <Notification
        className='box2'
        image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        imageClass='image'
        textContent='Success Message'
      />
      <Notification
        className='box3'
        image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        imageClass='image'
        textContent='Warning Message'
      />
      <Notification
        className='box4'
        image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        imageClass='image'
        textContent='Error Message'
      />
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
