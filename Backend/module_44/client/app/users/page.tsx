"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  LoaderCircle,
  Plus,
  Search,
  Users,
  X,
} from "lucide-react";

import UsersCard, { type User } from "@/components/Users/UsersCard";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type UserForm = {
  name: string;
  email: string;
  role: string;
};

const emptyForm: UserForm = {
  name: "",
  email: "",
  role: "customer",
};

type ApiUser = {
  id?: string;
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
};

function normalizeUser(user: ApiUser): User {
  return {
    id: String(user.id ?? user._id ?? ""),
    name: user.name ?? "",
    email: user.email ?? "",
    role: user.role ?? "customer",
  };
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form, setForm] = useState<UserForm>(emptyForm);

  const fetchUsers = useCallback(async () => {
    if (!API_URL) {
      setError("NEXT_PUBLIC_API_URL is not configured.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/users`);

      if (!response.ok) {
        throw new Error(`Failed to load users (${response.status}).`);
      }

      const result = await response.json();

      const records = Array.isArray(result) ? result : result.data;

      if (!Array.isArray(records)) {
        throw new Error("The API did not return a users array.");
      }

      setUsers(records.map(normalizeUser));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while loading users.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchUsers();
  }, [fetchUsers]);

  const openCreateForm = () => {
    setEditingUser(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEditForm = (user: User) => {
    setEditingUser(user);
    setForm({
      name: user.name,
      email: user.email,
      role: user.role ?? "customer",
    });
    setShowForm(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!API_URL) {
      setError("NEXT_PUBLIC_API_URL is not configured.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const isEditing = editingUser !== null;

      const url = isEditing
        ? `${API_URL}/users/${encodeURIComponent(editingUser.id)}`
        : `${API_URL}/users`;

      const response = await fetch(url, {
        method: isEditing ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to ${isEditing ? "update" : "create"} user (${response.status}).`,
        );
      }

      setShowForm(false);
      setEditingUser(null);
      setForm(emptyForm);

      await fetchUsers();

      toast.success(
        isEditing ? "User updated successfully!" : "User created successfully!",
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save the user.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (user: User) => {
    if (!API_URL) {
      setError("NEXT_PUBLIC_API_URL is not configured.");
      return;
    }

    try {
      setError("");

      const response = await fetch(
        `${API_URL}/users/${encodeURIComponent(user.id)}`,
        { method: "DELETE" },
      );

      if (!response.ok) {
        throw new Error(`Failed to delete user (${response.status}).`);
      }

      setUsers((currentUsers) =>
        currentUsers.filter((item) => item.id !== user.id),
      );
      await fetchUsers();
      toast.success("User Deleted Successfully!");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not delete the user.",
      );
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.role}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-[#101210] text-[#F2F4EC]">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        {/* Page heading and create action */}
        <header className="flex flex-col  justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Badge
              variant="outline"
              className="mb-4 p-3 border-[#414A39] bg-[#1B1F1B] text-[#B9F65B]"
            >
              <Users className="mr-2 size-3.5" />
              USER MANAGEMENT
            </Badge>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              People, <span className="text-[#B9F65B]">organized.</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#A0A79A] sm:text-base">
              Manage your directory, update user information, and keep
              everything in one place.
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:gap-20">
            {/* Back navigation */}
            <Button
              variant="ghost"
              className="text-[#A0A79A] border border-gray-600 hover:bg-[#1B1F1B] hover:text-[#B9F65B]"
            >
              <Link href="/" className="flex items-center">
                <ArrowRight className="mr-2 size-4" />
                Back to home
              </Link>
            </Button>

            <Button
              onClick={openCreateForm}
              className="bg-[#B9F65B] text-[#17200F] hover:bg-[#D2FFA0]"
            >
              <Plus className="size-4" />
              Add user
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </header>

        {/* Summary cards */}
        <section className="grid gap-4 sm:grid-cols-3">
          <Card className="border-[#30372C] bg-[#1B1F1B] text-[#F2F4EC]">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-[#A0A79A]">Total users</p>
                <p className="mt-2 text-3xl font-semibold">{users.length}</p>
              </div>
              <Users className="size-7 text-[#B9F65B]" />
            </CardContent>
          </Card>

          <Card className="border-[#30372C] bg-[#1B1F1B] text-[#F2F4EC]">
            <CardContent className="p-5">
              <p className="text-sm text-[#A0A79A]">Administrators</p>
              <p className="mt-2 text-3xl font-semibold">
                {
                  users.filter((user) => user.role?.toLowerCase() === "admin")
                    .length
                }
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#30372C] bg-[#1B1F1B] text-[#F2F4EC]">
            <CardContent className="p-5">
              <p className="text-sm text-[#A0A79A]">Other users</p>
              <p className="mt-2 text-3xl font-semibold">
                {
                  users.filter((user) => user.role?.toLowerCase() !== "admin")
                    .length
                }
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Create and edit form */}
        {showForm && (
          <Card className="border-[#414A39] bg-[#1B1F1B] text-[#F2F4EC]">
            <CardContent className="p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {editingUser ? "Edit user" : "Create a user"}
                  </h2>
                  <p className="mt-1 text-sm text-[#A0A79A]">
                    {editingUser
                      ? "Update the user's information."
                      : "Add a new person to your directory."}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowForm(false)}
                  aria-label="Close form"
                  className="text-[#A0A79A] hover:bg-[#30372C] hover:text-white"
                >
                  <X className="size-4" />
                </Button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid gap-4 sm:grid-cols-3"
              >
                <Input
                  placeholder="Full name"
                  aria-label="Full name"
                  name="name"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  required
                  className="border-[#414A39] bg-[#101210] text-white placeholder:text-[#7F8878]"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  required
                  className="border-[#414A39] bg-[#101210] text-white placeholder:text-[#7F8878]"
                />

                <Input
                  placeholder="Role (e.g. customer)"
                  aria-label="User role"
                  value={form.role}
                  name="user role"
                  onChange={(event) =>
                    setForm({ ...form, role: event.target.value })
                  }
                  required
                  className="border-[#414A39] bg-[#101210] text-white placeholder:text-[#7F8878]"
                />

                <div className="flex gap-2 sm:col-span-3">
                  <Button
                    type="submit"
                    disabled={saving}
                    className="bg-[#B9F65B] text-[#17200F] hover:bg-[#D2FFA0]"
                  >
                    {saving && <LoaderCircle className="size-4 animate-spin" />}
                    {saving
                      ? "Saving..."
                      : editingUser
                        ? "Save changes"
                        : "Create user"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="border-[#414A39] bg-transparent text-[#F2F4EC]"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Search bar and directory */}
        <section className="space-y-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold">User directory</h2>
              <p className="mt-1 text-sm text-[#A0A79A]">
                {filteredUsers.length}{" "}
                {filteredUsers.length === 1 ? "person" : "people"} found
              </p>
            </div>

            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8D9686]" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by name, email, or role..."
                className={cn(
                  "border-[#30372C] bg-[#1B1F1B] pl-10 text-[#F2F4EC]",
                  "placeholder:text-[#7F8878] focus-visible:ring-[#B9F65B]",
                )}
              />
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-[#62413C] bg-[#382522] p-4 text-sm text-[#FFB7AC]"
            >
              {error}
              <Button
                variant="link"
                onClick={() => void fetchUsers()}
                className="ml-2 text-[#FFB7AC]"
              >
                Try again
              </Button>
            </div>
          )}

          {loading ? (
            <div className="flex min-h-48 items-center justify-center gap-3 text-[#A0A79A]">
              <LoaderCircle className="size-5 animate-spin text-[#B9F65B]" />
              Loading users...
            </div>
          ) : filteredUsers.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredUsers.map((user) => (
                <UsersCard
                  key={user.id}
                  user={user}
                  onEdit={openEditForm}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <Card className="border-dashed border-[#414A39] bg-[#1B1F1B] text-[#F2F4EC]">
              <CardContent className="flex min-h-56 flex-col items-center justify-center text-center">
                <Users className="mb-3 size-8 text-[#8D9686]" />
                <h3 className="font-semibold">No users found</h3>
                <p className="mt-2 text-sm text-[#A0A79A]">
                  {search
                    ? "Try another search term."
                    : "Create your first user to get started."}
                </p>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </main>
  );
};

export default UsersPage;
