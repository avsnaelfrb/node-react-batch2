exports.basicAuth = (req, res, next) => {
  var authHeader = req.headers.authorization;

  if (!authHeader) {
    const err = new Error("You're not Authorized");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }

  var auth = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  var user = auth[0];
  var pass = auth[1];

  if (user == "admin123" && pass == "admin123") {
    next();
  } else {
    const err = new Error("You're not Authorized");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
};
