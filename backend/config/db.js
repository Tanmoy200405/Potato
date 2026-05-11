import mongoose from "mongoose";
import dns from "node:dns";

// Forcing DNS resolution to Google/Cloudflare to bypass local network blocks
dns.setServers(['1.1.1.1', '8.8.8.8']);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ DB Connected Successfully");
    } catch (error) {
        console.log("❌ DB Connection Error:");
        console.log(error.message);
        process.exit(1);
    }
}
