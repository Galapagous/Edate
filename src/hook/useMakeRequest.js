import { useAxiosAuth } from "./useAxiosAuth";
import useLogout from "./useLogout";
import { toast } from "sonner";


export function useMakerequest(){
    const axiosAuth = useAxiosAuth();
    const logout = useLogout();

    return async(
        url,
        method,
        formData,
        onSuccess,
        onFail,
        onFinally,
        options
    ) =>{
        const dontNotifyOnSuccess = options?.dontNotifyOnSuccess
        const dontNotifyOnFail = options?.dontNotifyOnFail

        try{
            const response = await axiosAuth[method.toLowerCase()](url, formData)

            if(response.data.status) {
                const {message, data, metadata, pagination} = response.data;
                const responseHeader = response?.config?.headers;

                if(!dontNotifyOnSuccess) {
                    if(typeof message === "string" && message?.length > 0) {
                        toast.success(message)
                    }else if (Array.isArray(message)) {
                        message?.map((mess) => toast.success(mess));
                    }else{
                        toast.success("operation successful")
                    }
                }

                onSuccess(data, metadata, pagination, responseHeader);
                return data
            } else {
                const message = response?.data?.message;
        if (message) {
          if (typeof message === "string" && message.length > 0) {
            toast.error(message);
          } else if (typeof message === "object") {
            message?.map((mess) => toast.error(mess));
          } else {
            toast.error("Something went wrong, please try again.");
          }
        } else {
          toast.error("Something went wrong, please try again.");
        }
            }
        }catch(err){
            if (err?.response?.request?.status === 401) {
                return logout(true);
              }
              if (!dontNotifyOnFail) {
                const message = err?.response?.data?.message;
                if (message) {
                  if (typeof message === "string" && message.length > 0) {
                    toast.error(message);
                  } else if (typeof message === "object") {
                    message?.map((mess) => toast.error(mess));
                  } else {
                    toast.error("Something went wrong, please try again");
                  }
                } else {
                  toast.error("Something went wrong, please try again");
                }
              }
        
              onFail(err);
        }finally{
            onFinally();
        }
    }
}