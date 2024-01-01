import PropTypes from "prop-types";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  const formattedDate = new Date(date).toGMTString();

  return (
    <div className="my-3">
      <div className="card position-relative">
        <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger">
          {source}
        </span>
        <img
          src={imageUrl || "https://shorturl.at/fwzJS"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author || "Anonymous"} on {formattedDate}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default NewsItem;
