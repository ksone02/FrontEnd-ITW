import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KakaoLogin: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];

    const getKakaoToken = () => {
        fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=authorization_code&client_id=301680b168fe30cd27fdafb039d82a6a&redirect_uri=http://localhost:3000/auth/kakaologin&code=${KAKAO_CODE}`,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    localStorage.setItem('token', data.access_token);
                    console.log('success');
                    getJwtToken();
                } else {
                    console.log('fail');
                    navigate('/');
                }
            })
            .catch((err) => console.log(err));
    };

    const getJwtToken = () => {
        axios
            .get(
                `https://depth-server.herokuapp.com/auth/createjwttoken/${localStorage.getItem(
                    'token',
                )}`,
            )
            .then((res) => {
                console.log('accesstoken: ', res.data);
                if (res.data) {
                    localStorage.setItem('accessToken', res.data);
                    console.log('success');
                } else {
                    console.log('fail');
                    navigate('/');
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (!location.search) return;
        getKakaoToken();
    }, []);

    return <div>KakaoLogin</div>;
};

export default KakaoLogin;
