export const DashBoard = () => {

    const isLoggedIn = true
    const isAdmin = true
    const userName = "Krsihna"
	return (
		<>
			<h1>Dashboard</h1>
            {isLoggedIn ? <h3>Welcome, {userName}!</h3> : <p>Please log in to access the dashboard.</p>}
            {isLoggedIn && isAdmin && <p>🔒 You have admin privileges.</p>
            }
		</>
	);
};
