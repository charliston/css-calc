import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Home () {
  const title = 'React Bootstrap Template'

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-fluid">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">{title}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              A simple, clean starter web app project with React and Bootstrap 5.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link className="btn btn-outline-secondary btn-lg px-4" to="/signup">Sign up</Link>
              <Link className="btn btn-primary btn-lg px-4 gap-3" to="/login">Log in</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
