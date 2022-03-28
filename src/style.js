import styled from "styled-components";
import MovieImage from "./assets/movie.png";

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 140px;
  background-color: #292929;
  padding-top: 40px;
  @media only screen and (max-width: 768px) and (min-width: 200px) {
    width: auto;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    width: auto;
}
`;

export const Text = styled.div`
   font-size: 20px;
   padding: 16px;
`;

export const TextContainer = styled.div`
  background-color: #292929;
  margin-left: 77px;
  border: 1px solid #FFFFFF;
  color: white;
  height: 60px;
  width: 193px;
  @media only screen and (max-width: 768px) and (min-width: 200px) {
    text-align: center;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    text-align: center;
     margin: auto;
}
`;

export const ImageContainer = styled.div`
  background-size: contain;
  background: url(${MovieImage});
  height: 100%;
  width: 100%;
`;

export const ImageText = styled.div`
  color: white;
  font-size: 72px;
  font-weight: 700;
  padding: 109px 0 159px 77px;
  @media only screen and (max-width: 768px) and (min-width: 200px) {
    text-align: center;
    font-size: 28px;
    padding: 109px 0 159px 0px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    text-align: center;
    font-size: 72px;
}
`;
export const Search = styled.h2`
  color: #000000;
  font-size: 24px;
  margin: ${({ margin }) => margin || "63px 0 0 77px"};
`;
export const SearchWrapper = styled.div`
  display: flex;
  height: 40px;
  width: 90%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: ${({ bottom }) => bottom || null};
`;
export const Input = styled.input`
  outline-color: #000000;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  padding: 15px;
  border-radius: 4px;
  width: 100%;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 18px 0 0 67px;
  padding: 109px 0 159px 77px;
  @media only screen and (max-width: 768px) and (min-width: 200px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    margin: 18px 0 0 0px;
    padding: 10px 0 0 35px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 18px 0 0 0px;
    padding: 10px 0 0 35px;
}
`;

export const GridItem = styled.div`
  margin: 24px 0 0 0;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 16px;
  border: solid 2px white;
  border-radius: ${({ radius }) => radius || null};
  width: ${({ width }) => width || "100%"};
`;

export const ImageWrapper = styled.div`
    margin-bottom: 5px;
    display: flex;
    margin-bottom: ${({ bottom }) => bottom || null};
    position: relative;
    border-radius: 13px;
    flex: 0 0 33.333333%
    justify-content: ${({ justifyContent }) => justifyContent || null};
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-top: 30%;
`;
