import "./SearchResultsSidebar.scss";
import { useNavigate, useLocation } from "react-router-dom";

const SearchResultsSidebar = () => {
  const searchSections = [
    { key: "movies", label: "Movies" },
    { key: "tv", label: "TV shows" },
    { key: "person", label: "People" },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const routeType = location.pathname.includes("movies")
    ? "movies"
    : location.pathname.includes("tv")
    ? "tv"
    : "person";
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const changeRoute = (key) => {
    navigate(`/search/${key.toLowerCase()}?query=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <div className="search-results-container">
        <h5 className="search-results-header">Search results</h5>
        <div className="sidebar-sections-container">
          {searchSections.map((section) => (
            <div
              className={`media-type ${
                section.key === routeType && "active-media-type"
              }`}
              key={section.key}
              onClick={() => changeRoute(section.key)}
            >
              {section.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResultsSidebar;
