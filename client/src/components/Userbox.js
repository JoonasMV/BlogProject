import { Link, useLocation } from "react-router-dom"
import { Username } from "../css/Userbox"
import { StyledButton } from "../css/Banner"

const Userbox = ({ user, setUser }) => {
  const location = useLocation()

  const logout = () => {
    sessionStorage.clear()
    setUser({ username: null, id: null })
  }

  return (
    <>
      <Link to={`user/${user.id}`} style={{ textDecoration: "none" }}>
        <Username>{user.username}</Username>
      </Link>
      {location.pathname !== "/newBlog" && (
        <Link to="/newBlog">
          <StyledButton>New blog</StyledButton>
        </Link>
      )}
      <StyledButton onClick={logout}>Log out</StyledButton>
    </>
  )
}

export default Userbox
