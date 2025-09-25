import ProfileBox from "../components/ProfileBox";
import Image from "next/image";

export function RecruiterCard() {
  return (
    <ProfileBox
      name="Recruiter"
      href="/profile-page/recruiter"
      image="/profile-pic/placeholder.png"
    />
  );
}
