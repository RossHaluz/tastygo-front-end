"use client";
import { useState } from "react";
import PersonalInfoNavigation from "./PersonalInfoNavigation";
import UserInfo from "./UserInfo";
import UserAcountAvatar from "./UserAcountAvatar";

const UserAcountPersonalInfo = ({ selectFile, setSelectFile }) => {
  const [isActive, setIsActive] = useState("My personal information");

  console.log(isActive);

  const buttons = ["My personal information", " Password"];

  return (
    <div className="flex flex-col gap-[48px]">
      <div className="flex items-center gap-[16px]">
        <PersonalInfoNavigation
          isActive={isActive}
          setIsActive={setIsActive}
          buttons={buttons}
        />
      </div>
      <div className="flex items-start gap-[100px]">
        {isActive === "My personal information" && (
          <>
            <UserInfo selectFile={selectFile} />
            <UserAcountAvatar
              selectFile={selectFile}
              setSelectFile={setSelectFile}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default UserAcountPersonalInfo;
