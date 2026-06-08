export default function TopHeader({toggle, setToggle}) {
    return (
        <div className="top-header">
          <div onClick={() => setToggle(prev => !prev)} className="sidebar-icon">
            { toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i> }
          </div>
          <div className="phone">
            <i className="bi bi-telephone-fill"></i>
            123-456-789
          </div>
          <h1>Good Book</h1>
          <div className="login">
            <i className="bi bi-person-fill"></i>
            Login
          </div>
        </div>
    ); 
}