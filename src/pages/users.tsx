/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Box from "../components/atoms/Box/index";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { GraphQLClient } from "graphql-request";
import { getPages } from "../queries/pages";
import styled, { css } from "styled-components";
import Title from "@/components/atoms/Title/styles";
import Text from "../components/atoms/Text";


const inter = Inter({ subsets: ["latin"] });

const BoxWrapper = styled(Box)(
  ({ theme }) => css`
      background-color: ${theme.colors.Interaction};
      display:flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      padding: 2rem;
      min-height: 300px;
  `,
);
const MainWrapper = styled.main(
  () => css`
      display:flex;
      justify-content: center;
      flex-wrap: wrap;
  `,
);

const Home: FC<{
  // grid: {
  //   items: {
  //     title: string;
  //     description: string;
  //   }[];
  // };
  // stack: {
  //   items: {
  //     title: string;
  //     description: string;
  //   }[];
  // };
}> = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <MainWrapper>
          <Title as="h2">Welcome to your diary!</Title>
          <BoxWrapper>
          <Text>Your maximum kcal limit</Text>
          </BoxWrapper>
          <BoxWrapper>
          dairy
          </BoxWrapper>
        </MainWrapper>
        <Footer/>
    </>
  );
};

export const getServerSideProps = async () => {
  const hygraph = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_API_URL || "",
    {
      headers: {
        authorization: process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN || "",
      },
    }
  );

  const data = await hygraph.request(getPages());
  console.log(data);

  return {
    props: {
    },
  };
};

export default Home;