import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import { v4 as uuid } from "uuid"

const Edit = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")

    let history = useNavigate()

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id)

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;

        history("/")
    }

    useEffect(() => {
        setName(localStorage.getItem("Name"))
        setAge(localStorage.getItem("Age"))
        setId(localStorage.getItem("Id"))
    }, [])


    return (
        <>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlld="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={((e) => setName(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlld="formAge">
                    <Form.Control type="number" placeholder="Enter Age" value={age} required onChange={((e) => setAge(e.target.value))}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </>
    )
}

export default Edit
