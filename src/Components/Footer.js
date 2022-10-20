import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
  return (
    <div style={{ background: "#031222", padding: "20px 0px" }}>
      <div className='container p-2 rounded' style={{ width: "90%", background: "#d5d4d5" }} >
        <div className='d-lg-flex d-sm-block justify-content-between p-2' style={{ width: "90%", margin: "0 auto", background: "" }}>
          <div className='col-sm-12 col-lg-6 col-md-12'>
            <h5 style={{ lineHeight: "1.5" }} >Get Connected with Social <br></br> Networks:</h5>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className='d-flex justify-content-between'>
              <FacebookRoundedIcon sx={{ fontSize: "40px" }}></FacebookRoundedIcon>
              <TwitterIcon sx={{ fontSize: "40px" }}></TwitterIcon>
              <GoogleIcon sx={{ fontSize: "40px" }}></GoogleIcon>
              <InstagramIcon sx={{ fontSize: "40px" }}></InstagramIcon>
              <LinkedInIcon sx={{ fontSize: "40px" }}></LinkedInIcon>
              <GitHubIcon sx={{ fontSize: "40px" }}></GitHubIcon>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  )
}
