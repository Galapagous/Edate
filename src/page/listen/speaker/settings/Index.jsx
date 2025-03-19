import { yupResolver } from "@hookform/resolvers/yup";
import { listenerProfile } from "../../../../validation/companion.validation";
import { useForm } from "react-hook-form";
import { useMakerequest } from "../../../../hook/useMakeRequest";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { SPEAKER_URL } from "../../../../constant/resources";
import { updateProfile } from "../../../../redux/auth/user.slice";

const Settings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(listenerProfile) });
  const makeRequest = useMakerequest();
  const userProfile = useSelector((state) => state.user?.currentUser?.profile);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const payload = { ...data, slug: userProfile?.slug };
    setLoading(true);
    makeRequest(
      SPEAKER_URL,
      "POST",
      payload,
      (data) => {
        if (data?.userProfile) dispatch(updateProfile(data?.userProfile));
      },
      (error) => {
        console.log(error);
      },
      () => {
        setLoading(false);
      }
    );
  };

  return (
    <div className="w-full min-h-[500px] p-2 bg-gray-50 flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
        <div className="flex flex-col items-start justify-start gap-1">
          <label htmlFor="">UserName</label>
          <input
            className="border-2 bg-white p-2 w-full"
            type="text"
            {...register("username")}
            placeholder="This will be your profile name"
          />
          {errors.username ? (
            <p className="text-red-400 text-sm">{errors?.username?.message}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="px-4 py-[5px] bg-blue-400 hover:bg-blue-500 text-white rounded-sm mt-2"
        >
          {loading ? "loading .." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default Settings;
