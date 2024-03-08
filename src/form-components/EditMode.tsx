import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    /***
     * 2 states controlled by a switch
     *      :default state shows text indicating the user's name and if they are a student
     *      :alternate state is an editable form for editing the user's name and whether they are a student
    
     * need state for component being in edit mode, user's name and whether or not student
     * edit mode should be controlled by a switch
     * initially component is NOT in edit mode, the user's name is Your Name (user IS a student)
     * when not in edit mode, the text of component must include Your Name is a student or Your Name is not a student
     * whether or not a student should be controlled by a checkbox
     */

    const [edit, setEdit] = useState<boolean>(false);
    const [user, setUser] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
        setUser(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit?"
                checked={edit}
                onChange={updateEdit}
            />
            {edit ? (
                <div>
                    <Form.Control
                        type="text"
                        value={user}
                        onChange={updateUser}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                </div>
            ) : (
                <p>
                    {user} is {student ? "a student" : "not a student"}.
                </p>
            )}
        </div>
    );
}
