"use client";

import { useState, useEffect } from "react";
import { signOut, getUserSession } from "@/actions/auth-actions";
import { User } from "@supabase/supabase-js";

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
    <button onClick={handleLogout}>
      Welcome, {user?.user_metadata.first_name} {user?.user_metadata.last_name}
    </button>
  ) : (
    <button>Login</button>
  );
};

export default LoginButton;
