import styled from "styled-components";
export const LayoutWrapper = styled.div`
  /* display: grid; */
  /* grid-template-rows: 100vh 1fr; */
  padding-inline: 20px;
  overflow-y: auto !important;
  height: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(166, 171, 183, 0.7);
    border-radius: 40px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  @media (max-width: 600px) {
    grid-template-rows: 60vh 1fr;
  }
`;
export const NavbarStyles = styled.div`
  padding-inline: 20px;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  // background-color: whitesmoke;
  color: black;
  font-family: cursive;
  .middleman {
    /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif, 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif; */
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-style: italic;
    flood-color: red;
    text-orientation: sideways-right;
    font-size: 30px;
    font-kerning: auto;
    flood-opacity: 50%;
  }

  .middleman {
    font-size: 20px;
  }
`;
