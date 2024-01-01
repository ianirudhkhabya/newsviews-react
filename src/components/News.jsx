import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = ({
  country = "in",
  pageSize = 9,
  category = "general",
  setProgress,
  searchQuery,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.title = `${
      searchQuery ? capitalize(searchQuery) : capitalize(category)
    } - NewsViews`;
    setPage(1);
    // eslint-disable-next-line
  }, [category, searchQuery]);

  const capitalize = useMemo(
    () => (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    []
  );

  const buildApiUrl = () => {
    const baseApiUrl = "https://newsapi.org/v2/";
    const apiKey = import.meta.env.VITE_NEWSAPI;

    if (searchQuery) {
      return `${baseApiUrl}everything?q=${searchQuery}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    } else {
      return `${baseApiUrl}top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const updateNews = async () => {
      setProgress(15);
      const url = buildApiUrl();

      setLoading(true);

      try {
        const response = await fetch(url);
        setProgress(39);
        const parsedData = await response.json();
        setProgress(70);

        if (Array.isArray(parsedData.articles)) {
          setArticles((prevArticles) =>
            page === 1
              ? parsedData.articles
              : [...prevArticles, ...parsedData.articles]
          );
          setLoading(false);
          setHasMore(parsedData.articles.length > 0);
          setProgress(100);
        } else {
          console.error(
            "Invalid data format: parsedData.articles is not an array"
          );
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoading(false);
      }
    };

    updateNews();
    // eslint-disable-next-line
  }, [page, category, searchQuery]);

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "6rem" }}>
        NewsViews - Top{" "}
        {searchQuery ? capitalize(searchQuery) : capitalize(category)} Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={loading && <Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4" key={`${article.url}_${index}`}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};

export default News;
