
import React, { useState, useEffect } from "react";
import Forms from "./Forms";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : [];
};

export const Home = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("");
  const [list, setList] = useState(loadFromLocalStorage);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      name,
      number,
      category,
    };

    if (name.trim() === "") {
      alert("Contact Name cannot be blank.");
    } else if (name.length > 15) {
      alert("Limit of Contact Name is 15.");
    } else if (number.trim() === "") {
      alert("Contact Number cannot be blank.");
    } else if (number.length < 10) {
      alert("Limit for Contact Number is 10.");
    } else if (number.length > 10) {
      alert("Limit for Contact Number is Less Than 10.");
    } else {
      if (!edit) {
        setList([...list, newItem]);
      } else {
        setList(
          list.map((el) => (el.id === editId ? { ...el, name, number } : el))
        );
        setEditId("");
        setEdit(false);
      }

      setName("");
      setNumber("");
      setError("");
    }
  };

  const filteredList = list.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" style={{ padding: 10 }}>
        <Container >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex ml-auto">
              <FormControl
                type="search"
                placeholder="Search Contact"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="success" onClick={handleSubmit}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Forms
        error={error}
        name={name}
        setName={setName}
        setNumber={setNumber}
        setCategory={setCategory}
        number={number}
        category={category}
        handleSubmit={handleSubmit}
      />

      <Item
        list={filteredList}
        setCategory={setCategory}
        setList={setList}
        setName={setName}
        setNumber={setNumber}
        setEdit={setEdit}
        setEditId={setEditId}
      />
    </>
  );
};

export default Home;
