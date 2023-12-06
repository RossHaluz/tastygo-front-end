"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserAcountDetails = ({ selectFile }) => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-[16px]">
      {session && (
        <>
          {!selectFile && session?.user?.image && (
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
              <Image
                src={session?.user?.image}
                alt="User avatar"
                className="object-contain w-auto h-auto"
                width={90}
                height={90}
              />
            </div>
          )}

          {selectFile ? (
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
              <Image
                src={
                  selectFile[0]
                    ? URL.createObjectURL(selectFile[0])
                    : session.user.image
                }
                alt="User avatar"
                width={90}
                height={90}
                className="object-contain w-auto h-auto"
              />
            </div>
          ) : (
            !session?.user?.image && (
              <div className="bg-[#152F23] w-[90px] h-[90px] rounded-[50%] py-[16px] px-[28px] text-[48px] leading-[57.6px] text-[#fff] flex justify-center items-center">
                {session?.user?.name && session?.user?.name?.slice(0, 1)}
              </div>
            )
          )}
          <div className="flex flex-col w-[320px]">
            <h2 className="text-[32px] leading-[38.4px] font-medium">
              {session?.user?.name && session?.user?.lastName
                ? `${session?.user?.name} ${session?.user?.lastName}`
                : session?.user?.name}
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
