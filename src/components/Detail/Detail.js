import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faPlayCircle,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { movieApi } from "../../api";
import { mainWeight, moSize } from "../../style/GlobalStyled";
import { Loader } from "../Loader";
import { PageNotFound } from "../PageNotFound";
import { PageTitle } from "../PageTitle";
import { Container } from "../Container";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 80px 0;
`;

const Img = styled.div`
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ImgColor = styled.div`
  width: 100%;
  height: 80vh;
  background: radial-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 1)
  );
  position: absolute;
`;

const ConWrap = styled.div`
  max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 200px 80px;
  @media screen and (max-width: 500px) {
    padding: 30px;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 50px;
  margin-bottom: 10px;
  font-weight: ${mainWeight.TitleWeight};
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 300;
  opacity: 0.7;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
    margin-bottom: 20px;
  }
`;

const Sub = styled.div`
  width: 100%;
  margin-top: 10px;
  opacity: 0.9;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Desc = styled.div`
  margin-top: 20px;
  font-weight: 300;
  line-height: 1.6em;
  opacity: 0.9;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const WatchBtn = styled.button`
  all: unset;
  margin-top: 30px;
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  @media screen and (max-width: 500px) {
    width: 140px;
    height: 35px;
    border: 0.5px solid #fff;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 14px;
  }
`;

const WatchBtnAni = keyframes`
  100%{
    width: 160px;
    background-color: rgba(255,255,255,0.5)
    }
`;

const WatchBtnBox = styled.div`
  position: absolute;
  left: 0;
  width: 0;
  height: 40px;
  border-radius: 5px;
  animation: ${WatchBtnAni} 5s 0.5s forwards;
  @media screen and (max-width: 500px) {
    animation: none;
  }
`;

const VideoWrap = styled.div`
  width: 100%;
  padding: 100px 0;
`;

const Video = styled.iframe`
  width: 100%;
  height: 80vh;
`;

export const Detail = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const { data } = await movieApi.detail(id);
        setMovieData(data);

        const {
          data: { results },
        } = await movieApi.video(id);
        setVideoData(results[0]);

        setLoading(false);
      } catch (error) {
        <PageNotFound />;
      }
    };
    movieDetail();
  }, [id]);

  const onClickVideo = () => {
    const videoWrapTop = document.querySelector(".video_wrap").offsetTop;

    window.scroll({
      top: videoWrapTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {movieData && (
            <>
              <PageTitle title="영화 리뷰"></PageTitle>
              <Wrap>
                <Img
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
                    // backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path ?  : "url"})`,
                  }}
                >
                  <ImgColor />
                  <ConWrap>
                    <Title>{movieData.title}</Title>
                    <SubTitle>{movieData.original_title}</SubTitle>
                    <Sub>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ marginRight: "8px" }}
                      />
                      {movieData.release_date}
                    </Sub>
                    <Sub>
                      <FontAwesomeIcon
                        icon={faTicketAlt}
                        style={{ marginRight: "8px" }}
                      />
                      {movieData.genres.map((genre) => genre.name + ",")}
                    </Sub>
                    <Sub>
                      <FontAwesomeIcon
                        icon={faClock}
                        style={{ marginRight: "8px" }}
                      />
                      {movieData.runtime + "분"}
                    </Sub>
                    <Desc>{movieData.overview}</Desc>
                    <WatchBtn onClick={onClickVideo}>
                      <FontAwesomeIcon
                        icon={faPlayCircle}
                        style={{ marginRight: "8px" }}
                      />
                      예고영상
                      <WatchBtnBox />
                    </WatchBtn>
                  </ConWrap>
                </Img>
              </Wrap>
            </>
          )}

          <Container>
            <VideoWrap className="video_wrap">
              <Video src={`https://www.youtube.com/embed/${videoData.key}`} />
            </VideoWrap>
          </Container>
        </div>
      )}
    </div>
  );
};
