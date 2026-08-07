import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json())
app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token", "Origin", "X-Requested-With", "Accept"]
}))
app.options('*', cors())

// db connection
connectDB()

// api endpoints (dual mounted to support both /api and root paths)
app.use(["/api/user", "/user"], userRouter)
app.use(["/api/food", "/food"], foodRouter)
app.use("/images", express.static('uploads'))
app.use(["/api/cart", "/cart"], cartRouter)
app.use(["/api/order", "/order"], orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
});

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
}
export default app;