# Cloud Resume Project

This is a personal cloud-hosted resume website built with HTML, CSS, and JavaScript, deployed on AWS (S3, API Gateway, Lambda, etc.). It features a responsive design and a contact form that submits messages securely via an AWS API Gateway endpoint.

## Demo

You can view the live site here:  
http://cloud-resume-dayhuff.s3-website.us-east-2.amazonaws.com/

## Features

- Clean, modern resume layout with sections for profile, skills, experience, and certifications
- Responsive design for mobile and desktop
- Contact form that sends messages via AWS API Gateway and Lambda backend
- No sensitive API keys or credentials exposed in client-side code

## Technologies Used

- HTML5 & CSS3 (styled with a modern dark theme)
- JavaScript (fetch API to send contact form data)
- AWS S3 for static website hosting
- AWS API Gateway & Lambda for backend contact form handling

## Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cloud-resume.git
