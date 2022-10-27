import logo from '../assets/airplane.png'

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" className='nav--logo' />
      <h1>My travel journal</h1>
    </nav>
  );
}
