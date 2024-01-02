# NewsViews App

NewsViews is a React application designed to provide users with the latest news headlines. The app utilizes the NewsAPI to fetch top headlines based on the selected country and category. It also supports searching for news articles based on a user-entered query. The application includes features such as infinite scrolling for seamless news browsing, progress tracking, and a clean, responsive design.

## Technologies Used

- React
- NewsAPI
- Infinite Scroll
- Bootstrap (for styling)
- Vite

## Features

### News Fetching

1. **Top Headlines:** Fetches top headlines based on the selected country and category.
2. **Search Functionality:** Allows users to search for news articles based on a query.

### Infinite Scrolling

- **Dynamic Loading:** Utilizes infinite scrolling for a seamless browsing experience.

### Progress Tracking

- **Loading Indicator:** Displays a loading spinner while fetching news data.
- **Progress Bar:** Tracks and displays the progress of fetching news data.

### Responsive Design

- **Grid Layout:** Presents news articles in a responsive grid layout for various screen sizes.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ianirudhkhabya/newsviews-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd newsviews-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### API Key Setup

1. Get your API key from [NewsAPI](https://newsapi.org/).
2. Create a `.env.local` file in the project root.
3. Add the following line to the `.env.local` file, replacing `your-api-key` with your actual API key:

   ```env
   VITE_NEWSAPI=your-api-key
   ```

### Running the Application

Run the application locally:

```bash
npm run dev
```

The application will be accessible at [http://localhost:5173](http://localhost:5173).

## Usage

1. Browse top headlines based on the selected country and category.
2. Use the search bar to find news articles based on a specific query.
3. Experience infinite scrolling for continuous news exploration.
4. Track the progress of news fetching through the progress bar.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the application. Your feedback and contributions are highly appreciated.
