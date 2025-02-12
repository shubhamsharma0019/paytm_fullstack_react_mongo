import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode("your-secret-key");

export async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "Authorization header missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    req.userId = payload.userId; // Attach user ID to request
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
}
