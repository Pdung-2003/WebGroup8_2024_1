import React, { useEffect, useState } from "react";
import { isSignedIn } from "../../function/auth";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [signedIn, setSignedIn] = useState(isSignedIn());
  const [top, setTop] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setSignedIn(!!token);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setSignedIn(false);
    window.location.href = "/";
  };

  return (
    <header className={`sticky top-0 z-50 ${!top && "drop-shadow-md"}`}>
      <nav className="border-2">
        <div className="container-fluid bg-base-100 md:px-24">
          <div className="navbar">
            <div className="navbar-start">
              <a href="/" className="flex flex-row items-center justify-start">
                <div className="w-8 md:w-12">
                  <img src={logo} alt="Logo" className="img" />
                </div>
                <div className="mx-1 be-vietnam-pro-black tracking-widest text-xl md:text-3xl">CINEMAX</div>
              </a>
            </div>
            <div className="navbar-end">
              {signedIn ? (
                <>
                  <div className="avatar">
                    <div className="w-7 md:w-9 rounded-full">
                      <img
                        src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <span className="mx-2 text-xs md:text-lg">Username</span>
                  <span>|</span>
                  <a
                    href="/auth/signin"
                    className="mx-2 text-sm md:text-lg be-vietnam-pro-bold"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </a>
                </>
              ) : (
                <a
                  href="/auth/signin"
                  className="btn btn-sm btn-primary text-white"
                >
                  Đăng nhập
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
