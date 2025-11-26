import { useState } from "react";
import {
    FiChevronDown,
    FiMenu,
    FiX,
    FiUsers,
} from "react-icons/fi";
import {
    FaLaptopCode,
    FaMobileAlt,
    FaRobot,
    FaTools,
    FaChartLine,
    FaBullhorn,
    FaHospitalAlt,
    FaCarAlt,
    FaIndustry,
    FaRegNewspaper,
    FaBriefcase,
    FaUniversity,
    FaSchool,
    FaHandshake,
    FaBuilding,
    FaCamera,
    FaBroom,
    FaHardHat,
    FaSpa,
    FaRing,
    FaMoon,
    FaFilm,
    FaMailBulk,
    FaSms,
    FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const linkBase =
        "relative text-sm xl:text-base tracking-wide transition-all duration-200";

    const linkHover =
        "hover:text-[#1fb6ff] hover:drop-shadow-[0_0_8px_rgba(31,182,255,0.6)]";

    const desktopLink =
        linkBase +
        " " +
        linkHover +
        " pb-1 border-b-2 border-transparent hover:border-[#1fb6ff]";

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* glassy gradient background */}
            <div className="bg-[linear-gradient(90deg,#001230_0%,#02408A_45%,#01224C_100%)] backdrop-blur-xl border-b border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.6)]">
                <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
                    {/* LOGO */}
                    <div className="relative inline-block
    before:absolute before:inset-0 before:rounded-full before:blur-[45px]
    before:bg-gradient-to-r before:from-[#00baff]/30 before:via-[#ff8c1a]/22 before:to-[#00baff]/28 before:-z-10
    after:absolute after:inset-0 after:rounded-full after:blur-[25px]
    after:bg-gradient-to-r after:from-[#00e0ff]/50 after:to-[#ff9a2c]/50 after:-z-10">

  <img
    src="/aaa.png"
    alt="CWH PRO Solution"
    className="
      relative z-10
      h-18 md:h-20 lg:h-24     /* 🔥 Just slightly smaller */
      w-auto object-contain
      drop-shadow-[0_8px_22px_rgba(0,0,0,0.45)]
      brightness-110 contrast-110
    "
  />
</div>



                    {/* DESKTOP NAV */}
                    <ul className="hidden lg:flex items-center gap-7 xl:gap-10 font-inter text-white">
                        {/* Home */}
                        <li>
                            <a href="#home" className={desktopLink}>
                                Home
                            </a>
                        </li>

                        {/* About Us dropdown */}
                        <li className="relative group">
                            <button className={desktopLink + " flex items-center gap-1"}>
                                About Us
                                <FiChevronDown className="w-4 h-4" />
                            </button>

                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 rounded-2xl bg-[#031531] 
                  shadow-[0_20px_60px_rgba(0,0,0,0.7)] py-4 px-5
                  opacity-0 invisible translate-y-3
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300 ease-out"
                            >
                                <p className="mb-3 font-semibold text-[#1fb6ff] flex items-center gap-2 text-sm">
                                    <FiUsers className="w-5 h-5" />
                                    <span>About Us</span>
                                </p>
                                <ul className="space-y-2 text-sm text-gray-100">
                                    <li>
                                        <a href="#our-company" className={linkHover}>
                                            Our Company
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#why-us" className={linkHover}>
                                            Why Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#our-team" className={linkHover}>
                                            Our Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#faq" className={linkHover}>
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#case-studies" className={linkHover}>
                                            Case Studies
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* IT-Services mega menu */}
                        <li className="relative group">
                            <button className={desktopLink + " flex items-center gap-1"}>
                                IT-Services
                                <FiChevronDown className="w-4 h-4" />
                            </button>

                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[980px] max-w-[95vw] 
                  rounded-3xl bg-[#031531] shadow-[0_24px_80px_rgba(0,0,0,0.85)]
                  py-6 px-7 opacity-0 invisible translate-y-3
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300 ease-out"
                            >
                                <div className="grid md:grid-cols-4 gap-7 text-sm text-gray-100">
                                    {/* Website development */}
                                    <div>
                                        <h3 className="font-jakarta text-lg font-semibold text-[#1fb6ff] mb-3 flex items-center gap-2">
                                            <FaLaptopCode className="w-5 h-5" />
                                            <span>Website development</span>
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>Custom Website Design &amp; Development</li>
                                            <li>E-Commerce Website Development</li>
                                            <li>Wordpress Website Development</li>
                                            <li>Landing Page Development</li>
                                            <li>Website Maintenance &amp; Support</li>
                                        </ul>
                                    </div>

                                    {/* Mobile & Desktop */}
                                    <div>
                                        <h3 className="font-jakarta text-lg font-semibold text-[#1fb6ff] mb-3 flex items-center gap-2">
                                            <FaMobileAlt className="w-5 h-5" />
                                            <span>Mobile &amp; Desktop Apps</span>
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>Android App Development</li>
                                            <li>IOS App Development</li>
                                            <li>Desktop App Development</li>
                                            <li>E-commerce App Development</li>
                                            <li>App Maintenance &amp; Support</li>
                                        </ul>
                                    </div>

                                    {/* Custom Development */}
                                    <div>
                                        <h3 className="font-jakarta text-lg font-semibold text-[#1fb6ff] mb-3 flex items-center gap-2">
                                            <FaRobot className="w-5 h-5" />
                                            <span>Custom Development</span>
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>Custom Software</li>
                                            <li>AR VR Development</li>
                                            <li>Artificial Intelligence</li>
                                            <li>Web Scrapper Development</li>
                                            <li>Chrome Extension</li>
                                        </ul>
                                    </div>

                                    {/* Other Services */}
                                    <div>
                                        <h3 className="font-jakarta text-lg font-semibold text-[#1fb6ff] mb-3 flex items-center gap-2">
                                            <FaTools className="w-5 h-5" />
                                            <span>Other Services</span>
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>UI/UX Design</li>
                                            <li>Shopify App Development</li>
                                            <li>Maintenance Support</li>
                                            <li>Embedded Systems</li>
                                            <li>Remote Team Extension</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Marketing-Services mega menu */}
                        <li className="relative group">
                            <button className={desktopLink + " flex items-center gap-1"}>
                                Marketing-Services
                                <FiChevronDown className="w-4 h-4" />
                            </button>

                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] max-w-[95vw] 
                  rounded-3xl bg-[#031531] shadow-[0_24px_80px_rgba(0,0,0,0.85)]
                  py-6 px-7 opacity-0 invisible translate-y-3
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300 ease-out"
                            >
                                <div className="grid md:grid-cols-4 gap-7 text-sm text-gray-100">
                                    <div>
                                        <h3 className="font-jakarta text-lg font-semibold text-[#1fb6ff] mb-3 flex items-center gap-2">
                                            <FaChartLine className="w-5 h-5" />
                                            <span>Search Marketing</span>
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>Search Engine Optimization (SEO)</li>
                                            <li>Search Engine Marketing (SEM)</li>
                                            <li>Local SEO</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-jakarta text-lg font-semibold text-[#1fb6ff] mb-3 flex items-center gap-2">
                                            <FaBullhorn className="w-5 h-5" />
                                            <span>Content Marketing</span>
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>Blog Writing</li>
                                            <li>Video Content Creation</li>
                                            <li>Infographics Creation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-jakarta text-lg font-semibold text-[#1fb6ff] mb-3 flex items-center gap-2">
                                            <FaBullhorn className="w-5 h-5" />
                                            <span>Social Media Marketing</span>
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>Social Media Optimization (SMO)</li>
                                            <li>Paid Social Ads</li>
                                            <li>Influencer Collaboration</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-jakarta text-lg font-semibold text-[#1fb6ff] mb-3 flex items-center gap-2">
                                            <FaMailBulk className="w-5 h-5" />
                                            <span>Direct Marketing</span>
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>Email Marketing</li>
                                            <li className="flex items-center gap-2">
                                                <FaSms className="w-4 h-4" /> <span>SMS Marketing</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <FaWhatsapp className="w-4 h-4" />{" "}
                                                <span>WhatsApp Marketing</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Sectors mega menu */}
                        <li className="relative group">
                            <button className={desktopLink + " flex items-center gap-1"}>
                                Sectors
                                <FiChevronDown className="w-4 h-4" />
                            </button>

                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[980px] max-w-[95vw] 
                  rounded-3xl bg-[#031531] shadow-[0_24px_80px_rgba(0,0,0,0.85)]
                  py-6 px-7 opacity-0 invisible translate-y-3
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300 ease-out"
                            >
                                <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-100">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <FaHospitalAlt />
                                            <span>Hospital</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaBuilding />
                                            <span>Insurance</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaUniversity />
                                            <span>Loan</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaBuilding />
                                            <span>RealState</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaSchool />
                                            <span>Education</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <FaHandshake />
                                            <span>ManPower</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaIndustry />
                                            <span>FMCG</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCarAlt />
                                            <span>Automobile</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCamera />
                                            <span>Photography</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaTools />
                                            <span>Machinary</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <FaBullhorn />
                                            <span>Political</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaBuilding />
                                            <span>NGO</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaRegNewspaper />
                                            <span>News</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaBroom />
                                            <span>Cleaning</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaHardHat />
                                            <span>Construction</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <FaIndustry />
                                            <span>Manufacturing</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaSpa />
                                            <span>Wellness</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaRing />
                                            <span>Matrimony</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaMoon />
                                            <span>Astrology</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaFilm />
                                            <span>Entertainment</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="mt-4 text-center text-xs text-[#7ea1ff]">
                                    Grow with our easy work progress
                                </p>
                            </div>
                        </li>

                        {/* Simple links */}
                        <li>
                            <a
                                href="#blogs"
                                className={
                                    desktopLink + " flex items-center gap-2 text-sm xl:text-base"
                                }
                            >
                                <FaRegNewspaper className="w-4 h-4" />
                                <span>Blogs</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#career"
                                className={
                                    desktopLink + " flex items-center gap-2 text-sm xl:text-base"
                                }
                            >
                                <FaBriefcase className="w-4 h-4" />
                                <span>Career</span>
                            </a>
                        </li>
                    </ul>

                    {/* RIGHT SIDE: CONTACT + MOBILE BUTTON */}
                    <div className="flex items-center gap-3">
                        {/* Contact button (desktop) */}
                        <a
                            href="#contact"
                            className="hidden lg:inline-flex bg-white text-[#021024] rounded-full px-7 py-2.5 text-sm xl:text-base font-inter font-semibold
                hover:bg-[#f4f6ff] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)]
                transition-all duration-200"
                        >
                            Contact Us
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-white 
                bg-white/5 hover:bg-white/10 transition-all duration-200"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle navigation"
                        >
                            {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>

                {/* MOBILE MENU PANEL */}
                {mobileOpen && (
                    <div className="lg:hidden border-t border-white/10 bg-[#020717]/98 backdrop-blur-2xl shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
                        <div className="container mx-auto px-4 py-4 space-y-4 text-sm text-gray-100 font-inter">
                            <a
                                href="#home"
                                className="block py-2 hover:text-[#1fb6ff] transition"
                                onClick={() => setMobileOpen(false)}
                            >
                                Home
                            </a>

                            <div>
                                <p className="font-semibold mb-1 flex items-center gap-2 text-[#1fb6ff]">
                                    <FiUsers />
                                    <span>About Us</span>
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <a
                                        href="#our-company"
                                        className="hover:text-[#1fb6ff]"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Our Company
                                    </a>
                                    <a
                                        href="#why-us"
                                        className="hover:text-[#1fb6ff]"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Why Us
                                    </a>
                                    <a
                                        href="#our-team"
                                        className="hover:text-[#1fb6ff]"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Our Team
                                    </a>
                                    <a
                                        href="#faq"
                                        className="hover:text-[#1fb6ff]"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        FAQ
                                    </a>
                                    <a
                                        href="#case-studies"
                                        className="hover:text-[#1fb6ff]"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Case Studies
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold mb-1 flex items-center gap-2 text-[#1fb6ff]">
                                    <FaLaptopCode />
                                    <span>IT-Services</span>
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <span>Website Development</span>
                                    <span>Mobile &amp; Desktop Apps</span>
                                    <span>Custom Development</span>
                                    <span>Other Services</span>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold mb-1 flex items-center gap-2 text-[#1fb6ff]">
                                    <FaChartLine />
                                    <span>Marketing-Services</span>
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <span>Search Marketing</span>
                                    <span>Content Marketing</span>
                                    <span>Social Media Marketing</span>
                                    <span>Direct Marketing</span>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold mb-1 flex items-center gap-2 text-[#1fb6ff]">
                                    <FaIndustry />
                                    <span>Sectors</span>
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <span>Hospital</span>
                                    <span>Insurance</span>
                                    <span>Loan</span>
                                    <span>RealState</span>
                                    <span>Education</span>
                                    <span>ManPower</span>
                                    <span>FMCG</span>
                                    <span>Automobile</span>
                                    <span>Photography</span>
                                    <span>Machinary</span>
                                    <span>Political</span>
                                    <span>NGO</span>
                                    <span>News</span>
                                    <span>Cleaning</span>
                                    <span>Construction</span>
                                    <span>Manufacturing</span>
                                    <span>Wellness</span>
                                    <span>Matrimony</span>
                                    <span>Astrology</span>
                                    <span>Entertainment</span>
                                </div>
                            </div>

                            <a
                                href="#blogs"
                                className="block pt-1 hover:text-[#1fb6ff] transition flex items-center gap-2"
                                onClick={() => setMobileOpen(false)}
                            >
                                <FaRegNewspaper className="w-4 h-4" />
                                <span>Blogs</span>
                            </a>
                            <a
                                href="#career"
                                className="block hover:text-[#1fb6ff] transition flex items-center gap-2"
                                onClick={() => setMobileOpen(false)}
                            >
                                <FaBriefcase className="w-4 h-4" />
                                <span>Career</span>
                            </a>

                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white text-[#021024] py-2.5 text-sm font-semibold hover:bg-[#f4f6ff] transition"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
