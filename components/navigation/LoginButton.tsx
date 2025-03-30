"use client";

import { useState, useEffect } from "react";
import { signOut, getUserSession } from "@/actions/auth-actions";
import { User } from "@supabase/supabase-js";
import { Button } from "../ui/button";

const LoginButton = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const sessionUser = await getUserSession();
      setUser(sessionUser ?? null); // Ensure it is either User or null
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  return user ? (
    <div className="flex items-center gap-2">
      <span>
        Welcome, {user?.user_metadata.first_name}{" "}
        {user?.user_metadata.last_name}
      </span>
      {" | "}
      <Button
        className="bg-grey-100 text-grey-900 px-4 py-2 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  ) : (
    <button>Login</button>
  );
};

export default LoginButton;
