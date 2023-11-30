"use client";
import { useState } from "react";
import PersonalInfoNavigation from "./PersonalInfoNavigation";
import UserInfo from "./UserInfo";

const UserAcountPersonalInfo = () => {
  const [isActive, setIsActive] = useState("My personal information");

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
      <div className="flex items-start gap-[123px]">
        {isActive === "My personal information" && <UserInfo />}
      </div>
    </div>
  );
};

export default UserAcountPersonalInfo;
