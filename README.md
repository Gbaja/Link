# Young & Giving Mentoring Platform MVP

An MVP for Young & Giving to facilitate mentoring between alumni of a university with current students of the university.

## The Challenge

Young & Giving helps university students get a good headstart into the world of work and career through encouraging and facilatating mentoring. It is a central way for universities to enable their students and alumni to conneect and share knowledge.

## Tech Stack

Front end: React, Redux, Styled components

Back end: Express, PostgreSQL with Sequelize ORM

Other node modules: axios, sendgrid, redux-thunk, bcryptjs, cookie-session, jest

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## User stories/journey

There are four users on the Young & Giving platform. The users are a Young & Giving Administrator, University Administrator, Mentors(alumnis of university) and Mentees(current students of university).

### Young & Giving Administrator

- Log in
- Add a university

### University Administrators

- Be notified when an account has been created for my university by a Young & Giving admin
- Accept/Reject alumnis and mentees that have signed up using my university name to join the Young & Giving
- View a dashboard with links to:
  - View only all mentors from my university
  - View only all mentees from my university
  - View all pending applications
- Be able to search for mentees/mentors by name, location and/or industry

### Alumnis(mentors) & Current students(mentee)

- Sign up for an account
- Receive a sign up confirmation email
- Be notified when my university has accepted my application
- Not allowed to log in until my university has accepted my application
- Edit my profile
- View a dashboard with links to:
  - View only all mentors from my university
  - View only all mentees from my university
  - View my profile
  - View all the request that I have received(for mentors) or sent(for mentees)
  - Delete my account
- Be able to search for mentees/mentors by name, location and/or industry

### Alumnis(mentors)

- Be notified by email when I have a new mentorship request from a mentee
- Be sent the email address of the mentees that I accept request from

### Current students(mentees)

- Be able to request mentorship from mentors
- Be notified when my request has been accepted/rejected

### University Administrators, Alumnis(mentors) & Current students(mentee)

- Reset password
- Log in


## Design

Project design mosly done by Project Owner.