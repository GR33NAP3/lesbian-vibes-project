import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FormGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  const [profileInput, setProfileInput] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    profilePicture: "",
    emailAddress: "",
    getsUpdates: true,
    password: "",
  });

  //sets the url for profile creation
  const URL = `${process.env.REACT_APP_BACKEND_URI}/singup`;

  //function to handle the change in the textboxes
  const handleChange = (e) => {
    const value = e.target.value;
    setProfileInput({
      ...profileInput,
      [e.target.name]: value,
    });
  };
  //function to handle cnahge in checkbox
  const handleUpdateCheck = (e) => {
    const checked = e.target.checked;
    setProfileInput({
      ...profileInput,
      [e.target.name]: checked,
    });
  };
  //handles the submit to create the profile in the database
  const handleSubmit = async (e) => {
    console.log(profileInput);
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileInput),
    });
    if (response.status !== 201) console.log("error");
    Navigate(`/SignUp`);
  };

  return (
    <div>
      <div>
        <h3>Sign Up</h3>
        {/* <Image
          src="https://i.pinimg.com/originals/45/cd/30/45cd30de9f9bcc7ed78cbb83fe3d0e01.jpg"
          alt="lesbian flag art background"
          id="home-background"
        ></Image> */}
      </div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <FormGroup as={Col} xs={7} controlId="formGridName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="userName"
              placeholder="username"
            />

            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="firstName"
              placeholder="FirstName"
            />

            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="lastName"
              placeholder="LastName"
            />

            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              name="birthday"
              placeholder="Birthday"
            />
            <Form.Label>Profile Picture URL</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="profilePicture"
              placeholder=""
            />
          </FormGroup>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} xs={7} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              name="emailAddress"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              secureTextEntry={true}
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            defaultChecked={profileInput.getsUpdates}
            name="getsUpdates"
            onChange={handleUpdateCheck}
            label="Check to recieve updates"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
