export const UserList = (props) => {
    return props.users.map(user =>
        <li key={user.id}>{user.name}</li>);
}