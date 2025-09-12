"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoPopup({ style, text }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* <Link onClick={() => setOpen(true)} className="lightbox-image"><i className="icon-play" /></Link> */}
      {/* <span className="play-icon flaticon-play" onClick={() => setOpen(true)} /> */}
      {!style && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="overlay-link lightbox-image video-fancybox ripple"
        >
          <span className="play-icon flaticon-play" />
        </button>
      )}

      {style === 1 && (
        <div className="video-btn">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="overlay-link lightbox-image video-fancybox ripple"
          >
            <span className="play-icon flaticon-play" />{" "}
          </button>
        </div>
      )}
      {style === 2 && (
        <div className="video-btn">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="overlay-link lightbox-image video-fancybox ripple"
          >
            <span className="play-icon flaticon-play" />
          </button>
          <h6>{text ? text : "Latest Program Video"}</h6>
        </div>
      )}
      {style === 3 && (
        <div className="video-btn">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lightbox-image"
          >
            <i className="customicon-play-button" />
            <span className="border-animation border-1" />
            <span className="border-animation border-2" />
            <span className="border-animation border-3" />
          </button>
        </div>
      )}
      {style === 4 && (
        <div className="video-btn">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lightbox-image"
          >
            <img src="/assets/images-4/icons/video-btn-1.png" alt="" />
          </button>
        </div>
      )}
      {style === 5 && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="video-btn overlay-link lightbox-image video-fancybox ripple"
        >
          <span className="fas fa-play" />
        </button>
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
