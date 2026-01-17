const requests = {};

export const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requests[ip]) {
    requests[ip] = [];
  }

  requests[ip] = requests[ip].filter(
    time => currentTime - time < 60000
  );

  if (requests[ip].length >= 15) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requests[ip].push(currentTime);
  next();
};
