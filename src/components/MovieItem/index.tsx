import IMovie from "../../types";
import YoutubeEmbed from "../YoutubeEmbed";

const MovieItem: React.FC<IMovie> = ({
  title,
  description,
  embedId,
  shareBy,
}) => {
  return (
    <div className="movie-item row">
      <div className="movie-item-video col-12 col-lg-6">
        <YoutubeEmbed embedId={embedId} />
      </div>
      <div className="movie-item-info col-12 col-lg-6">
        <div className="font-weight-bold text-danger">{title}</div>
        <div>
          <span className="mr-8">Share by:</span>
          <span>{shareBy}</span>
        </div>
        <div>Description:</div>
        <p className="font-italic">{description}</p>
      </div>
    </div>
  );
};

export default MovieItem;
