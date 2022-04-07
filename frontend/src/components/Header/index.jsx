import Button from "@components/Button";
import SHeader from "@components/Header/style";

export default function Header() {
  return (
    <SHeader>
      <div className="auth">
        <Button title="Log In" />
        <Button title="Sign Up" />
      </div>
      <h1>HeroesBOX</h1>
    </SHeader>
  );
}
