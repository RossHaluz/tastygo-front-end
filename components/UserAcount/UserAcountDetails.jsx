"use client";
import { useSession } from "next-auth/react";

const UserAcountDetails = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-[16px]">
      {session && (
        <>
          <div className="bg-[#152F23] w-[90px] h-[90px] rounded-[50%] py-[16px] px-[28px] text-[48px] leading-[57.6px] text-[#fff] flex justify-center items-center">
            {session?.user?.name?.slice(0, 1)}
          </div>
          <div className="flex flex-col">
            <h2 className="text-[32px] leading-[38.4px] font-medium">
              {session?.user?.name}
            </h2>
            <h3 className="text-[16px] leading-[19.2px]">
              {session?.user?.email}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default UserAcountDetails;
