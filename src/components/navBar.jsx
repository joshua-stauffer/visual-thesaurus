export function NavBar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <a href="http://localhost:5000">Home</a>
        </li>
        <li>
          <a href="http://localhost:5000/videos">Videos</a>
        </li>
        <li>          
          <a href="#" className="active">Thesaurus</a>
        </li>
        <li>
          <a href="http://localhost:5000/blog-0">Blog </a>
        </li>
        <li>          
          <a href="http://localhost:5000/resources">Resources</a>
        </li>
        <li>          
          <a href="http://localhost:5000/about">About</a>
        </li>
        <li>          
          <a href="http://localhost:5000/contact">Contact </a>
        </li>
      </ul>
    </nav>
  )
}