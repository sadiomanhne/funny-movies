import React from "react";
import "./index.css";

interface IYoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: React.FC<IYoutubeEmbedProps> = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/SsnPHfhKXVU"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  </div>
);

export default YoutubeEmbed;
