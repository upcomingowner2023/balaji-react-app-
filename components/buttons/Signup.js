import React from 'react'

const Signup = () => {
  return (
    <>
      <button type="button" class="btn btn-outline-primary ms-2"
        data-bs-toggle="modal" data-bs-target="#SignupModal">
      <span className="fa fa-user-plus me-1"></span>
        Register
      </button>
      <div class="modal fade" id="SignupModal"
        tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Register</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <button className="btn btn-primary w-100 mb-2">
                <span className="fa fa-google me-2"></span>
                Sign up with google
              </button>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp " class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-outline-primary w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Signup