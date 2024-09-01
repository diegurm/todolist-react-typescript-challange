import React from 'react';

import * as S from './styles';

const Login: React.FC = () => {
  const handleEmailLogin = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleGoogleLogin = () => {
  };

  return (
    <S.Container>
      <S.FormWrapper>
        <S.Title>Sign in</S.Title>
        <S.Form onSubmit={handleEmailLogin}>
          <S.InputGroup>
            <S.Input id="email" name="email" type="email" required placeholder="Email address" className='rounded-t-md' />
            <S.Input id="password" name="password" type="password" required placeholder="Password" className='rounded-b-md' />
          </S.InputGroup>
          <S.Options>
            <div className="flex items-center">
              <S.Checkbox id="remember_me" name="remember_me" type="checkbox" />
              <S.Label htmlFor="remember_me">Remember me</S.Label>
            </div>
            <S.Link href="#">Forgot your password?</S.Link>
          </S.Options>
          <S.Button type="submit">Sign in</S.Button>
        </S.Form>
        <S.Divider><span>or</span></S.Divider>
        <S.GoogleButton type="button" onClick={handleGoogleLogin}>
          <S.GoogleIcon src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" />
          Sign in with Google
        </S.GoogleButton>
      </S.FormWrapper>
    </S.Container>
  );
};

export default Login;