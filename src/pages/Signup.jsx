import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { motion } from "framer-motion";
import "../styles/login.css";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

import { auth, db } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: userName,
      });
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: userName,
        email,
      });

      setLoading(false);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Helmet title="Signup">
      <section className="signup my-5 py-5">
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                {" "}
                <h5 className="fw-bold">Loading...</h5>{" "}
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <div className="login__content">
                  <h3 className="mb-5">Signup</h3>
                  <Form className="auth__form" onSubmit={signup}>
                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className="form__group">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className="form__group">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      type="submit"
                      className="buy__btn login__btn"
                    >
                      Create an Account
                    </motion.button>
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </Form>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
