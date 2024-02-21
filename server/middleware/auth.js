import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            res.status(403).json('Access Denied');
        }

        // if (token.startsWith("Bearer ")) {
        //     token = token.slice(7, token.length).trimleft();
        // }

        if (token.startsWith("Bearer ")) {
            token = token.split(' ')[1];
            // token = tokenArray[1];
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified;

        console.log('token verified')

        next();
    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
};