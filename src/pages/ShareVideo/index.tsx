import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IMovie from "../../types";
import MovieService from "../../services/movie";
import { useMovies } from "../../contexts/movie";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const ShareVideo: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { movies = [] } = useMovies();
  const history = useHistory();
  const [user] = useAuthState(auth);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
  };

  const handleShareVideo = () => {
    // validate url
    const validUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    const isValid = validUrlRegex.test(url);

    // submit video to database
    if (isValid) {
      setError("");
      const urlObj = new URL(url);
      const embedId = urlObj.searchParams.get("v");
      if (embedId) {
        const dateString = new Date().getTime().toString();
        const movie: IMovie = {
          id: dateString,
          embedId,
          shareBy: user?.email,
          title: "A funny movie from Youtube",
          description:
            "For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.",
        };
        MovieService.update([...movies, movie]);
        history.push("/");
      } else {
        setError("Can not parse the URL!");
      }
    } else {
      setError("The URL is not from Youtube!");
    }
  };

  return (
    <div className="share-video">
      <div className="share-video-title">Share a Youtube movie</div>
      <div className="mb-24">
        <div className="row share-video-url">
          <label className="col-3 text-right">Youtube URL</label>
          <input className="col-6 form-control" onChange={handleInputChange} />
        </div>
        <div className="row">
          <div className="col-6 offset-3">
            <small className="form-text text-danger">{error}</small>
          </div>
        </div>
      </div>
      <div className="row share-video-btn">
        <button
          className="btn btn-primary btn-block col-6 offset-3"
          onClick={handleShareVideo}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default ShareVideo;
