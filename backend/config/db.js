import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ DB Connected Successfully");
    } catch (error) {
        console.log("❌ DB Connection Error:");
        console.log(error.message);
        // Don't call process.exit(1) — it crashes serverless functions on Vercel
    }
}
