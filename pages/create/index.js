import CreateUserForm from "@/components/CreateUserForm";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CreateUser({ createUserFunction, isLoggedIn }) {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  return (
    <div>
      <CreateUserForm createUserFunction={createUserFunction} />
    </div>
  );
}
