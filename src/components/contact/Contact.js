import React from "react";
import imgSrc from "../../Image/Designer (1).png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../footer/footer.css";

const Contact = () => {
  return (
    <div className=" my-14 flex-horizontal items-center flex-wrap mx-3 lg:gap-20 xl:gap-28 md:gap-5 gap-3">
      <img
        src={imgSrc}
        alt="Not Found"
        className=" contact-image w-2/6 h-2/6 rounded-full"
      />
      <div className="flex flex-col space-y-4">
        <div className=" pt-3 flex flex-col space-y-4">
          <div>
            {window.innerWidth < 500 ? (
              <div className=" flex gap-3 flex-wrap">
                <TextField fullWidth label="Full Name" id="fullWidth" />
                <TextField fullWidth label="Last Name" id="fullWidth" />
              </div>
            ) : (
              <div className=" flex gap-3 flex-wrap">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </div>
            )}
          </div>
          <TextField fullWidth label="Email" id="fullWidth" />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={5}
            maxRows={10}
            id="fullWidth"
          />
          <div className=" flex justify-end">
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </div>
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
  );
};

export default Contact;
