import { RegisterForm } from "../components/reg";
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "center",
};
export default function Register() {
  return (
      <>
      <RegisterForm />

      <div style={styles}>
        <Link href="/auth/login">Registered Before? Signin Now!</Link>
      </div>
      </>
  );
}
