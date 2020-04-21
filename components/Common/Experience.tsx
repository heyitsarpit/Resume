import styled from '@emotion/styled';

interface SectionProps {
  title: string;
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #074c99;
`;

const Experience: React.FC<SectionProps> = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

export default Experience;
