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
          <Route path="/questions" element={<Question />} />
          <Route path="/*" element={<Question />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
          <Route path="/questions/:questionId" element={<Answer />} />
          <Route path="/questions/:questionId/edit" element={<AskEdit />} />
        </Routes>
        {!shouldHideFooter && <Footer />}
      </div>
    </>
  );
};

export default App;
