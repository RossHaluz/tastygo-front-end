"use client";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import Eddit from "../../public/images/user/edit.svg";
import Remove from "../../public/images/avatar/remove.svg";
import Image from "next/image";

const UserAcountAvatar = ({ selectFile, setSelectFile }) => {
  const { data: session, update } = useSession();
  const fileRef = useRef();

  const handleChangeAvatar = (e) => {
    console.log("click");
    setSelectFile(e.target.files);
  };

  const handleRemoveAvatar = async () => {
    await setSelectFile(null);

    await update({
      ...session,
      user: {
        ...session?.user,
        image: "",
      },
    });
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-[18px] leading-[21.6px] font-medium">Photo</h3>
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
              alt="user avatar"
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
        <input
          type="file"
          className="hidden"
          ref={fileRef}
          onChange={handleChangeAvatar}
        />
        <div className="mx-auto flex items-center gap-[16px]">
          <button type="button" onClick={() => fileRef.current.click()}>
            <Eddit />
          </button>

          {selectFile && (
            <button type="button" onClick={handleRemoveAvatar}>
              <Remove />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAcountAvatar;
