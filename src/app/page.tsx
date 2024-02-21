import { auth } from "../../auth";
import { getAllUsers } from "./domain/user/user-repository";

export default async function Home() {
  const session = await auth();
  const allUsers = await getAllUsers();
  return (
    <main className="">
      <h1 className="text-3xl"> Hello my friend!</h1>
      {session?.user ? (
        <div>
          <p>
            Welcome back, {session.user.name}! You are signed in with {session.user.email}.
          </p>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </main>
  );
}
