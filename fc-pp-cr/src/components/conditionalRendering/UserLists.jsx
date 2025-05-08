export function UserLists() {

	const users = [
		{ id: "1", name: "Krishna", age: "20" },
		{ id: "2", name: "Radha", age: "20" },
		{ id: "3", name: "Mahaprabhu", age: "20" },
		{ id: "4", name: "Nityananda", age: "20" },

	]
	return (
		<>
			<RenderUsers users = {users}/>
		</>
	)
}

function RenderUsers({ users }) {
	return (
		<>
			<div>
				<h2>Users List</h2>
				<ul>
					{users.map(user => (
						<UserCard name = {user.name} age = {users.age}/>
					))}
				</ul>
			</div>
		</>
	)
}


function UserCard({ name, age }) {
  return (
    <li>
      Name: {name}, Age: {age}
    </li>
  );
}