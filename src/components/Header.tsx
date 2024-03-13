
const Header = () => {
  return (
    <div className="py-4 flex items-center justify-center border-b">
        <ul className="flex items-center space-x-6">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/compare">Compare</a>
            </li>
        </ul>
    </div>
  )
}

export default Header;