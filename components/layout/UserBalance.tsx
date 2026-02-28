import { getUser } from "@/services/auth.services";

async function UserBalance() {
  const user = await getUser();
  return (
    <p className="text-xs font-medium rounded-full px-2 py-0.5 flex justify-center items-center bg-primary text-primary-foreground">
      Your balance is: ${user?.balance}
    </p>
  );
}

export default UserBalance;
