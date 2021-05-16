import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import{ addContact } from '../store/actions/Contact'

function AddContact() {
    const name = useRef();
    const phoneNo = useRef();
    const dispatch = useDispatch();
    
    function addContactDetail(event) {
        event.preventDefault();
        dispatch(addContact({
            name: name.current.value,
            phoneNo: phoneNo.current.value,
        }));
    }

    return (
        <div className="w-50 p-3">
            <form id="addContactForm" name="addContactForm" onSubmit={addContactDetail}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" required="true" id="name" name="name" ref={name} />
                </div>
                <div className="form-group">
                    <label for="phoneNo">Phone No</label>
                    <input type="phoneNo" className="form-control" id="phoneNo" required="true" name="phoneNo" ref={phoneNo} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Add Contact</button>
                </div>
            </form>
        </div>
    )
}

export default AddContact
