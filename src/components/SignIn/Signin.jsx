import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, authenticate } from "../../auth/index";
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import LoginLogo from "../../Assests/LOG_IN-LOGO3.png";
// import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

function SignIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
    error:false
  });

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

  const { username, password,error } = data;

  const navigate = useNavigate();


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
    signIn(data)
    .then((data) => {
      if (!data) {

        setData({
          ...data,
          error:true
        });
      // Toast.fire({
      //   icon: "error",
      //   title: "Username or Password is invailed",
      // });
      } else {
        setData({
          ...data,
          // success: true
        });
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        navigate("/");
        authenticate(data);
        event.target.reset();
      }
    }).catch((error)=>{
      // Toast.fire({
      //   icon: "error",
      //   title: "Username or Password is invailed",
      // });


      console.log("ERROR");
      setData({
        ...data,
        error: error,
        // success: false
      });
    })
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <MDBContainer className="my-5">
      <MDBCard
        style={{
          width: "30rem",
          marginTop: '5rem',
          marginLeft: "28rem",
        }}
      >
        <MDBCardBody className="d-flex flex-column">
          <div className="d-flex flex-row mt-2" style={{ justifyContent: "center" }}>
            <img
              src={LoginLogo}
              alt="Sooqna logo"
              style={{
                width: "10rem",
                height: "auto",
                marginBottom: "-4rem",
                marginTop: "-1rem",
              }}
            />
          </div>
          <br />
          <br />
          <MDBInput wrapperClass="mb-4" placeholder="User Name" type="text" size="lg" value={username} required onChange={handleChange("username")} />
          <MDBInput wrapperClass="mb-4" placeholder="Password" type="password" size="lg" value={password} required onChange={handleChange("password")} />
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#003566" }} size="lg" variant="primary" onClick={handleSubmit}>
            Login</button>
      <br/>
          {/* <a className="small text-muted" href="#!">
                Forgot password?
              </a> */}
          <p className="mb-5 pb-0" style={{ color: "#393f81" }}>
            Don't have an account?{" "}
            <a href="#!" style={{ color: "#393f81" }} onClick={() => navigate("/signup")}>
              Register here
            </a>
          </p>
          {error?<p>invalod</p>:null}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignIn;
