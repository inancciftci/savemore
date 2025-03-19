"use client";

import { useState, useEffect } from "react";
import { signOut, getUserSession } from "@/actions/auth-actions";

interface IUser {
  status: string;
  user: object;
}

const LoginButton = () => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const fetchUser = async () => {
      const sessionUser = await getUserSession();
      setUser(sessionUser);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  return user ? (
    <button onClick={handleLogout}>Log Out</button>
  ) : (
    <button>Login</button>
  );
};

export default LoginButton;
