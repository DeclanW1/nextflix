import ProfileBox from "../components/ProfileBox";
import Image from "next/image";
import Link from "next/link";

export function RecruiterCard() {
  return (
    <ProfileBox
      name="Recruiter"
      href="/main-page"
      image="/profile-pic/recruiter.png"
    />
  );
}
