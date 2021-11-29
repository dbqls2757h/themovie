import { useEffect, useState } from "react";
import styled from "styled-components";

import { movieApi } from "../../api";
import { Loader } from "../Loader";
import { MainBanner } from "./MainBanner";
import { Movies } from "./Movies";
import { Container } from "../Container";
import "../../style/swiper.css";
import { PageTitle } from "../PageTitle";

const Wrap = styled.div``;

const Section = styled.section`
  margin-bottom: 80px;
`;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [upComing, setUpComing] = useState();
  const [popular, setPopular] = useState();
  const [topRate, setTopRate] = useState();
  const [loading, setLoading] = useState(true);
  const movieNum = 1;

  useEffect(() => {
    const movieData = async () => {
      //   console.log(await movieApi.nowPlaying());
      try {
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        setNowPlay(nowPlaying);

        const {
          data: { results: upComing },
        } = await movieApi.upComing();
        setUpComing(upComing);

        const {
          data: { results: popular },
        } = await movieApi.popular();
        setPopular(popular);

        const {
          data: { results: topRate },
        } = await movieApi.topRate();
        setTopRate(topRate);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재상영영화", nowPlay);
  console.log("개봉예정영화", upComing);

  return (
    <>
      <PageTitle title="홈" />

      {loading ? (
        <Loader />
      ) : (
        <Wrap>
          {nowPlay && <MainBanner now={nowPlay} num={movieNum} />}

          <Section>
            <Container>
              <Movies movieData={nowPlay} title="현재 상영 영화" />
              <Movies movieData={upComing} title="개봉 예정 영화" />
              <Movies movieData={popular} title="인기 영화" />
              <Movies movieData={topRate} title="상영 순위" />
            </Container>
          </Section>
        </Wrap>
      )}
    </>
  );
};
