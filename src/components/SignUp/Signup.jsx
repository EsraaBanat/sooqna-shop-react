import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signUp } from "../../auth/index";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow, MDBInput, MDBCheckbox, MDBIcon } from "mdb-react-ui-kit";
import LogupLogo from "../../Assests/signup-logo.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    adress: "",
  });

  const { username, email, password, phonenumber, adress, error } = data;

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleChange = (name) => (event) => {
    setData({
      ...data,
      error: false,
      // success:false,
      [name]: event.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(data).then((data) => {
      if (data.error) {
        setData({
          ...data,
          error: data.error,
          // success: false
        });
      } else {
        setData({
          ...data,
          // success: true
        });
        Toast.fire({
          icon: "success",
          title: "Signed Up successfully",
        });
        navigate("/signin");
        event.target.reset();
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MDBContainer fluid>
      <div className="p-5 bg-image" style={{ backgroundColor: "rgb(233 233 233)", height: "300px", marginTop:'5rem' }}></div>

      <MDBCard className="ml-22 mb-5 p-5 shadow-5" style={{ width: "40rem", margin: "-16rem 0 0 27.5rem ", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
        <MDBCardBody className="p-5 text-center">
          {/* <h2 className="fw-bold mb-5">Sign up now</h2> */}
          <img style={{ width: "18rem", height: "10rem", marginTop: "-5rem" }} src={LogupLogo} />

          <MDBInput wrapperClass="mb-4" type="text" placeholder="Full Name" id="form1" value={username} onChange={handleChange("username")} />
          <MDBInput wrapperClass="mb-4" type="email" placeholder="example@gmail.com" id="form1" value={email} onChange={handleChange("email")} />
          <MDBInput wrapperClass="mb-4" type="password" placeholder="Password" id="form1" value={password} onChange={handleChange("password")} />
          <MDBInput wrapperClass="mb-4" type="text" placeholder="07********" value={phonenumber} onChange={handleChange("phonenumber")} id="form1" />
          <MDBInput wrapperClass="mb-4" type="text" placeholder="Enter Your Address" value={adress} onChange={handleChange("adress")} id="form1" />

          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#003566" , color: 'white' }}  size="md" onClick={handleSubmit}>
            sign up
          </button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
