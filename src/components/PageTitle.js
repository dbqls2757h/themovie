import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | the movie</title>
    </Helmet>
  );
};
