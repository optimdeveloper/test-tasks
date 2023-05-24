import Alert from "../Alert";
import { useSelector } from "react-redux";

export default function AlertContainer() {
  const toasts = useSelector(state => state.toast?.toasts);

  return (
    <div className="absolute w-full z-50 top-0">
      <div className="max-w-xl mx-auto">
        {toasts &&
          toasts.map((toast,index) => (
            <Alert
              id={index}
              key={index}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  );
}