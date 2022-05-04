import React, { HTMLProps, useState } from "react";
import "./style.scss";
import logo from 'assets/images/logo.svg';
import todo from 'assets/images/icon-todo.svg';
import calendar from 'assets/images/icon-calendar.svg';
import reminder from 'assets/images/icon-reminders.svg';
import plan from 'assets/images/icon-planning.svg';

interface Props extends HTMLProps<HTMLAllCollection> {
    iconClass: number,
    handleOpenMenu: (value: number) => void
}

export const NavBar: React.FC<Props> = ({iconClass, handleOpenMenu}) => {
	const [showNav, setShowNav] = useState<boolean>(false);
    const handleNavElement = () => setShowNav((showNav) => !showNav);
  return (
    <nav className={"navbar"}>
			<div className={"content"}>
				<div className={"logo"}>
					<img src={logo} alt="shortly logo"/>
				</div>
			  <ul className={"menu_list"} id={`${showNav ? "active" : undefined}`}>
					<ul className="all_links">
                        <li onClick={() => handleOpenMenu(1)} className="features">
                            Features <i className={`ml-1 fa-solid text-sm fa-chevron-${iconClass === 1 ? "up" : "down"}`}></i>
                            <ul id={iconClass === 1 ? "show" : undefined}>
                                <li>
                                  <img src={todo} alt="todo List"/>
                                    Todo List
                                </li>
                                <li>
                                    <img src={calendar} alt="calendar"/>
                                    Calendar
                                </li>
                                <li>
                                    <img src={reminder} alt="reminder"/>
                                    Reminders
                                </li>
                                <li>
                                    <img src={plan} alt="plan"/>
                                    Planning
                                </li>
                            </ul>
                        </li>  
                        <li onClick={() => handleOpenMenu(2)} className="pricing">
                            Pricing <i className={`ml-1 text-sm fa-solid fa-chevron-${iconClass === 2 ? "up" : "down"}`} ></i>
                            <ul id={iconClass === 2 ? "show" : undefined}>
                                <li>History</li>
                                <li>Our Team</li>
                                <li>Blog</li>
                            </ul>
                        </li>  
						<li>Careers</li> 
						<li>About</li> 
					</ul>
					<div
						className={"icon"}
						id={"cancel_btn"}
						onClick={() => setShowNav((showNav) => !showNav)}>
						<i className="fas fa-times fa-lg"></i>
					</div>
					<ul className="user_buttons">
                        <li onClick={handleNavElement}>
                            <a href="#login">Login</a>
                        </li>
                        <li onClick={handleNavElement}>
                            <a className={"active"} href="#signup">Register</a>
                        </li>
					</ul>
				</ul>
				<div
					className={"icon"}
					id={`${showNav && "hide"}`}
					onClick={() => setShowNav((showNav) => !showNav)}>
					<i className="fas fa-bars fa-lg"></i>
				</div>
			</div>
		</nav>
  )
}
