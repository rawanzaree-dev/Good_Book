import "./authors.css";
import { authors } from "../../data/authors";
import { useState } from "react";

export default function Authors() {
  const [search, setSearch] = useState("");

  return (
    <div className="authors">
      <div className="container">
        <div className="search-box">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in Authors"
          />
        </div>
        <div className="content">
          {authors
            .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
            .map((author) => (
              <div className="card" key={author.id}>
                <div className="image">
                  <img src={`/authors/${author.image}`} alt={author.name} />
                </div>
                <div className="author-name">
                  <h2>{author.name}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
