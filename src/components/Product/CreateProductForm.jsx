import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../auth/index";
import { createItem } from "../../api/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

export default function CreateItem() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [item, setItem] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    color: "",
    categories: ["ELECTRONICS", "GAMES", "FASHION", "CARS", "Toys", "Home", "Books", "PETS", "FOOD", "OTHER"],
    title: "",
    image: "",
    description: "",
    quantity: "",
    color: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
  });
  const { user, token } = isAuthenticated();
  const { title, description, price, categories, quantity, image, color, loading, error, createdProduct, redirectToProfile } = item;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setItem({
      ...item,
      [name]: value,
      loading: false,
      createdProduct: "",
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setItem({
      ...item,
      error: "",
      loading: true,
    });
    createItem(token, item).then((data) => {
      if (data.error) {
        setItem({
          ...item,
          error: data.error,
        });
      } else {
        setItem({
          ...item,
          title: "",
          description: "",
          image: "",
          price: "",
          category: "",
          color: "",
          quantity: "",
          loading: false,
          createdProduct: data.data.name,
        });
      }
      window.location.reload();
    });
  };

  const BasicExample = () => {
    return (
      <>
        <div
          style={{
            backgroundColor: "#003566",
            color: "white",
            borderRadius: "25px",
            fontWeight: "800",
            height: "auto",
            width: "10%",
            boxShadow: "7px 4px black",
            margin: '1rem 0 3rem 43rem',
            padding: "14px",
          }}
          onClick={handleShow}
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Product
        </div>
        <Modal show={show} onHide={handleClose} className="add-service-pop-form">
          <form
            action=""
            onSubmit={() => {
              handleClose();
            }}
          >
            <div style={{ display: "flex", margin: "auto" }}>
              <Form style={{ width: "100%", padding: "2rem" }}>
                <h1 style={{ marginBottom: "4rem", fontFamily: "cursive", textAlign: "center" }}>Add Product</h1>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control type="text" value={title} placeholder="Product Name" onChange={handleChange("title")} />
                </Form.Group>
                <Form.Select aria-label="Default select example" style={{ width: "100%", height: "2.5rem" }}>
                  <option style={{ color: "#4051a5" }}>Select category</option>
                  {categories &&
                    categories.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                </Form.Select>
                <br />
                <Form.Group className="mb-3" controlId="color">
                  <Form.Control type="text" value={color} placeholder="Color" onChange={handleChange("color")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                  <Form.Control type="number" value={price} placeholder="Price" onChange={handleChange("price")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Control type="number" placeholder="Quantity" value={quantity} onChange={handleChange("quantity")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                  <Form.Control type="text" placeholder="URL Image" value={image} onChange={handleChange("image")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description" style={{ height: "5rem" }}>
                  <textarea type="textarea" style={{ width: "100%" }} value={description} placeholder="Product Description" onChange={handleChange("description")} />
                </Form.Group>
                <div style={{ textAlign: "center" }}>
                  <Button variant="success" type="submit" style={{ backgroundColor: "#003566", color: "white", fontWeight: "700", border: "2px " }} onClick={clickSubmit}>
                    Create Product
                  </Button>{" "}
                  <Button
                    type="submit"
                    onClick={() => {
                      navigate("/user");
                    }}
                    style={{ backgroundColor: "#003566", color: "white", fontWeight: "700", border: "2px " }}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </div>
          </form>
        </Modal>
      </>

      //-------------------------------------------------------------------------------------------------
    );
  };

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{
        display: createdProduct ? "" : "none",
      }}
    >
      <h2>
        {`${createdProduct}`}
        is created!
      </h2>
    </div>
  );
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{
        display: error ? "" : "none",
      }}
    >
      {error}
    </div>
  );
  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div>
      {showLoading()}
      {showSuccess()}
      {showError()}
      <div style={{ display: "flex" }}>{BasicExample()}</div>
    </div>
  );
}
