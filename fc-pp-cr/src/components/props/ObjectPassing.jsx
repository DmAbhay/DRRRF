export function UserCard1({ user }) {
    return (
        <div>
            <h2>Name : {user.name}</h2>
            <h2>Email : {user.email}</h2>
            <h2>Age : {user.age}</h2>
        </div>
    )
}


export function UserCard2({ user: { name, email, age } }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '16px',
            borderRadius: '8px',
            margin: '10px',
            width: '250px',
            boxShadow: '2px 2px 12px rgba(0,0,0,0.1)'
        }}>
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
            <h2>Age : {age}</h2>
        </div>
    )
}



