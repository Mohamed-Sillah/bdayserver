import allowedOrigins from "./allowedOrigins.js";
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS!"), false);
        }
    },
    optionsSuccessStatus: 200,
    credentials: true,
};
export default corsOptions;
