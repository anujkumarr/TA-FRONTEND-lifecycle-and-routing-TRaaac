function RandomUser(props) {
 let fullName = props.user.name.title +" "+ props.user.name.first+" "+ props.user.name.last;
  return (
    <>
      <div className="card container">
        <div className="img">
          <img
            className="width"
            src={props.user.picture.large}
            alt={props.user.cell}
          />
        </div>
        <p>{fullName}</p>
        <div>
          <h4>{props.getValue}</h4>
        </div>
        <ul className="flex">
          <li>
            <i
              onClick={() => props.randomUser('user')}
              className="fas fa-user"
            ></i>
          </li>
          <li>
            <i
              onClick={() => props.randomUser('email')}
              className="fas fa-envelope"
            ></i>
          </li>
          <li>
            <i
              onClick={() => props.randomUser('age')}
              className="fab fa-magento"
            ></i>
          </li>
          <li>
            <i
              onClick={() => props.randomUser('address')}
              className="fas fa-map"
            ></i>
          </li>
          <li>
            <i
              onClick={() => props.randomUser('phone')}
              className="fas fa-phone"
            ></i>
          </li>
          <li>
            <i
              onClick={() => props.randomUser('password')}
              className="fas fa-lock"
            ></i>
          </li>
        </ul>
        <div>
          <button onClick={props.getRandom}>Random User</button>
        </div>
      </div>
    </>
  );
}
export default RandomUser;
