import { Button } from "@mui/material";

function Signup() {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">
        Signup
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box md:max-w-4xl max-w-2xl flex flex-col md:flex-row gap-5 justify-center items-center text-base-content">
          <div className="flex-2">
            <img
              className="rounded-2xl w-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1723672929404-36ba6ed8ab50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2263"
              alt="img-signup"
            />
          </div>

          <form className="flex-1 w-full">
            <fieldset className="fieldset">
              <label className="label">User Name</label>
              <input
                type="text"
                className="input max-w-full"
                placeholder="User Name"
              />

              <label className="label">Phone Number</label>
              <input type="text" className="input" placeholder="Phone Number" />

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <Button variant="contained">SIGNUP</Button>
            </fieldset>
          </form>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
}

export default Signup;
