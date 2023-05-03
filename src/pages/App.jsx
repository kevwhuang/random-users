import React from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import User from '../components/User';

function App() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        (async function getUsers() {
            const data = [];
            const res = await axios.get('https://randomuser.me/api/?results=100&nat=us');

            res.data.results.forEach(u => {
                data.push({
                    name: `${u.name.first} ${u.name.last}`,
                    location: `${u.location.city}, ${u.location.state}`,
                    photo: u.picture.large,
                    dob: new Date(u.dob.date).toLocaleDateString(),
                    phone: u.phone.replaceAll(' ', '-').replaceAll(/[()]/g, ''),
                    email: u.email,
                });
            });

            setUsers(data);
        }());
    }, []);

    return (
        <ul>
            {users.map(u => <User key={uuid()} u={u} />)}
        </ul>
    );
}

export default App;
