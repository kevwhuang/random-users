import { useState } from 'react';

function User({ u }) {
    const [isDetails, setIsDetails] = useState(false);

    function toggleDetails() {
        setIsDetails(!isDetails);
    }

    return (
        <li>
            <img src={u.photo} alt={`A photo of ${u.name}.`} />
            <div>
                <div>
                    <p>{u.name} &nbsp;|&nbsp; {u.location}</p>
                </div>
                <div onClick={toggleDetails}>
                    <section style={isDetails ? { display: 'none' } : { display: 'block' }}>
                        &lt; show details &gt;
                    </section>
                    <section style={isDetails ? { display: 'block' } : { display: 'none' }}>
                        <p>DOB: {u.dob}</p>
                        <p>{u.phone}</p>
                        <p>{u.email}</p>
                    </section>
                </div>
            </div>
        </li>
    );
}

export default User;
