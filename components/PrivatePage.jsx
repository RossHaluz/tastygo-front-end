"use client";
import { useAuth } from "@/hooks/useAuth";

const PrivatePage = ({ children }) => {
  const { session, status } = useAuth();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <div>{session && children}</div>;
};

export default PrivatePage;
