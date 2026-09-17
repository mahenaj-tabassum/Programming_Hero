import { UserObject } from "@/type/userDetailsType";
import React from "react";

const UserDetailsPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user: UserObject = await fetchData.json();
  console.log(user);

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full  max-w-md  rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 border-b border-slate-100 px-8 pb-6 pt-8 text-center dark:border-slate-800">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-lg font-medium text-white dark:bg-slate-100 dark:text-slate-900">
            {user.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {user.name}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              @{user.username}
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3 px-8 py-6 text-sm">
          <Row label="Email">
            <a
              href={`mailto:${user.email}`}
              className="text-slate-700 hover:text-slate-900 hover:underline dark:text-slate-300 dark:hover:text-slate-100"
            >
              {user.email}
            </a>
          </Row>
          <Row label="Phone">
            <span className="text-slate-700 dark:text-slate-300">
              {user.phone}
            </span>
          </Row>
          <Row label="Website">
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 hover:underline dark:text-slate-300 dark:hover:text-slate-100"
            >
              {user.website}
            </a>
          </Row>
        </div>

        {/* Address */}
        <div className="border-t border-slate-100 px-8 py-6 dark:border-slate-800">
          <h3 className="text-xs font-medium text-slate-400 dark:text-slate-500">
            Address
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

        {/* Company */}
        <div className="border-t border-slate-100 px-8 py-6 dark:border-slate-800">
          <h3 className="text-xs font-medium text-slate-400 dark:text-slate-500">
            Company
          </h3>
          <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">
            {user.company.name}
          </p>
          <p className="mt-1 text-sm italic text-slate-600 dark:text-slate-400">
            &ldquo;{user.company.catchPhrase}&rdquo;
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
            {user.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0 text-slate-400 dark:text-slate-500">
        {label}
      </span>
      <span className="min-w-0 truncate">{children}</span>
    </div>
  );
}

export default UserDetailsPage;
