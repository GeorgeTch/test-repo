import "./Profile.css";

function Profile() {
  const profileInfo = {
    name: "Jakob",
    lastName: "Simpson",
    email: "SimpsonJ@gmail.com",
  };
  return (
    <div className="profile-container">
      <div className="static-profile-info">
        <ul>
          <li>Name: {profileInfo.name}</li>
          <li>Last Name: {profileInfo.lastName}</li>
          <li>Email: {profileInfo.email}</li>
        </ul>
      </div>
      <form className="profile-form" action="">
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Profile;
