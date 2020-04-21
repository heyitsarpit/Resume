import Meta from './Meta';
import Header from './Header';
import styled from '@emotion/styled';
import WorkExperience from './WorkExperience';

const Main = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1cm;
  grid-template-areas: '. .';
`;

const Column = styled.article`
  display: flex;
  flex-direction: column;
`;

const Resume: React.FC = () => {
  return (
    <>
      <Meta />
      <Header />
      <Main>
        <Column>
          <WorkExperience />
        </Column>
        <Column>
          <WorkExperience />
        </Column>
      </Main>
    </>
  );
};

export default Resume;
