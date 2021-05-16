import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getContactById, updateContact } from '../store/actions/Contact';

function EditContact() {
    const { id } = useParams();
    const state = useSelector(state => state.contactState.selectedContact);
    const [name, setName] = useState(state?.name || '');
    const [phoneNo, setPhoneNo] = useState(state?.phoneNo || '');
    const dispatch = useDispatch();

    function updateContactDetail(event) {
        event.preventDefault();
        dispatch(updateContact(id, {
            name,
            phoneNo,
        }));
    }

    useEffect(() => {
        dispatch(getContactById({
            id
        }));
    }, [dispatch]);

    return (
        <div className="w-50 p-3">
            <form id="addContactForm" name="addContactForm" onSubmit={updateContactDetail}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" required="true" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="phoneNo">Phone No</label>
                    <input type="phoneNo" className="form-control" id="phoneNo" required="true" name="phoneNo" value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Update Contact</button>
                </div>
            </form>
        </div>
    )
}

export default EditContact
