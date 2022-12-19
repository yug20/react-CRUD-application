import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import { v4 as uuid } from "uuid"

const Add = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    let history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name;
        let b = age;

        Employees.push({ id: uniqueId, Name: a, Age: b });

        history("/")
    }

    return (
        <>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlld="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={((e) => setName(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formAge">
                    <Form.Control type="number" placeholder="Enter Age" required onChange={((e) => setAge(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>

        </>
    )
}

export default Add
