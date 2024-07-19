import React, { useState } from "react";
import imgSrc from "../../Image/Designer (1).png";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../footer/footer.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const handleField = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (
      formDetails.firstName &&
      formDetails.lastName &&
      formDetails.email &&
      formDetails.description
    )
      try {
        axios
          .post(
            "http://localhost:3001/connect-contact-route/v1/sendContact",
            formDetails
          )
          .then((res) => {
            if (res) toast.success("Query has been registered");
            else toast.error("Please try again");
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
    <>
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
                    id="fullWidth"
                    name="firstName"
                    onChange={handleField}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    id="fullWidth"
                    name="lastName"
                    onChange={handleField}
                  />
                </div>
              ) : (
                <div className=" flex gap-3 flex-wrap">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    onChange={handleField}
                  />
                  <TextField
                    id="outlined-basic"
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
              label="Email"
              id="fullWidth"
              name="email"
              onChange={handleField}
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={5}
              id="fullWidth"
              name="description"
              onChange={handleField}
            />
            <div className=" flex justify-end">
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </Box>
          <div className=" flex flex-col justify-center items-center">
            <div className=" text-gray-500 text-lg">Other Contacting Ways:</div>
            <div className="flex justify-center gap-2 mt-2 pt-2 border-t-2 border-gray-500 w-2/4">
              <FaInstagram size={32} className="footericons" fill="#0D47A1" />
              <FaFacebookSquare
                size={32}
                className="footericons"
                fill="#0D47A1"
              />
              <FaLinkedin size={32} className="footericons" fill="#0D47A1" />
              <FaSquareXTwitter
                size={32}
                className="footericons"
                fill="#0D47A1"
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
