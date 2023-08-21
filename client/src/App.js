import Main from './pages/Main.jsx';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/header/Header.jsx';
import { Login } from './pages/Login.jsx';
import Footer from './components/Footer.jsx';
import Ask from './pages/Ask.jsx';
import Sign from './pages/Sign.jsx';
import AskEdit from './pages/AskEdit.jsx';
import MyPage from './pages/MyPage.jsx';
import Answer from './pages/Answer.jsx';
import Question from './pages/Question.jsx';

const App = () => {
  const location = useLocation();
  // footer가 없는 페이지 경로
  const hideFooterPaths = ['/signup', '/login'];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Header />
      <div id="pages">
        <Routes>
          <Route path="/" element={<Main />} />
          {/* 정의되지 않은 페이지라면 Main으로 리다이렉트 */}
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/mypage" element={<MyPage />} />
          {/*! 아래 컴포넌트 이름 변경해야 함! */}
          <Route path="/questions" element={<Question />} />
          <Route path="/questions/:questionId" element={<Answer />} />
          <Route path="/questions/:questionId/edit" element={<AskEdit />} />
        </Routes>
        {!shouldHideFooter && <Footer />}
      </div>
    </>
  );
};

export default App;
