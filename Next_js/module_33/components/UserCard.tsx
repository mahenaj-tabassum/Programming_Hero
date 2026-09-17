import Link from "next/link";

interface UserObject {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const UserCard = ({ user }: { user: UserObject }) => {
  const { name, username, email, phone, website } = user;

  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-4">
        <div className="flex font-black h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm text-white dark:bg-slate-100 dark:text-slate-900">
          {name.slice(0, 2).toUpperCase()}
        </div>

        <div className="min-w-0">
          <Link href={`/users/${user.id}`}>
            <h3 className="truncate cursor-pointer text-base font-semibold text-slate-900 dark:text-slate-100">
              {name}
            </h3>
          </Link>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">
            @{username}
          </p>
        </div>
      </div>

      <dl className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm dark:border-slate-800">
        <div className="flex items-center gap-3">
          <dt className="w-16 shrink-0 text-slate-400 dark:text-slate-500">
            Email
          </dt>
          <dd className="min-w-0 truncate">
            <a
              href={`mailto:${email}`}
              className="text-slate-700 hover:text-slate-900 hover:underline dark:text-slate-300 dark:hover:text-slate-100"
            >
              {email}
            </a>
          </dd>
        </div>

        <div className="flex items-center gap-3">
          <dt className="w-16 shrink-0 text-slate-400 dark:text-slate-500">
            Phone
          </dt>
          <dd className="min-w-0 truncate text-slate-700 dark:text-slate-300">
            {phone}
          </dd>
        </div>

        <div className="flex items-center gap-3">
          <dt className="w-16 shrink-0 text-slate-400 dark:text-slate-500">
            Website
          </dt>
          <dd className="min-w-0 truncate">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 underline hover:text-slate-900 hover:underline dark:text-slate-300 dark:hover:text-slate-100"
            >
              {name}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default UserCard;
