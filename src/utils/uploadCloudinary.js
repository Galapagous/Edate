import axios from "axios";

export const uploadToCloudinary = async (file)=>{

    if(!file){
        return null;
    }

    // prepare file
    const formData = new FormData()
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_APP_CLOUDINARY_PRESET); // your upload preset name
    formData.append('cloud_name', import.meta.env.VITE_APP_CLOUDINARY_NAME); // your upload preset name

    try {
        const resource_type = file.type.startsWith('image/') ? 'image' :
        file.type.startsWith('video/') ? 'video' : 'raw';

        // upload to cloudinary
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_APP_CLOUDINARY_NAME}/${resource_type}/upload`,
            formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            }
        )
        
        // return secure url
        return response.data.url;
    } catch (error) {
        console.error('Cloudinary error', error)
        return null;
    }
}