import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/common/Header';
import store from './store/config';
import Depth from './components/introduction/depth';
import Service from './components/introduction/service';
import DrinkList from './components/DrinkList/DrinkList';
import SoolotMachine from './components/soolotmachine/SoolotMachine';
import DrinkTestBox from './components/DrinkTest/DrinkTest';
import DrinkTestResult from './components/DrinkTest/DrinkTestResult';
import MonthDrink from './components/MonthDrink/MonthDrink';
import DrinkDetail from './components/Detail/DrinkDetail';
import { Profile } from './components/profile/Profile';
import { FixProfile } from './components/profile/fixprofile';
import { MyReviewAll } from './components/profile/MyReviewAll';
import { MyLikeAll } from './components/profile/MyLikeAll';
import ReviewWrite from './components/Review/ReviewWrite/ReviewWrite';
import KakaoLogin from './components/Login/KakaoLogin';

const Router: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route
                        path="/auth/:service/callback"
                        element={<KakaoLogin />}
                    />
                    <Route path="/auth/*" element={<KakaoLogin />} />
                    <Route path="/depth" element={<Depth />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/list/:id/spec" element={<DrinkDetail />} />
                    <Route path="/list" element={<DrinkList />} />
                    <Route path="/month" element={<MonthDrink />} />
                    <Route path="/soolot" element={<SoolotMachine />} />
                    <Route path="/ticketbox" element={<DrinkTestBox />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/fix" element={<FixProfile />} />
                    <Route path="/profile/MyReview" element={<MyReviewAll />} />
                    <Route
                        path="/profile/MyLikeAlcohole"
                        element={<MyLikeAll />}
                    />
                    <Route
                        path="ticketbox/result/:resultStr"
                        element={<DrinkTestResult />}
                    />
                    <Route path="/month" element={<MonthDrink />} />
                    <Route path="/list/:id/write" element={<ReviewWrite />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default Router;
