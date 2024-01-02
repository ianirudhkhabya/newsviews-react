import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSetProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setProgress(0);
  };

  return (
    <Router>
      <div>
        <Navbar handleSearch={handleSearch} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={handleSetProgress}
                key="general"
                pageSize={9}
                country="in"
                category="general"
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={handleSetProgress}
                key="business"
                pageSize={9}
                country="in"
                category="business"
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={handleSetProgress}
                key="entertainment"
                pageSize={9}
                country="in"
                category="entertainment"
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={handleSetProgress}
                key="health"
                pageSize={9}
                country="in"
                category="health"
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={handleSetProgress}
                key="science"
                pageSize={9}
                country="in"
                category="science"
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={handleSetProgress}
                key="sports"
                pageSize={9}
                country="in"
                category="sports"
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={handleSetProgress}
                key="technology"
                pageSize={9}
                country="in"
                category="technology"
                searchQuery={searchQuery}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/:searchQuery"
            element={
              <News
                setProgress={handleSetProgress}
                key="search"
                pageSize={9}
                country="in"
                category="general"
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
