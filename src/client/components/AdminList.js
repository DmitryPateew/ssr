export const AdminList = () => {
    return props.admins.map(admin =>
        <li key={admin.id}>{admin.name}</li>);
}