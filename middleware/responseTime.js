// middleware/startTimer.js
export default (req, res, next) => {
    req.startTime = process.hrtime(); // Use high-resolution real time
    next();
};
