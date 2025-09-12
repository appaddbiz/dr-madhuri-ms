"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function VideoPopup({ style, text }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* <Link onClick={() => setOpen(true)} className="lightbox-image"><i className="icon-play" /></Link> */}
      {/* <span className="play-icon flaticon-play" onClick={() => setOpen(true)} /> */}
      {!style && (
        <Link
          onClick={() => setOpen(true)}
          className="overlay-link lightbox-image video-fancybox ripple"
        >
          <span className="play-icon flaticon-play" />
        </Link>
      )}

      {style === 1 && (
        <div className="video-btn">
          <Link
            onClick={() => setOpen(true)}
            className="overlay-link lightbox-image video-fancybox ripple"
          >
            <span className="play-icon flaticon-play" />{" "}
          </Link>
        </div>
      )}
      {style === 2 && (
        <div className="video-btn">
          <Link
            onClick={() => setOpen(true)}
            className="overlay-link lightbox-image video-fancybox ripple"
          >
            <span className="play-icon flaticon-play" />
          </Link>
          <h6>{text ? text : "Latest Program Video"}</h6>
        </div>
      )}
      {style === 3 && (
        <div className="video-btn">
          <Link onClick={() => setOpen(true)} className="lightbox-image">
            <i className="customicon-play-button" />
            <span className="border-animation border-1" />
            <span className="border-animation border-2" />
            <span className="border-animation border-3" />
          </Link>
        </div>
      )}
      {style === 4 && (
        <div className="video-btn">
          <Link onClick={() => setOpen(true)} className="lightbox-image">
            <img src="/assets/images-4/icons/video-btn-1.png" alt="" />
          </Link>
        </div>
      )}
      {style === 5 && (
        <Link
          onClick={() => setOpen(true)}
          className="video-btn overlay-link lightbox-image video-fancybox ripple"
        >
          <span className="fas fa-play" />
        </Link>
      )}

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="vfhzo499OeA"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
