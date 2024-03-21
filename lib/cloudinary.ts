import { v2 as cloudinary } from 'cloudinary';

// Initialize Cloudinary with your configuration
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY_SECRET
});

export { cloudinary };
