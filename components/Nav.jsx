import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <section className="nav-top">
          <div className="nav-top-left">
            <Image
              className="logo"
              src="logo3.svg"
              width={200}
              height={200}
              // alt={user?.name ?? "Profile Pic"}
              priority="true"
            />
            {/* <Menu toggleMenu={toggleMenu} onClick={toggleMenu} isOpen={menuVisible}></Menu>
              {auth?.user ? <Link to={'home/genero/hombre'}><AiOutlineMan className='gender-icon' color='#0d3f71' fontSize={35}/></Link> : <Link to={'genero/hombre'}><AiOutlineMan className='gender-icon' color='#0d3f71' fontSize={35}/></Link>}
              {auth?.user ? <Link to={'home/genero/mujer'}><AiOutlineWoman className='gender-icon' color='pink' fontSize={35}/></Link> : <Link to={'genero/mujer'}><AiOutlineWoman className='gender-icon' color='pink' fontSize={35}/></Link>}
            </div>
            {auth?.user ? <Link to={'/home'}><img src="/logo3.svg" className='logo' alt='logo'/></Link> : <Link to={'/'}><img src="/logo3.svg" className='logo' alt='logo'/></Link>}
            <div className='nav-top-right'>
            <Link to={'/sesion'}><BsInstagram className='user-icon' fontSize={30}/></Link>
              <div className='cart-icon'>{cartIcon()}</div>
              <Link to={'/Login2'}><BiUser className='user-icon' fontSize={35}/></Link> */}
          </div>
        </section>

        <section className="nav-bottom">
          <ul className="navbar">
            <li className="nav-admins">
              <Link href="/admin">Admin</Link>
            </li>

            <li className="nav-mujer">
              <Link href="/genero/mujer">Mujer</Link>
            </li>
            <li className="nav-hombre">
              <Link href="/genero/hombre">Hombre</Link>
            </li>
            <li className="nav-admin">
              <Link href="/tipo/faldas">Faldas</Link>
            </li>
            <li className="nav-admin">
              <Link href="/tipo/pantalon">Pantalones</Link>
            </li>
            <li className="nav-admin">
              <Link href="/tipo/franela">Franelas</Link>
            </li>

            {/* {auth.user ? <button className='logout' onClick={signOut}>Salir de sesion</button> : <li><Link className='login-button' to={"/inicio"}>Login</Link></li>}
                {!auth.user && <li><Link className='login-button' to={"/register"}>Registro</Link></li>} */}
          </ul>

          <div className="nav-link-search">
            <div className="search-nav">
              <form
                style={{ paddingBottom: "0" }}
                name="search search-relative"
                className=" search-relative-nav"
              >
                <input
                  type="text"
                  className="input-search-nav "
                  onChange={(e) => setSearchQuery(e.target.value)}
                  name="txt"
                />
                <LiaSearchSolid
                  fontSize={25}
                  style={{ top: "50%" }}
                  className="search-button-nav"
                />
              </form>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
