import { type FC } from "react"
import { NavLink } from "react-router-dom"

import styles from "./Navbar.module.css"
import CONFIG from "./Navbar.json"

const Navbar: FC = () => {
	var isLoggedIn = false

	return (
		<nav className={`${styles.navbar}`}>
			<div className={`${styles.navbar_wrapper}`}>
				<div className={`${styles.logo}`}>JSON Prettifier</div>
				<ul className={`${styles.links}`}>
					{CONFIG &&
						CONFIG.map((conf) => {
							return (
								<>
									{conf.isPublicRoute === true ? (
										<li key={conf.id} className={`${styles.link}`}>
											<NavLink className={`${styles.a}`} to={conf.path}>
												{conf.label}
											</NavLink>
										</li>
									) : (
										isLoggedIn === true && (
											<li key={conf.id} className={`${styles.link}`}>
												<NavLink className={`${styles.a}`} to={conf.path}>
													{conf.label}
												</NavLink>
											</li>
										)
									)}
								</>
							)
						})}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
