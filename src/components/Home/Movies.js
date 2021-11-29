import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import "../../style/swiper.css";

import { mainWeight, moSize } from "../../style/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Title = styled.h3`
  font-weight: ${mainWeight.TitleWeight};
  font-size: 35px;
  margin: 80px 0 30px 0;
  @media screen and (max-width: 500px) {
    font-size: 25px;
    margin: 50px 0 20px 0;
  }
`;

const CoverImg = styled.div`
  height: 300px;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    height: 220px;
  }
`;

const SubCon = styled.div`
  position: absolute;
  bottom: 15px;
  left: 10px;
`;

const MovieVote = styled.h4`
  padding: 20px 0 0 10px;
  font-size: 14px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 1);
  @media screen and (max-width: 500px) {
    font-size: ${moSize.movieTitle};
    padding-top: 10px;
  }
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 1);
  @media screen and (max-width: 500px) {
    font-size: ${moSize.movieTitle};
  }
`;

const MovieYear = styled.h4`
  font-size: 14px;
  font-weight: 200;
  text-shadow: 0 0 15px rgba(0, 0, 0, 1);
`;

SwiperCore.use([Navigation]);

export const Movies = ({ movieData, title }) => {
  const params = {
    breakpoints: {
      1024: {
        slidesPerView: 4.1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`detail/${data.id}`}>
              <CoverImg
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
                }}
              >
                <MovieVote>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  {data.vote_average} /10
                </MovieVote>
                <SubCon>
                  <MovieTitle>{data.title}</MovieTitle>
                  <MovieYear>{data.release_date.slice(0, 4)}</MovieYear>
                </SubCon>
              </CoverImg>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
