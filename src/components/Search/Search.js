import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { PageTitle } from "../PageTitle";
import { Container } from "../Container";
import { movieApi } from "../../api";
import { PageNotFound } from "../PageNotFound";
import { Loader } from "../Loader";
import { Link } from "react-router-dom";

const Form = styled.form`
  margin-top: 120px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 60px;
  border: 1px solid #555;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 18px;
  &::placeholder {
    font-size: 18px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  margin-top: 50px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Con = styled.div``;

const ConBg = styled.div`
  height: 180px;
`;

const Title = styled.div`
  margin-top: 10px;
`;

const NoSearch = styled.div`
  padding: 50px 0;
`;

export const Search = () => {
  const [search, setSearch] = useState();
  //검색하기를 눌렀을때 로딩이 떠야해서 ()비워둠
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [noSearch, setNoSearch] = useState("");

  //1
  const { register, getValues, handleSubmit } = useForm({
    mode: "onChange",
  });

  // 4
  const onSubmit = async () => {
    const { term } = getValues();

    setLoading(true);

    try {

      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setNoSearch("검색 결과가 없습니다😥");
      } else {
        setNoSearch("");
        setSearch(results);
      }

      setSearch(results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  console.log(search);


  return (
    <div>
      <PageTitle title="영화검색" />

      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("term", {
              required: "true",
            })}
            type="text"
            placeholder="검색..."
          />
        </Form>

        {error ? (
          <PageNotFound />
        ) : (
          <div>
            {loading ? (
              <Loader />
            ) : (
              <ConWrap>
                {noSearch === "" && search ? (
                  search.map((searchData) => (
                    <Link key={searchData.id} to={`/detail/${searchData.id}`}>
                      <Con>
                        <ConBg
                          style={{
                            background: `url(${
                              searchData.backdrop_path
                                ? `https://image.tmdb.org/t/p/original${searchData.backdrop_path}`
                                : `https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=`
                            }) center/cover`,
                          }}
                        />
                        <Title>{searchData.title}</Title>
                      </Con>
                    </Link>
                  ))
                ) : (
                  <NoSearch>{noSearch}</NoSearch>
                )}
              </ConWrap>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};
