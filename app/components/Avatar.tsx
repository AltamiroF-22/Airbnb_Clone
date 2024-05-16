"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
    className="rounded-full"
      height={38}
      width={38}
      alt="Avatar"
      src="/images/default-avatar.png"
    />
  );
};

export default Avatar;
