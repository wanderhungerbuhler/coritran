import styled, { css } from 'styled-components';

export const Page = styled.div`
  width: 100%;

  .content-consult {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 150px;

    width: 100%;
    height: 330px;
    background: url("/images/bg-consult.svg") no-repeat center center;
    background-size: cover;
    span{ font-size: 2rem; font-weight: bold; color: #FFF; }
    p { color: #FFF; }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 0 100px;
  min-height: 100px;
  background: #001F51;

  .btn-consult {
    position:relative;
    width: 25%;
    margin: 0 auto;
    background: #FFF;
    border-radius: 5px;
    text-align: center;
    padding: 20px 0px;
    z-index: 100;
    top: -20px;

    span {
      font-weight: 600; font-size: 1rem; letter-spacing: -1px;
      a { text-decoration: none; color: #001F51;}
    }
  }

  ul {
    li {
      a { color: #fff !important;}
    }
  }

  .copy {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid #002F51;
    margin-top: 100px;
    padding: 20px;
    color: #ccc;
    font-size: .8em;

    .developer {
      display: flex;
      justify-content: center;
      align-items: center;
      
      span { color: #ccc; font-size: 1em; }
    }
  }

`;

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
`;

export const Menu = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {

    li {
      list-style: none;
      display: inline-block;
      padding: 0 20px;

      a { text-decoration: none; color: #111; }

      &:nth-child(4) {
        border: 1px solid #001F51;
        border-radius: 50px;
        padding: 5px 10px;
        a { color: #001F51; }
      }

    }
  }
`;

export const Slider = styled.div`
  max-width: 980px;
  width: 100%;
`;


export const Content = styled.div`
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;

    article {
      width: 200px;
      height: 200px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      span { font-weight: bold; font-size: 4rem; color: #001F51; letter-spacing: -5px; }
      p { font-size: 1em; color: #001F51; }

    }
  }

  .line-separator {
    width: 3px;
    height: 350px;
    background: linear-gradient(#FFF, #001F51);
    border-radius: 50px;
    display: block;
    margin: 0px auto;
    margin-bottom: 100px;
  }

  .content-vision {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    .content-vision-description {
      h1 { font-weight: bold; color: #001F51;
        b { font-size: 4rem; }
      }

      &::after {
        content: "";
        width: 70%;
        height: 3px;
        background: linear-gradient(90deg, #FFF, #001F51) repeat-y center center;
        display: block;
        margin-top: 20px;
        border-radius: 50px;
      }

      span { font-weight: bold; font-size: 2rem; letter-spacing: -2px; color: #001F51; }
      p { font-size: 1rem; color: #8B8B8B; line-height: 25px; margin-top: 20px; }

    }
  }

  .content-partner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 250px;

    h1 { font-weight: bold; color: #001F51;

      &::after {
        content: "";
        width: 40%;
        height: 3px;
        background: linear-gradient(90deg, #FFF, #001F51) repeat-y center center;
        display: block;
        margin-top: 10px;
        border-radius: 50px;
      }
    }
    p { font-size: 1rem; color: #8B8B8B; line-height: 25px; margin-top: 20px; }
  }
`;
