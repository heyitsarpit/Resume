import styled from '@emotion/styled';

interface SectionProps {
  date: string;
  role?: string;
  company?: string;
  skills?: string;
  title?: string;
}

const Date = styled.div``;

const Title = styled.h4``;

const Role = styled.span`
font-style: bold;

`;
const Company = styled(Role)``;
const Skills = styled.h4``;

const ExperienceBody: React.FC<SectionProps> = ({
  date,
  role,
  title,
  company,
  skills,
  children
}) => (
  <>
    <Date>
      <time>{date}</time>
    </Date>
    {!title ? (
      <>
        <h3>
          <Role>{role}</Role> @ <Company>{company}</Company>
        </h3>
        <Skills>{skills}</Skills>
      </>
    ) : (
      <Title>{title}</Title>
    )}

    <p>{children}</p>
  </>
);

export default ExperienceBody;
