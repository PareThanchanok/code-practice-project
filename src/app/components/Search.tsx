'use client';
import { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    email: string; 
    phone: number;
}

export default function Search({id, name, email, phone}: User) {

    const [users, setUsers] = useState<User[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const filterUsers = (name: string) => {
        if (!name) {
            setUsers(allUsers);
        } else{
            setUsers(allUsers.filter((user) => user.name.toLowerCase().startsWith(searchTerm.toLowerCase())));  
        }
        
    }

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await res.json();
            console.log(json);
            setUsers(json);
            setAllUsers(json);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (!searchTerm) {
            setUsers(allUsers);
        } else {
            filterUsers(searchTerm);
        }

    }, [searchTerm, allUsers]);

    return(
        <div className="section-wrapper">
            <div className="flex gap-8 items-center mb-8">
                <input 
                type="text"
                value={searchTerm}
                placeholder="Search the patient's name"
                className="p-4 w-fit border"
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="px-6 py-4 bg-green-300 rounded-md" onClick={() => filterUsers(searchTerm)}>Search</button>
            </div>
            
            <h2>Users</h2>
            <ul className="border-t py-8 space-y-4 mt-2">
                {users.map((user) => 
                    <li key={user.id} className="flex gap-8 p-8 hover:bg-green-200 cursor-pointer">
                        <p className="font-bold">{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </li>
                )}
            </ul>
        </div>
    );
}