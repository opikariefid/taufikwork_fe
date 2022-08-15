import { Button, IconButton } from "@mui/material";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";

export default function Header() {
  return (
    <div className="flex gap-2 font-quicksand items-center">
      <Link href={'/'}>
        <IconButton>
          <RiHome2Line className="text-3xl text-black pointer-events-none"/>
        </IconButton>
      </Link>
      <Link href={'/projects'}>
        <Button className="font-quicksand text-base underline text-black">My Project</Button>
      </Link>
    </div>
  )
}