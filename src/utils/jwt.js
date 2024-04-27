const jwt = require("jsonwebtoken")

const generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_JWT, { expiresIn: '2h' })
}
const verifyToken = (token) => {
    console.log(token)
    return jwt.verify(token, "secreteKeyJoaquin")

}

module.exports = { generateToken, verifyToken }