import { getUser } from "@/services/auth.services";
import { NavUser } from "./nav-user";

async function GetNavUser() {
  const user = await getUser();
  return <NavUser user={user} />;
}

export default GetNavUser;
