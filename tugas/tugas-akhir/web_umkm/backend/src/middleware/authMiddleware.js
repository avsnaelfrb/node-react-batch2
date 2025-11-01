import jwt from "jsonwebtoken"

export const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    try {        
        if(authHeader && authHeader.startsWith("Barier")){
            const token = authHeader.split(" ")[1]
            req.user = jwt.verify(token, process.env.JWT_SECRET)
            next();
        }
    } catch (error) {
        res.status(500).json({ message: "otorisasi token gagal", message: error.message })
    }
} 

export const adminOnly = async (req, res) => {
    if (req.user && req.user.role === "ADMIN") {
        next()
    } else {
        res.status(510).json({ message: "Akses ditolak, hanya untuk admin" })
    }
}