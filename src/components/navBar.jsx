export function NavBar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <a href="http://localhost:5000/video">Watch the Film </a>
        </li>
        <li>          
          <a href="#" className="active">Visual Thesaurus</a>
        </li>
        <li>
          <a href="http://localhost:5000/blog">Blog </a>
        </li>
        <li>          
          <a href="http://localhost:5000/about">About the Author </a>
        </li>
        <li>          
          <a href="http://localhost:5000/contact">Contact </a>
        </li>
      </ul>
    </nav>
  )
}