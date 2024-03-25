import { AuthPage } from "@/components/auth/AuthPage";
import { checkUserSession } from "@/utils/supabase/sessionChecker";
import { redirect } from "next/navigation";

interface Props {
  searchParams: { email?: string };
}

const SignUpPage = async ({ searchParams: { email } }: Props) => {
  const { isSession, userData } = await checkUserSession();
  if (isSession) {
    redirect("/home");
  }
  return (
    <section className="h-full bg-transparent flex flex-col items-center justify-center">
      <div className="background -z-10">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <AuthPage type="sign-up" email={email} />
    </section>
  );
};

export default SignUpPage;
