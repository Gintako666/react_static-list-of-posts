import React from 'react';
import { User } from '../../type/type';

export type UserInfoProps = {
  user: User
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { name, email } = user;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
