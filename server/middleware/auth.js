const { User } = require('../models/User'); 

let auth = (req, res, next) => {
    // 인증 처리

    //쿠키에서 토큰가져옴
    let token = req.cookies.x_auth;


    // 토큰 복호화한 후 유저
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true})

        req.token = token; 
        req.user = user;
        next();
    })


    // 유저 있으면 인증 o

    // 유저 없으면 인증 x
}

module.exports = {auth};