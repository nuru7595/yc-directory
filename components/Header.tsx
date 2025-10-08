import { auth, signIn, signOut } from "@/auth";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex gap-3 justify-between items-center p-3 bg-slate-300">
      <h1 className="font-bold">YC Directory</h1>
      <div className="flex gap-3 items-center">
        {session?.user ? (
          <>
            <button className="cursor-pointer bg-green-600 text-white px-2 py-1 rounded">
              Create
            </button>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="cursor-pointer bg-red-500 text-white px-2 rounded py-1"
              >
                Logout
              </button>
            </form>
            <span>{session.user.name}</span>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button
              type="submit"
              className="cursor-pointer bg-green-600 text-white px-2 py-1 rounded"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </header>
  );
}
