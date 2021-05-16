import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllContacts } from '../store/actions/Contact';

function ContactList() {
    const dispatch = useDispatch();
    const contactList = useSelector(state => state.contactState.contact);

    useEffect(() => {
        dispatch(getAllContacts());
    }, [dispatch]);

    return (
        <div className="mt-3 container-fluid w-100">
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Phone No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactList.map((contact, index) => {
                            return <tr key={contact.id}>
                                <td>{index + 1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.phoneNo}</td>
                                <td>
                                    <Link to={`/edit-contact/${contact.id}`}>
                                        <i class="pr-3 bi bi-pencil-square"></i>
                                    </Link>
                                    <i class="bi bi-trash"></i>
                                </td>
                            </tr>
                        })
                    }
                    {
                        contactList.length === 0 ? <tr>No more Contacts</tr> : ''
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ContactList
