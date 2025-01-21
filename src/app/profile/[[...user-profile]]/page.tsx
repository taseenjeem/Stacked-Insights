import { UserProfile } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <UserProfile />
    </div>
  );
}
