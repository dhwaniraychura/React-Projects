🎬 Movie Library AppA modern, high-performance movie discovery web application built with React, Redux Toolkit, and Bootstrap. This app allows users to explore popular movies, search for specific titles, view detailed information (including genres and ratings), and manage a personalized "Favorites" list.🚀 FeaturesUser Authentication: Simple name-based login with a secure PrivateRoute system.Live Search: Dynamic movie searching using the TMDb API with instant results.Popular Movies: Home page featuring the latest trending movies worldwide.Movie Details: Deep-dive into any movie to see overview, release dates, ratings, and genres.Personal Favorites: Users can "Heart" movies to save them to their personal library (Redux Persisted state).Modern UI: Clean, responsive design using Bootstrap 5, featuring custom cards, hover effects, and smooth navigation.🛠️ Tech StackTechnologyPurposeReact 18Frontend LibraryRedux ToolkitState Management (Movies & Auth)React Router 6Client-side RoutingAxiosAPI FetchingBootstrap 5Responsive UI & StylingTMDb APIExternal Movie Data Source

📦 Project Structure
Plaintext
src/
 ┣ components/
 ┃ ┣ Favorites.jsx     # User's saved movies
 ┃ ┣ Login.jsx         # Auth entry point
 ┃ ┣ MovieDetails.jsx  # Detailed info view
 ┃ ┣ MovieList.jsx     # Popular movies grid
 ┃ ┣ MovieSearch.jsx   # Search functionality
 ┃ ┣ Navbar.jsx        # Navigation & Auth status
 ┃ ┗ PrivateRoute.jsx  # Route Guarding logic
 ┣ redux/
 ┃ ┣ authSlice.js      # User & Favorites state
 ┃ ┣ movieSlice.js     # Async thunks for TMDb
 ┃ ┗ store.js          # Global Redux Store
 ┣ App.jsx             # Main Routing & Layout
 ┗ main.jsx            # Entry point
