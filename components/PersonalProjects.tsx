import ExperienceBody from './Common/ExperienceBody';
import Experience from './Common/Experience';

const WorkExperience: React.FC = () => (
  <Experience title="Selected Projects">
    <ExperienceBody
      date="2020"
      title="Ad Recommendation on YouTube Videos"
      skills={'python | nice'}>
      <ul>
        <li>Full stack app using Next JS and Flask</li>
        <li>
          Analysis of YouTube captions to generate keywords using RAKE then comparing against a
          product database to recommend most relevant domain of products
        </li>
        <li>Also, an analysis of string similarity measurement algorithms</li>
      </ul>
    </ExperienceBody>

    <ExperienceBody date="2018" title="8-Puzzle solver using A* Search" skills={'python | nice'}>
      <ul>
        <li>
          Implemented A* search algorithm in python to search through different states of a 3x3
          grid of numbers and map the correct steps required to reach the goal state of the board
        </li>
      </ul>
    </ExperienceBody>

    <ExperienceBody
      date="2018"
      title="Decentralized Organ Management System"
      skills={'python | nice'}>
      <ul>
        <li>
          A blockchain based decentralized network that is used to ensure information about any
          transfer of organs between hospitals is available to all hospitals that are participating
          in the network
        </li>
        <li>
          The second half is the organ matching system that works locally by matching the details
          of available patients with the organs available on the network and suggests ideal matches
          for transplantation
        </li>
      </ul>
    </ExperienceBody>

    <ExperienceBody date="2018" title="Supply Chain Management System" skills={'python | nice'}>
      <ul>
        <li>
          An Ethereum based blockchain solution for tracking shipments, handling payouts and
          resolving disputes regarding late shipments, developed the backend and frontend
          application servers
        </li>
      </ul>
    </ExperienceBody>
  </Experience>
);

export default WorkExperience;
