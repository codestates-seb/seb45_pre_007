import { styled } from 'styled-components';
import { faPen, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AsideLayout = styled.section`
  width: 300px;
  //padding: 20px;
  color: #232629;
  text-align: left;
`;
export const SideBanner = styled.aside`
  border: 1px solid #f3eac7;
  background-color: #fdf8e3;
  border-radius: 5px;
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
export const SideTitle = styled.li`
  font-size: 13px;
  padding: 12px 15px;
  border-bottom: 1px solid #f3eac7;
  background-color: #fcf3d5;
  font-weight: bold;
  color: #535961;
  text-align: left;
`;

export const SideContent = styled.li`
  display: flex;
  font-size: 13px;
  gap: 1rem;
  background-color: #fdf8e3;
  padding: 0 20px;
  margin: 12px 0;
  p {
    color: #232629;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
  .icon-message {
    color: #6db3dc;
  }
`;
const Aside = () => {
  return (
    <AsideLayout>
      <SideBanner>
        <ul>
          <SideTitle>The Overflow Blog</SideTitle>
          <SideContent>
            <span>
              <FontAwesomeIcon icon={faPen} size="xs" />
            </span>
            <span>
              <p>Why everyone should be an AppSec specialist (Ep. 598)</p>
            </span>
          </SideContent>
          <SideContent>
            <span>
              <FontAwesomeIcon icon={faPen} size="xs" />
            </span>
            <span>
              <p>Want better answers from your data? Ask better questions</p>
            </span>
          </SideContent>
        </ul>
        <ul>
          <SideTitle>Featured on Meta</SideTitle>
          <SideContent>
            <span>
              <FontAwesomeIcon icon={faMessage} className="icon-message" />
            </span>
            <span>
              <p>Moderation strike: Results of negotiations</p>
            </span>
          </SideContent>
          <SideContent>
            <span>
              <FontAwesomeIcon icon={faMessage} className="icon-message" />
            </span>
            <span>
              <p>
                Our Design Vision for Stack Overflow and the Stack Exchange
                network
              </p>
            </span>
          </SideContent>
          <SideContent>
            <span>
              <FontAwesomeIcon icon={faStackOverflow} />
            </span>
            <span>
              <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
            </span>
          </SideContent>
          <SideContent>
            <span>
              <FontAwesomeIcon icon={faStackOverflow} />
            </span>
            <span>
              <p>
                Collections: A New Feature for Collectives on Stack Overflow
              </p>
            </span>
          </SideContent>
          <SideContent>
            <span>
              <FontAwesomeIcon icon={faStackOverflow} />
            </span>
            <span>
              <p>Preview of Search and Question-Asking Powered by GenAI</p>
            </span>
          </SideContent>
          <SideContent>
            <span>
              <FontAwesomeIcon icon={faStackOverflow} />
            </span>
            <span>
              <p>
                Call for volunteer reviewers for an updated search experience:
                OverflowAI Search
              </p>
            </span>
          </SideContent>
        </ul>
      </SideBanner>
    </AsideLayout>
  );
};

export default Aside;
