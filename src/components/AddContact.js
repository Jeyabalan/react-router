import React from 'react'

function AddContact() {

    function addContact() {
        
    }

    return (
        <div class="w-50 p-3">
            <form onSubmit={addContact}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="name" class="form-control" required="true" id="name" />
                </div>
                <div class="form-group">
                    <label for="phoneNo">Phone No</label>
                    <input type="phoneNo" class="form-control" id="phoneNo" required="true" />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" type="submit">Add Contact</button>
                </div>
            </form>
        </div>
    )
}

export default AddContact
