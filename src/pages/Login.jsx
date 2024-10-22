import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, FormGroup, Form } from 'reactstrap'
import { motion } from 'framer-motion'
import '../styles/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
   
  const navigate = useNavigate()
  const login = async (e) => {
    e.preventDefault()

    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)
      setLoading(false) 
      toast.success('Login successfully')
      navigate('/checkout')
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return (
    <Helmet title="Login">
      <section className="login my-5 py-5">
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h4 className="fw-bold">Loading...</h4>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <div className="login__contet">
                  <h3 className="mb-5">Login</h3>
                  <Form className="auth__form" onSubmit={login}>
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
                      Login
                    </motion.button>
                    <p>
                      Don't have an account?{" "}
                      <Link to="/signup">Create an account</Link>
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
}

export default Login