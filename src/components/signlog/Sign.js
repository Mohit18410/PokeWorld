import React, { useState } from "react";
import imgSrc from "../../Image/signupImage.png";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "../footer/footer.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { NavLink } from "react-router-dom";
import { Header } from "../Header";
import Footer from "../footer/Footer";

const Sign = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleField = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (
      userDetails.userName &&
      userDetails.firstName &&
      userDetails.lastName &&
      userDetails.email &&
      userDetails.password &&
      userDetails.confirmPassword
    )
      try {
        axios
          .post(
            "http://localhost:3001/signup-to-pokeworld/v1/user-sign-up",
            userDetails
          )
          .then((res) => {
            if (res.data.success) toast.success(res.data.message);
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          });
      } catch (err) {
        toast.error("Error in contacting, Try after sometime");
      }
    else {
      toast.error("Fill all the details");
    }
    e.preventDefault();
  };
  return (
    <div className=" h-screen">
      <Header />
      <div className=" my-14 flex-horizontal items-center flex-wrap mx-3 lg:gap-20 xl:gap-28 md:gap-5 gap-3">
        <img
          src={imgSrc}
          alt="Not Found"
          className=" contact-image w-2/6 h-2/6 rounded-full"
        />
        <div className="flex flex-col space-y-4">
          <Box
            component="form"
            className=" pt-3 flex flex-col space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              {window.innerWidth < 500 ? (
                <div className=" flex gap-3 flex-wrap">
                  <TextField
                    fullWidth
                    label="First Name"
                    id="firstName"
                    name="firstName"
                    onChange={handleField}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    onChange={handleField}
                  />
                </div>
              ) : (
                <div className=" flex gap-3 flex-wrap">
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    onChange={handleField}
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    onChange={handleField}
                  />
                </div>
              )}
            </div>
            <TextField
              fullWidth
              label="Username"
              id="userName"
              name="userName"
              onChange={handleField}
            />
            <TextField
              fullWidth
              label="Email"
              id="email"
              name="email"
              onChange={handleField}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                label="Password"
                onChange={handleField}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-confirmpassword">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-confirmpassword"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="confirmPassword"
                label="confirmPassword"
                onChange={handleField}
              />
            </FormControl>
            <div className=" flex justify-end">
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                SignUp
              </Button>
            </div>
          </Box>
          <div className=" flex flex-col justify-center items-center">
            <div className=" text-gray-500 text-lg">Try another way:</div>
            <div className="flex justify-center gap-2 mt-2 mb-3 pt-2 border-t-2 border-gray-500 w-2/4">
              <SiGmail size={32} className="footericons" fill="#0D47A1" />
              <FaFacebookSquare
                size={32}
                className="footericons"
                fill="#0D47A1"
              />
              <FaSquareXTwitter
                size={32}
                className="footericons"
                fill="#0D47A1"
              />
            </div>
            <div className=" text-center">
              <span className=" text-gray-500 text-md">
                Already have an account?...
              </span>
              <span className=" underline text-blue-500 hover:text-blue-800">
                <NavLink to="/logIn">LogIn</NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Sign;
