import styled from '@emotion/styled';

const HeaderStyles = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1cm;
  grid-template-areas: '. .';
`;

const Name = styled.h1``;

const Contacts: React.FC = () => {
  return <div>X</div>;
};

const Header: React.FC = () => (
  <HeaderStyles>
    <Name>Arpit Bharti</Name>
    <Contacts />
  </HeaderStyles>
);

export default Header;
