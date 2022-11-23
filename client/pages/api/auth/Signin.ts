import { getProviders, signIn } from "next-auth/react";

const SignIn = ({ providers }: any) => {
  console.log(providers);
};

export default SignIn;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
