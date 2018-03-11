# Login/Logout Workflow

The application support following views:
	1. A welcome view
	2. A login view (form)
	3. A profile view (visible to logged-in users only)

## Getting Started
  1.Either download the repo or clone it using below command
  ```
  git clone https://github.com/alark553/login_app.git
  ```   
  2. Go to the project folder login_app
  3. run bower install to install all dependencies related to project
  ```
  bower install
  ```   
  4. Install http server npm install -g http-server
  ```
  npm install -g http-server
  ```   
  5. And then run http-server -o
  ```
  http-server -o
  ```   

### Prerequisites

  1. NodeJS and npm(node package manager)
  2. bower 
  ```
  npm install -g bower
  ```   


### Project flow

  1. There is a welcome screen where user is given link to login into site.
  2. Then user can go to login page and enter the username and password, here we are using the USERDATA.json as mock data to login into site.
  3. After login user is redirected to profile page whcih is accessible to him only after login.
  4. and then user can logout from the logout icon to return again to login page.

