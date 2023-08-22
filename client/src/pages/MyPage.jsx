import { styled } from 'styled-components';
import { HiPencil } from 'react-icons/hi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdCake } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import logo from '../assert/logo1.png';
import logo2 from '../assert/posts.jpg';
import LoginNav from '../components/LoginNav.jsx';
import lucky7 from '../assert/lucky-7-min-min.png';
// facebook 사진 테스트용
import { isPC, isMobile } from '../utils/mediaQueryUtils';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const MypageLayout = styled.section`
  display: flex;
  justify-content: center;
`;

const MypageBox = styled.section`
  width: 1100px;
  text-align: left;
  padding: 24px;
`;

const ProfileBtn = styled.button`
  padding: 7px 10px;
  border: 1px solid #545454;
  margin: 0 5px;
  border-radius: 5px;
  color: #545454;
  font-size: 13px;
  background-color: #fff;
  height: 35px;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
  span {
    color: #3b4045;
  }
`;

const MypageProfile = styled.div`
  width: 1067px;
  height: 144px;
  display: flex;
  //position: relative;
  color: #545454;

  div.profileContents {
    padding: 0 10px;
    h1 {
      font-size: 34px;
      color: black;
      margin: 4px 4px 12px 12px;
    }
    p {
      display: inline;
      padding: 0 10px;
      font-size: 13px;
    }
    svg {
      width: 24px;
      padding: 0 5px;
    }
    img {
      width: 128px;
      height: 128px;
    }
  }
`;

const MypageCategoryWrap = styled.ul`
  list-style: none;
  margin: 30px 0;
  .active {
    background-color: #f4852b;
    color: #fff;
  }
`;

const MypageCategory = styled.li`
  display: inline-block;
  border-radius: 20px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
`;

const PostAbout = styled.div`
  margin: 5px 0 10px 0;
  div {
    display: flex;
    justify-content: center;
    width: 782px;
    height: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #f8f9f9;
    margin-top: 8px;
    padding: 30px;
    font-size: 13px;
  }
  p {
    width: 300px;
  }

  &:last-child h1 {
    margin-top: 30px;
  }
  a {
    color: #0074cc;
  }
  a:hover {
    color: #0074cc;
    text-decoration: none;
  }
`;

const PostBadges = styled.div`
  margin: 5px 0 10px 0;
  div {
    display: flex;
    justify-content: center;
    font-size: 13px;
    width: 782px;
    height: 82px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #f8f9f9;
    margin-top: 8px;
    padding: 30px;
  }
  &:last-child h1 {
    margin-top: 30px;
  }
  a {
    color: #0074cc;
  }
  a:hover {
    color: #0074cc;
    text-decoration: none;
  }
`;

const PostPosts = styled.div`
  margin: 5px 0 10px 0;
  div {
    text-align: center;
    font-size: 13px;
    width: 782px;
    height: 400px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #f8f9f9;
    margin-top: 8px;
    padding: 55px;
  }
  img {
    width: 184px;
    height: 173px;
  }
  &:last-child h1 {
    margin-top: 30px;
  }
`;

const PostStats = styled.div`
  margin: 5px 0 10px 0;
  width: 250px;
  div {
    width: 235px;
    height: 125px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    margin-top: 8px;
  }
  &:last-child h1 {
    margin-top: 30px;
  }
`;

const PostStatsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50px;
  height: 25px;
  border: none !important;

  p {
    width: 107.5px;
    font-size: 13px;
    color: #6a737c;
  }

  span {
    font-size: 17px;
    color: #0c0d0e;
  }
`;

const PostCommunities = styled.div`
  margin: 5px 0 10px 0;
  width: 250px;
  div {
    display: flex;
    width: 215px;
    height: 44px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    font-size: 13px;
    padding: 12px;
    margin-top: 8px;
  }

  &:last-child h1 {
    margin-top: 30px;
  }
`;

const PostWrap = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Mypage = () => {
  const isDesktop = isPC();
  const isMobileScreen = isMobile();
  const url = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState({});
  const getUser = useSelector((state) => state.users.user);

  return (
    <MypageLayout>
      <LoginNav />
      <MypageBox>
        <MypageProfile>
          <img
            src={getUser?.avatarImg ? getUser.avatarImg : lucky7}
            alt="test용"
          />
          <div className="profileContents">
            <h1>{getUser.userName ? ` ${getUser.userName}` : 'Lucky 7'}</h1>
            <p>
              <MdCake />
              Member for 3 days
            </p>
            <p>
              <AiOutlineClockCircle />
              {getUser.createdAt
                ? ` ${getUser.createdAt}`
                : 'Last seen this week'}
            </p>
            <p>
              <FaRegCalendarAlt />
              Visited 3 days, 3 consecutive
            </p>
          </div>
          <div>
            <ProfileBtn>
              <span>
                <HiPencil size={16} />
                Edit profile
              </span>
            </ProfileBtn>
          </div>
          <div>
            <ProfileBtn>
              <span>Profiles</span>
            </ProfileBtn>
          </div>
        </MypageProfile>
        <MypageCategoryWrap>
          <MypageCategory className="active">Profile</MypageCategory>
          <MypageCategory>Activity</MypageCategory>
          <MypageCategory>Saves</MypageCategory>
          <MypageCategory>Settings</MypageCategory>
        </MypageCategoryWrap>
        <PostWrap>
          <PostStats>
            <h1>Stats</h1>
            <div>
              <PostStatsBox>
                <p>
                  <span>&nbsp;&nbsp;&nbsp;1</span>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;reputation
                </p>
                <p>
                  <span>&nbsp;&nbsp;&nbsp;0</span>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;reached
                </p>
                <p>
                  <span>&nbsp;&nbsp;&nbsp;0</span>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;answers
                </p>
                <p>
                  <span>&nbsp;&nbsp;&nbsp;0</span>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;questions
                </p>
              </PostStatsBox>
            </div>
          </PostStats>
          <PostAbout>
            <h1>About</h1>
            <div>
              <p>
                Your about me section is currently blank. Would you &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;like
                to add one? <a href="/mypage">Edit profile</a>
              </p>
            </div>
          </PostAbout>
          <PostCommunities>
            <h1>Communities</h1>
            <div>
              <img src={logo} alt="logo"></img>&nbsp;Stack Overflow
            </div>
          </PostCommunities>
          <PostBadges>
            <h1>Badges</h1>
            <div>
              <p>
                You have not earned any
                <a href="https://stackoverflow.com/help/badges"> badges</a>
              </p>
            </div>
          </PostBadges>
          <PostPosts>
            <h1>Posts</h1>
            <div>
              <p>
                <img src={logo2} alt="logo2"></img>
              </p>
              <br></br>
              <p>Just getting started? Try answering a question!</p>
              <br></br>
              <p>
                Your most helpful questions, answers and tags will appear here.
                <br></br>
                Start by answering a question or selecting tags that match
                <br></br>
                topics you’re interested in.
              </p>
            </div>
          </PostPosts>
        </PostWrap>
      </MypageBox>
    </MypageLayout>
  );
};

export default Mypage;
