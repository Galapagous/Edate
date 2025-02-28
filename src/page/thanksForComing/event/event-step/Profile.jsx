import { useRef, useState } from "react"
import { FiFile } from "react-icons/fi"

const Profile = () => {
  const imageRef = useRef()
  const [imageURL, setImageURL] = useState('')
  const handleProfileImage = (e)=>{
    const file = e.target.files[0]
    const imageURL = URL.createObjectURL(file)
    setImageURL(imageURL)
  }
  return (
    <div>
      <h1 className="font-semibold text-white">Let an update from you</h1>
      <div className="mt-3">
          <h1 className="font-thin text-lg text-neutral-700">Your nickname</h1>
          <input className="w-full p-2 border-2 border-main_200 text-main_600" type="text" name="nickname" id="nickname" placeholder="Galapagous"/>
        </div>
      <div className="mt-3">
          <h1 className="font-thin text-lg text-neutral-700">Profile Image</h1>
          <input onChange={handleProfileImage} ref={imageRef} className="w-full hidden p-2 border-2 border-main_200 text-main_600" type="file" name="nickname" id="nickname" placeholder="Galapagous"/>
          <div className="flex items-center justify-center p-4 border-2 border-dotted border-main_200">
            {imageURL ? 
            <img className="w-full h-[200px] object-cover" src={imageURL} alt="user profile"/>
            :
            <FiFile onClick={()=>{imageRef?.current?.click()}} className="text-main_200 cursor-pointer"/>}
            </div>
            <p className="font-thin text-sm">Dont worry, we only need someone to reference</p>
        </div>
    </div>
  )
}

export default Profile