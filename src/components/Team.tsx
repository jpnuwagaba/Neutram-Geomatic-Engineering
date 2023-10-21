import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <>
      <div className="bg-sky-50 py-8 md:py-24">
        <div className="container">
          <div className="font-bold text-3xl text-themeBlue mb-5">Our Leadership Team</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <TeamMember
              name={"Morris Olanya"}
              role={"Co-Founder and Managing Director"}
              image={"morris.jpeg"}
              link={""}
            />
            <TeamMember
              name={"Hudson Kyambadde"}
              role={"Co-Founder and Visionary"}
              image={"hudson.jpeg"}
              link={""}
            />
            <TeamMember
              name={"Moses Lukenge"}
              role={"Co-Founder and Visionary"}
              image={"lukenge.png"}
              link={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
