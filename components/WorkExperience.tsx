import ExperienceBody from './Common/ExperienceBody';
import Experience from './Common/Experience';

const WorkExperience: React.FC = () => (
  <Experience title="Experience">
    <ExperienceBody
      date="May – September 2019"
      role="Open Source Developer"
      company="Mozilla"
      skills={'python | nice'}>
      <ul>
        <li>
          Funded via GSoC to work for Mozilla on a summer project to ship the public suffix list
          (PSL) to users
        </li>
        <li>
          Created an update system using the remote-settings API in Firefox to deliver an updated
          list to the client periodically
        </li>
        <li>Modified Firefox core to load the list dynamically at run time</li>
        <li>Feature shipped in Firefox 70</li>
      </ul>
    </ExperienceBody>

    <ExperienceBody
      date="June - August 2018"
      role="Research Intern"
      company="Splisys IT Consulting"
      skills={'python | nice'}>
      <ul>
        <li>
        Worked on creating a proof of concept supply chain management platform using the Ethereum blockchain
        </li>
        <li>
        The goal was to recreate a freight tracking and data storage system for the International oil shipping industry
        </li>
        <li>The backend was Solidity and NodeJS with a vanilla HTML/Bootstrap frontend connected via the Web3 interface</li>
      </ul>
    </ExperienceBody>

  </Experience>
);

export default WorkExperience;
