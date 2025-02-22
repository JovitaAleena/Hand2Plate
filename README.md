# Food Donation

[![Food Donation](https://img.youtube.com/vi/uiFmoIfHRp8/0.jpg)](https://www.youtube.com/watch?v=uiFmoIfHRp8)

Food Donation is a web application aimed at connecting individuals and organizations willing to donate excess food with those in need. It provides a platform to reduce food wastage and contribute to the well-being of communities.

## Features which differentiate us from similar application
-Gratification to the Donors:Donation Milestones Reward users with badges or points for reaching donation milestones.
-Employment:Provides Job opportunity for unemployed people
-Verification System:This app provides a OTP Based verification System
-Tracking of Donation:Allows the receiver to track the donations
-User registration and login: Individuals and organizations can create accounts and login to the platform.
-Donation listings: Users can create listings to donate excess food, specifying details such as food type, quantity, and expiry date.
-Search and filtering: Users can search for available donations based on location, food type, or other criteria.
-Donation requests: Users in need can request specific donations or express interest in available listings.
-Messaging system: Users can communicate and coordinate donation details through an integrated messaging system.
-Feedback and ratings: Users can provide feedback and ratings to ensure transparency and accountability.

## Technologies Used

- Frontend: HTML, CSS, JavaScript, React.js
- Backend: Node.js, Express.js, MongoDB
- Authentication: JSON Web Tokens (JWT)
- Communication: Socket.IO


## Installation

1. Clone the repository: `git clone https://github.com/devprashantt/food-donation.git`

2. Frontend Installation:
- Navigate to the project frontend directory:
  ```
  cd food-donation/client
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the development server:
  ```
  npm run dev
  ```

3. Backend Installation:
- Navigate to the project backend directory:
  ```
  cd food-donation/server
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the development server:
  ```
  npm start
  ```

Make sure you have Node.js and npm (Node Package Manager) installed on your machine before running these commands.

## Usage

1. Frontend:
- The frontend application can be accessed at http://localhost:5173/in your web browser.
- Follow the provided UI to navigate through the food donation process.

2. Backend:
- The backend server will be running at `http://localhost:3000`.
- The frontend application will communicate with the backend server for data exchange.

## Competitor Analysis
1. No Food Waste
Overview: An Indian NGO that collects excess food from events and distributes it to the needy. They utilize an app to coordinate food pickups and identify hunger spots.
Limitations:
Primarily operates in select regions, limiting its reach.
Relies heavily on volunteers, which can affect consistency and scalability.

2. ShareTheMeal
Overview: A global initiative by the United Nations World Food Programme, allowing users to donate funds to provide meals for the hungry.
Limitations:
Focuses on monetary donations rather than redistributing surplus food.
Operates on a global scale, which may not address local food wastage directly.

3. Too Good To Go
Overview: Connects users with restaurants and stores offering unsold food at discounted prices, aiming to reduce food waste.
Limitations:
Emphasizes consumer purchases over charitable donations.
Predominantly active in Europe and North America, with limited presence in India.

4. OLIO
Overview: A community-driven app where individuals and businesses share surplus food with neighbors to prevent waste.
Limitations:
Depends on individual participation, which can lead to inconsistent food availability.
Lacks structured collaboration with governmental bodies for large-scale impact.
