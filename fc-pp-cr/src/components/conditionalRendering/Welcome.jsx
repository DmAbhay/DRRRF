

export function Welcome1({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h2>Welcome back!</h2>;
    } else {
        return <h2>Please log in. </h2>;
    }
}


export function Welcome2({ isLoggedIn }) {
    return (
        <h2>{isLoggedIn ? 'Welcome back!' : 'Please log in. jai ho'}</h2>
    );
}
