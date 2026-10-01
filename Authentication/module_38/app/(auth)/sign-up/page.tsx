import { SignUp } from "@/components/SignUp";

const SignUpPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4">
      {/* Background glow blobs */}
      <div className="bg-indigo-600/30 h-96 w-96 rounded-full blur-3xl absolute -left-32 -top-32 pointer-events-none" />
      <div className="bg-fuchsia-600/20 h-96 w-96 rounded-full blur-3xl absolute -right-32 -bottom-32 pointer-events-none" />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[48px_48px]" />
      
      <SignUp />
    </main>
  );
};

export default SignUpPage;
