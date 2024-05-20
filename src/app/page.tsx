import { SignIn } from '@/src/components/signIn';
import { SignUp } from '../components/signUp';

export default function Home() {
  return (
    <main>
      <div>
        <p>Hello, I'm ChatSphere!</p>
      </div>
      <SignIn email={''} password={''} />
      <SignUp email={''} password={''} />
    </main>
  );
}
