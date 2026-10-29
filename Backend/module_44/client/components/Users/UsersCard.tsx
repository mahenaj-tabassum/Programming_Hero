"use client";

import { cn } from "@/lib/utils";
import { Pencil, Trash2, UserRound } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

type UsersCardProps = {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

const UsersCard = ({ user, onEdit, onDelete }: UsersCardProps) => {
  const initials = user.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const isAdmin = user.role?.toLowerCase() === "admin";

  return (
    <Card
      className={cn(
        "group border-[#30372C] bg-[#1B1F1B]",
        "text-[#F2F4EC] transition-all duration-200",
        "hover:-translate-y-1 hover:border-[#B9F65B]/60 hover:border",
        "hover:shadow-lg hover:shadow-black/20",
      )}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <Avatar className="size-12 rounded-xl border border-[#414A39]">
            <AvatarFallback className="rounded-xl bg-[#35432C] font-semibold text-[#D2FFA0]">
              {initials || <UserRound className="size-5" />}
            </AvatarFallback>
          </Avatar>

          <Badge
            variant="outline"
            className={cn(
              "border-[#414A39] bg-[#252B23] capitalize",
              isAdmin ? "text-[#B9F65B]" : "text-[#B8C0B0]",
            )}
          >
            {user.role || "Customer"}
          </Badge>
        </div>

        <div className="mt-5 space-y-1">
          <h2 className="truncate text-lg font-semibold tracking-tight">
            {user.name}
          </h2>

          <p className="break-all text-sm text-[#A0A79A]">{user.email}</p>
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs text-[#8D9686]">
          <span className="size-2 rounded-full bg-[#B9F65B]" />
          User ID: {user.id}
        </div>
      </CardContent>

      <CardFooter className="gap-2 flex-col border-t bg-transparent border-[#30372C] p-4">
        <Button
          type="button"
          variant="outline"
          className="w-full py-4 cursor-pointer border-[#414A39] bg-[#20271F] text-[#F2F4EC] hover:border-[#B9F65B] hover:bg-[#252B23] hover:text-[#B9F65B]"
          onClick={() => (window.location.href = `/users/${user.id}`)}
        >
          View Details
        </Button>

        <div className="flex w-full gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onEdit(user)}
            className="flex-1 cursor-pointer border-blue-400/50 bg-blue-500/10 text-blue-300 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200"
          >
            <Pencil className="size-4" />
            Edit
          </Button>

          <AlertDialog>
            <AlertDialogTrigger className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#62413C] bg-transparent px-4 py-1 text-sm font-medium text-[#FF9C8E] hover:border-[#FF9C8E] hover:bg-[#382522] hover:text-[#FFB7AC]">
              <Trash2 className="size-4" />
              Delete
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to delete this user?
                </AlertDialogTitle>

                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  user from your database.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction
                  onClick={() => onDelete(user)}
                  className="cursor-pointer bg-[#A83F35] text-white hover:bg-[#853128]"
                >
                  <Trash2 className="mr-2 size-4" />
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UsersCard;
